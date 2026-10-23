// 1. استيراد المكتبات عبر CDN لـ GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. إعدادات مشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyCvRORhsSl05y-8pu4fERx3gpSYT_XIwrk",
  authDomain: "enstp-forum-c5a28.firebaseapp.com",
  projectId: "enstp-forum-c5a28",
  storageBucket: "enstp-forum-c5a28.firebasestorage.app",
  messagingSenderId: "129732313908",
  appId: "1:129732313908:web:c06215b2fde653b76c9b61",
  measurementId: "G-D5SPDJHPMC"
};

// 3. تهيئة التطبيق والخدمات
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// ==========================================
// منطق المنتدى (المصادقة والمنشورات)
// ==========================================

let currentUser = null;
let currentChannelId = 'general';

// تسجيل الدخول بواسطة Google (مع تقييد البريد الرسمي @enstp.edu.dz)
const loginBtn = document.getElementById('googleLoginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider).then((result) => {
      const email = result.user.email;
      
      // التحقق الصارم من نطاق البريد المؤسساتي
      if (!email.toLowerCase().endsWith("@enstp.edu.dz")) {
        document.getElementById('authError').classList.remove('hidden');
        signOut(auth);
      }
    }).catch((error) => {
      console.error("خطأ أثناء تسجيل الدخول:", error);
    });
  });
}

// مراقبة حالة الجلسة وتحديث الواجهة
onAuthStateChanged(auth, (user) => {
  if (user && user.email.toLowerCase().endsWith("@enstp.edu.dz")) {
    currentUser = user;
    document.getElementById('authOverlay')?.classList.add('hidden');
    document.getElementById('forumMain')?.classList.remove('hidden');
    
    document.getElementById('userName').innerText = user.displayName || 'طالب';
    document.getElementById('userEmail').innerText = user.email;
    document.getElementById('userAvatar').src = user.photoURL || 'https://via.placeholder.com/150';

    loadPosts(currentChannelId);
  } else {
    currentUser = null;
    document.getElementById('authOverlay')?.classList.remove('hidden');
    document.getElementById('forumMain')?.classList.add('hidden');
  }
});

// تسجيل الخروج
document.getElementById('logoutBtn')?.addEventListener('click', () => {
  signOut(auth);
});

// التبديل بين القنوات أو الغرف
window.selectChannel = (channelId, channelTitle) => {
  currentChannelId = channelId;
  document.getElementById('currentChannelTitle').innerText = channelTitle;
  loadPosts(channelId);
};

// تحميل المنشورات لحظياً (Real-time)
function loadPosts(channelId) {
  const postsFeed = document.getElementById('postsFeed');
  if (!postsFeed) return;
  
  postsFeed.innerHTML = '<p class="text-center text-gray-500 py-10">جاري تحميل المشاركات...</p>';

  const q = query(
    collection(db, "posts"),
    where("channelId", "==", channelId),
    orderBy("createdAt", "desc")
  );

  onSnapshot(q, (snapshot) => {
    postsFeed.innerHTML = '';
    if (snapshot.empty) {
      postsFeed.innerHTML = '<p class="text-center text-gray-400 py-10">لا توجد منشورات في هذه الغرفة بعد. كن أول من ينشر مشاركة!</p>';
      return;
    }

    snapshot.forEach((doc) => {
      const post = doc.data();
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString('ar-DZ') : 'الآن';
      
      const postElement = document.createElement('div');
      postElement.className = "bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2";
      postElement.innerHTML = `
        <div class="flex items-center justify-between border-b border-gray-50 pb-2">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
              ${post.authorName ? post.authorName.charAt(0) : 'ط'}
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-800">${post.authorName}</p>
              <p class="text-xs text-gray-400">${post.authorEmail}</p>
            </div>
          </div>
          <span class="text-xs text-gray-400">${date}</span>
        </div>
        <p class="text-gray-700 whitespace-pre-line my-1">${post.content}</p>
      `;
      postsFeed.appendChild(postElement);
    });
  });
}

// نشر مشاركة جديدة
document.getElementById('submitPostBtn')?.addEventListener('click', async () => {
  const contentInput = document.getElementById('postContent');
  const text = contentInput.value.trim();

  if (!text) {
    alert("يرجى كتابة نص المشاركة قبل الضغط على نشر.");
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      channelId: currentChannelId,
      content: text,
      authorName: currentUser.displayName || 'طالب المدرسة',
      authorEmail: currentUser.email,
      createdAt: serverTimestamp()
    });

    contentInput.value = '';
  } catch (error) {
    console.error("خطأ أثناء النشر:", error);
    alert("تعذر نشر المشاركة حالياً، يرجى المحاولة لاحقاً.");
  }
});
