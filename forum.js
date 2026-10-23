import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ⚠️ قم يستبدال هذه الإعدادات بمعلومات مشروعك على Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// تهيئة المشروع
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// متغيرات التطبيق
let currentUser = null;
let currentChannelId = 'general';

// --- 1. التحقق من الدخول والبريد الرسمي ---
document.getElementById('googleLoginBtn').addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result) => {
    const email = result.user.email;
    
    // شرط التحقق المباشر من نطاق البريد الإلكتروني للمدرسة
    if (!email.toLowerCase().endsWith("@enstp.edu.dz")) {
      document.getElementById('authError').classList.remove('hidden');
      signOut(auth); // طرد الحسابات الخارجية تلقائياً
    }
  }).catch((error) => {
    console.error("خطأ أثناء الدخول:", error);
  });
});

// مراقبة حالة تسجيل الدخول
onAuthStateChanged(auth, (user) => {
  if (user && user.email.toLowerCase().endsWith("@enstp.edu.dz")) {
    currentUser = user;
    document.getElementById('authOverlay').classList.add('hidden');
    document.getElementById('forumMain').classList.remove('hidden');
    
    // إظهار بيانات المستخدم
    document.getElementById('userName').innerText = user.displayName || 'طالب';
    document.getElementById('userEmail').innerText = user.email;
    document.getElementById('userAvatar').src = user.photoURL || 'https://via.placeholder.com/150';

    // تحميل منشورات الغرفة العامة افتراضياً
    loadPosts(currentChannelId);
  } else {
    currentUser = null;
    document.getElementById('authOverlay').classList.remove('hidden');
    document.getElementById('forumMain').classList.add('hidden');
  }
});

// تسجيل الخروج
document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth);
});

// --- 2. التبديل بين الغرف ---
window.selectChannel = (channelId, channelTitle) => {
  currentChannelId = channelId;
  document.getElementById('currentChannelTitle').innerText = channelTitle;
  loadPosts(channelId);
};

// --- 3. جلب المنشورات لحظياً (Real-time Listener) ---
function loadPosts(channelId) {
  const postsFeed = document.getElementById('postsFeed');
  postsFeed.innerHTML = '<p class="text-center text-gray-500 py-10">جاري تحميل المشاركات...</p>';

  const q = query(
    collection(db, "posts"),
    where("channelId", "==", channelId),
    orderBy("createdAt", "desc")
  );

  onSnapshot(q, (snapshot) => {
    postsFeed.innerHTML = '';
    if (snapshot.empty) {
      postsFeed.innerHTML = '<p class="text-center text-gray-400 py-10">لا توجد منشورات في هذه الغرفة بعد. كن أول من يشارك!</p>';
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
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-sm">
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

// --- 4. إضافة منشور جديد ---
document.getElementById('submitPostBtn').addEventListener('click', async () => {
  const contentInput = document.getElementById('postContent');
  const text = contentInput.value.trim();

  if (!text) {
    alert("الرجاء كتابة نص المنشور قبل الضغط على نشر.");
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

    contentInput.value = ''; // تفريغ الخانة بعد النشر
  } catch (error) {
    console.error("خطأ أثناء النشر:", error);
    alert("تعذر نشر المشاركة، يرجى المحاولة لاحقاً.");
  }
});
