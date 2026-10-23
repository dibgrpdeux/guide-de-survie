// استيراد المكتبات
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyCvRORhsSl05y-8pu4fERx3gpSYT_XIwrk",
  authDomain: "enstp-forum-c5a28.firebaseapp.com",
  projectId: "enstp-forum-c5a28",
  storageBucket: "enstp-forum-c5a28.firebasestorage.app",
  messagingSenderId: "129732313908",
  appId: "1:129732313908:web:c06215b2fde653b76c9b61",
  measurementId: "G-D5SPDJHPMC"
};

// تهيئة التطبيق والخدمات
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// المتغيرات العامة
let currentUser = null;
let currentChannelId = 'general';
let unsubscribePosts = null;

// عناصر DOM
const loadingOverlay = document.getElementById('loadingOverlay');
const authOverlay = document.getElementById('authOverlay');
const forumMain = document.getElementById('forumMain');
const loginBtn = document.getElementById('googleLoginBtn');
const authError = document.getElementById('authError');
const logoutBtn = document.getElementById('logoutBtn');
const postsFeed = document.getElementById('postsFeed');
const postContent = document.getElementById('postContent');
const submitPostBtn = document.getElementById('submitPostBtn');

// 1. التحقق من نتيجة إعادة التوجيه (عند العودة من صفحة جوجل)
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const email = result.user.email;
      if (!email.toLowerCase().endsWith("@enstp.edu.dz")) {
        authError.classList.remove('hidden');
        signOut(auth);
      }
    }
  })
  .catch((error) => {
    console.error("خطأ في نتيجة إعادة التوجيه:", error);
  });

// 2. زر تسجيل الدخول (يستخدم إعادة التوجيه بدلاً من النافذة المنبثقة)
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    // إخفاء أي رسالة خطأ سابقة
    authError.classList.add('hidden');
    
    // استخدام signInWithRedirect لتجنب حظر النوافذ المنبثقة
    signInWithRedirect(auth, provider)
      .catch((error) => {
        console.error("خطأ أثناء بدء تسجيل الدخول:", error);
        alert("حدث خطأ أثناء الاتصال بجوجل. يرجى المحاولة مرة أخرى.");
      });
  });
}

// 3. مراقبة حالة الجلسة
onAuthStateChanged(auth, (user) => {
  if (loadingOverlay) loadingOverlay.style.display = 'none';

  if (user && user.email.toLowerCase().endsWith("@enstp.edu.dz")) {
    currentUser = user;
    authOverlay.classList.add('hidden');
    forumMain.classList.remove('hidden');
    
    document.getElementById('userName').innerText = user.displayName || 'طالب';
    document.getElementById('userEmail').innerText = user.email;
    document.getElementById('userAvatar').src = user.photoURL || 'https://ui-avatars.com/api/?name=' + (user.displayName || 'Student') + '&background=random';

    if (!unsubscribePosts) {
      loadPosts(currentChannelId);
    }
  } else {
    currentUser = null;
    authOverlay.classList.remove('hidden');
    forumMain.classList.add('hidden');
    if (user) signOut(auth);
  }
});

// 4. تسجيل الخروج
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    if (unsubscribePosts) { unsubscribePosts(); unsubscribePosts = null; }
    signOut(auth);
  });
}

// 5. التبديل بين القنوات
window.selectChannel = (channelId, channelTitle) => {
  if (currentChannelId === channelId) return;
  
  currentChannelId = channelId;
  document.getElementById('currentChannelTitle').innerHTML = `<i class="fa-solid fa-hashtag text-gray-400"></i> ${channelTitle}`;
  
  document.querySelectorAll('.channel-btn').forEach(btn => {
    btn.classList.remove('bg-gray-800', 'text-white');
    btn.classList.add('text-gray-400');
  });
  event.currentTarget.classList.remove('text-gray-400');
  event.currentTarget.classList.add('bg-gray-800', 'text-white');

  if (currentUser) {
    if (unsubscribePosts) unsubscribePosts();
    loadPosts(channelId);
  }
};

// 6. تحميل المنشورات
function loadPosts(channelId) {
  if (!postsFeed) return;
  
  postsFeed.innerHTML = '<div class="flex justify-center py-10"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>';

  const q = query(
    collection(db, "posts"),
    where("channelId", "==", channelId),
    orderBy("createdAt", "desc")
  );

  unsubscribePosts = onSnapshot(q, (snapshot) => {
    postsFeed.innerHTML = '';
    if (snapshot.empty) {
      postsFeed.innerHTML = `
        <div class="text-center py-20 text-gray-400">
          <i class="fa-regular fa-comment-dots text-5xl mb-4 opacity-50"></i>
          <p class="font-bold">لا توجد منشورات هنا بعد.</p>
          <p class="text-xs mt-1">كن أول من يبدأ النقاش!</p>
        </div>`;
      return;
    }

    snapshot.forEach((doc) => {
      const post = doc.data();
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString('ar-DZ', { hour: '2-digit', minute:'2-digit' }) : 'الآن';
      const isMe = post.authorEmail === currentUser.email;
      
      const postElement = document.createElement('div');
      postElement.className = `bg-white p-4 rounded-2xl shadow-sm border ${isMe ? 'border-blue-200 bg-blue-50/30' : 'border-gray-100'} flex flex-col gap-2 max-w-3xl mx-auto w-full`;
      postElement.innerHTML = `
        <div class="flex items-center justify-between border-b border-gray-50 pb-2">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full ${isMe ? 'bg-blue-600' : 'bg-gray-700'} text-white font-bold flex items-center justify-center text-sm shadow-sm">
              ${post.authorName ? post.authorName.charAt(0) : 'ط'}
            </div>
            <div>
              <p class="text-sm font-bold text-gray-800">${post.authorName} ${isMe ? '<span class="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full mr-2">أنت</span>' : ''}</p>
              <p class="text-[10px] text-gray-400 font-mono dir-ltr text-right">${post.authorEmail}</p>
            </div>
          </div>
          <span class="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-md"><i class="fa-regular fa-clock ml-1"></i>${date}</span>
        </div>
        <p class="text-gray-700 text-sm whitespace-pre-line my-1 leading-relaxed">${post.content}</p>
      `;
      postsFeed.appendChild(postElement);
    });
  }, (error) => {
    console.error("خطأ في جلب المنشورات:", error);
    postsFeed.innerHTML = '<p class="text-center text-red-500 font-bold py-10">حدث خطأ في تحميل المنشورات.</p>';
  });
}

// 7. نشر مشاركة جديدة
if (submitPostBtn) {
  submitPostBtn.addEventListener('click', async () => {
    const text = postContent.value.trim();
    if (!text) { postContent.focus(); return; }

    submitPostBtn.disabled = true;
    submitPostBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

    try {
      await addDoc(collection(db, "posts"), {
        channelId: currentChannelId,
        content: text,
        authorName: currentUser.displayName || 'طالب المدرسة',
        authorEmail: currentUser.email,
        createdAt: serverTimestamp()
      });

      postContent.value = '';
      postContent.style.height = 'auto';
    } catch (error) {
      console.error("خطأ أثناء النشر:", error);
      alert("تعذر نشر المشاركة. تحقق من اتصالك بالإنترنت.");
    } finally {
      submitPostBtn.disabled = false;
      submitPostBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
    }
  });
}

// 8. تمدد مربع النص
if (postContent) {
  postContent.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
    if(this.value === '') this.style.height = 'auto';
  });
  
  postContent.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitPostBtn.click();
    }
  });
}
