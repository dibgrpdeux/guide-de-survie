import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvRORhsSl05y-8pu4fERx3gpSYT_XIwrk",
  authDomain: "enstp-forum-c5a28.firebaseapp.com",
  projectId: "enstp-forum-c5a28",
  storageBucket: "enstp-forum-c5a28.firebasestorage.app",
  messagingSenderId: "129732313908",
  appId: "1:129732313908:web:c06215b2fde653b76c9b61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// عناصر DOM
const loadingScreen = document.getElementById('loadingScreen');
const authScreen = document.getElementById('authScreen');
const forumScreen = document.getElementById('forumScreen');
const submitBtn = document.getElementById('submitBtn');
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');
const registerFields = document.getElementById('registerFields');
const errorMsg = document.getElementById('errorMsg');
const logoutBtn = document.getElementById('logoutBtn');
const postsContainer = document.getElementById('postsContainer');
const postBtn = document.getElementById('postBtn');
const postText = document.getElementById('postText');

let isLoginMode = true;
let currentUserData = null;
let unsubscribePosts = null;

// التبديل بين الدخول وإنشاء الحساب
toggleBtn.addEventListener('click', () => {
  isLoginMode = !isLoginMode;
  errorMsg.classList.add('hidden');
  
  if (isLoginMode) {
    registerFields.classList.add('hidden');
    submitBtn.innerText = 'تسجيل الدخول';
    toggleText.innerText = 'ليس لديك حساب؟';
    toggleBtn.innerText = 'إنشاء حساب';
  } else {
    registerFields.classList.remove('hidden');
    submitBtn.innerText = 'إنشاء حساب جديد';
    toggleText.innerText = 'لديك حساب بالفعل؟';
    toggleBtn.innerText = 'تسجيل الدخول';
  }
});

// معالجة زر الدخول / التسجيل
submitBtn.addEventListener('click', async () => {
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value;
  
  if (!email.endsWith('@enstp.edu.dz')) {
    return showError('يجب استخدام بريد ينتهي بـ @enstp.edu.dz');
  }
  if (pass.length < 6) {
    return showError('كلمة السر يجب أن تكون 6 أحرف على الأقل');
  }

  submitBtn.disabled = true;
  submitBtn.innerText = 'جاري المعالجة...';
  errorMsg.classList.add('hidden');

  try {
    if (isLoginMode) {
      // تسجيل الدخول
      await signInWithEmailAndPassword(auth, email, pass);
    } else {
      // إنشاء حساب
      const firstName = document.getElementById('firstNameInput').value.trim();
      const lastName = document.getElementById('lastNameInput').value.trim();
      const year = document.getElementById('yearInput').value;

      if (!firstName || !lastName) throw new Error("يرجى ملء الاسم واللقب");

      // 1. إنشاء الحساب في Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      
      // 2. حفظ الاسم واللقب داخل الحساب
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName} | ${year}`
      });
    }
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/email-already-in-use') showError('هذا البريد مسجل مسبقاً');
    else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') showError('البريد أو كلمة السر غير صحيحة');
    else if (error.code === 'auth/weak-password') showError('كلمة السر ضعيفة جداً');
    else showError(error.message || 'حدث خطأ، حاول مرة أخرى');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = isLoginMode ? 'تسجيل الدخول' : 'إنشاء حساب جديد';
  }
});

function showError(msg) {
  errorMsg.innerText = msg;
  errorMsg.classList.remove('hidden');
}

// مراقبة حالة الدخول
onAuthStateChanged(auth, (user) => {
  loadingScreen.classList.add('hidden');
  
  if (user) {
    // المستخدم مسجل
    currentUserData = {
      email: user.email,
      name: user.displayName ? user.displayName.split('|')[0].trim() : user.email.split('@')[0],
      year: user.displayName ? user.displayName.split('|')[1].trim() : 'طالب',
    };

    authScreen.classList.add('hidden');
    forumScreen.classList.remove('hidden');
    forumScreen.classList.add('flex');

    document.getElementById('userAvatar').innerText = currentUserData.name.charAt(0);
    document.getElementById('userInfo').innerText = `${currentUserData.name} | ${currentUserData.year}`;

    loadPosts();
  } else {
    // غير مسجل
    currentUserData = null;
    if (unsubscribePosts) unsubscribePosts();
    authScreen.classList.remove('hidden');
    forumScreen.classList.add('hidden');
    forumScreen.classList.remove('flex');
  }
});

// تسجيل الخروج
logoutBtn.addEventListener('click', () => {
  signOut(auth);
});

// نشر منشور
postBtn.addEventListener('click', async () => {
  const text = postText.value.trim();
  if (!text) return;

  postBtn.disabled = true;
  postBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

  try {
    await addDoc(collection(db, "posts"), {
      authorName: currentUserData.name,
      authorYear: currentUserData.year,
      authorEmail: currentUserData.email,
      content: text,
      createdAt: serverTimestamp()
    });
    postText.value = '';
    postText.style.height = 'auto';
  } catch (error) {
    alert("تعذر النشر: " + error.message);
  } finally {
    postBtn.disabled = false;
    postBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
  }
});

// تحميل المنشورات لحظياً
function loadPosts() {
  if (unsubscribePosts) unsubscribePosts();
  
  postsContainer.innerHTML = '<div class="text-center mt-10 text-gray-400"><i class="fa-solid fa-circle-notch fa-spin text-3xl"></i><p class="mt-2">جاري تحميل المنشورات...</p></div>';

  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

  unsubscribePosts = onSnapshot(q, (snapshot) => {
    postsContainer.innerHTML = '';
    
    if (snapshot.empty) {
      postsContainer.innerHTML = '<div class="text-center text-gray-400 mt-10"><i class="fa-regular fa-comment-dots text-4xl mb-2"></i><p>لا توجد منشورات بعد. كن أول من يكتب!</p></div>';
      return;
    }

    snapshot.forEach((doc) => {
      const post = doc.data();
      const isMe = post.authorEmail === currentUserData.email;
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString('ar-DZ', { hour: '2-digit', minute:'2-digit' }) : 'الآن';

      const postHTML = `
        <div class="bg-white p-4 rounded-xl shadow-sm border ${isMe ? 'border-blue-300 bg-blue-50' : 'border-gray-100'}">
          <div class="flex justify-between items-start mb-2">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full ${isMe ? 'bg-blue-600' : 'bg-gray-700'} text-white flex items-center justify-center font-bold text-sm">
                ${post.authorName.charAt(0)}
              </div>
              <div>
                <p class="text-sm font-bold">${post.authorName} ${isMe ? '<span class="text-[10px] bg-blue-100 text-blue-600 px-2 rounded-full mr-1">أنت</span>' : ''}</p>
                <p class="text-[10px] text-gray-500">${post.authorYear}</p>
              </div>
            </div>
            <span class="text-xs text-gray-400">${date}</span>
          </div>
          <p class="text-gray-700 text-sm whitespace-pre-line">${post.content}</p>
        </div>
      `;
      postsContainer.innerHTML += postHTML;
    });
  }, (error) => {
    postsContainer.innerHTML = '<p class="text-center text-red-500">خطأ في تحميل المنشورات.</p>';
  });
}

// جعل مربع النص يتمدد
postText.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
