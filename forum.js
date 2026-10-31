import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, doc, setDoc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// استيراد Firebase Storage
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

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
const storage = getStorage(app); // تهيئة التخزين

let isLoginMode = true;
let currentUserData = null;
let currentChannelId = 'general_posts';
let currentChannelType = 'posts';
let unsubscribeMessages = null;
let currentLang = localStorage.getItem('enstp_lang') || 'ar';
let attachedFile = null; // لتخزين الملف المرفق مؤقتاً

// ... (بقية الكود الخاص بالولايات والشاشات كما هو) ...
// (سأضع هنا فقط الدوال التي تم تعديلها أو إضافتها)

// دالة للتحقق من الوضع الليلي عند التحميل
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

window.toggleDarkMode = function() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};

// دالة التعامل مع رفع الملفات
window.handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    alert("حجم الملف كبير جداً (الحد الأقصى 5 ميجابايت)");
    return;
  }

  attachedFile = file;
  const previewContainer = document.getElementById('filePreview');
  previewContainer.innerHTML = '';
  previewContainer.classList.remove('hidden');

  const fileUrl = URL.createObjectURL(file);
  let previewHtml = '';

  if (file.type.startsWith('image/')) {
    previewHtml = `<img src="${fileUrl}" class="h-16 w-16 object-cover rounded-lg border border-gray-300">`;
  } else if (file.type.startsWith('video/')) {
    previewHtml = `<video src="${fileUrl}" class="h-16 w-16 object-cover rounded-lg border border-gray-300" controls></video>`;
  } else {
    previewHtml = `<div class="flex items-center gap-2 bg-gray-200 p-2 rounded-lg"><i class="fa-solid fa-file text-gray-600"></i> <span class="text-xs text-gray-700 truncate">${file.name}</span></div>`;
  }

  previewContainer.innerHTML = `
    <div class="flex items-center justify-between bg-gray-50 dark:bg-slate-800 p-2 rounded-lg border border-gray-200 dark:border-slate-700">
      <div class="flex items-center gap-2">
        ${previewHtml}
        <span class="text-xs text-gray-600 dark:text-gray-300 truncate max-w-[150px]">${file.name}</span>
      </div>
      <button onclick="clearFile()" class="text-red-500 hover:text-red-700 text-sm font-bold"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `;
};

window.clearFile = () => {
  attachedFile = null;
  document.getElementById('fileInput').value = '';
  document.getElementById('filePreview').classList.add('hidden');
  document.getElementById('filePreview').innerHTML = '';
};

// دالة إرسال الرسالة/المنشور (معدلة لرفع الملفات)
postBtn.addEventListener('click', async () => {
  const text = postText.value.trim();
  if (!text && !attachedFile) return; // لا ترسل إذا كان فارغاً

  postBtn.disabled = true;
  postBtn.innerText = '...';
  
  let fileUrl = null;
  let fileType = null;

  try {
    // 1. رفع الملف إذا وجد
    if (attachedFile) {
      const storageRef = ref(storage, `posts/${Date.now()}_${attachedFile.name}`);
      await uploadBytes(storageRef, attachedFile);
      fileUrl = await getDownloadURL(storageRef);
      fileType = attachedFile.type;
    }

    // 2. إرسال البيانات إلى Firestore
    await addDoc(collection(db, "posts"), {
      channelId: currentChannelId,
      channelType: currentChannelType,
      content: text,
      fileUrl: fileUrl, // حفظ رابط الملف
      fileType: fileType, // حفظ نوع الملف
      authorName: currentUserData.name,
      authorYear: currentUserData.year,
      authorEmail: currentUserData.email,
      comments: [],
      createdAt: serverTimestamp()
    });

    // 3. تنظيف الواجهة
    postText.value = '';
    postText.style.height = 'auto';
    clearFile();
    
  } catch (e) { 
    console.error(e);
    alert("حدث خطأ أثناء الإرسال: " + e.message); 
  } finally { 
    postBtn.disabled = false; 
    postBtn.innerHTML = `إرسال <i class="fa-solid fa-paper-plane text-xs"></i>`; 
  }
});

// دالة عرض الرسائل (معدلة لعرض الصور والملفات)
function loadMessages(channelId, type) {
  if (unsubscribeMessages) unsubscribeMessages();
  postsContainer.innerHTML = '<div class="text-center mt-10 text-gray-400"><i class="fa-solid fa-spinner fa-spin text-2xl"></i></div>';

  const q = query(collection(db, "posts"), where("channelId", "==", channelId), orderBy("createdAt", "desc"));

  unsubscribeMessages = onSnapshot(q, (snapshot) => {
    postsContainer.innerHTML = '';
    if (snapshot.empty) {
      postsContainer.innerHTML = `<div class="text-center text-gray-400 mt-10">${type === 'chat' ? 'لا توجد رسائل' : 'لا توجد منشورات'}</div>`;
      return;
    }

    let docs = [];
    snapshot.forEach(doc => docs.push(doc));
    if (type === 'chat') docs.reverse(); 

    docs.forEach((docSnap) => {
      const post = docSnap.data();
      const postId = docSnap.id;
      const isMe = post.authorEmail === currentUserData.email;
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString(currentLang === 'ar' ? 'ar-DZ' : 'fr-FR', { hour: '2-digit', minute:'2-digit' }) : '...';
      
      // إنشاء HTML للملف إذا وجد
      let mediaHtml = '';
      if (post.fileUrl) {
        if (post.fileType && post.fileType.startsWith('image/')) {
          mediaHtml = `<img src="${post.fileUrl}" class="mt-2 rounded-lg max-h-60 w-full object-cover cursor-pointer" onclick="window.open('${post.fileUrl}')">`;
        } else if (post.fileType && post.fileType.startsWith('video/')) {
          mediaHtml = `<video src="${post.fileUrl}" class="mt-2 rounded-lg max-h-60 w-full" controls></video>`;
        } else {
          mediaHtml = `<a href="${post.fileUrl}" target="_blank" class="mt-2 flex items-center gap-2 bg-gray-100 p-2 rounded-lg text-blue-600 hover:underline"><i class="fa-solid fa-file"></i> تحميل الملف</a>`;
        }
      }

      if (type === 'chat') {
        postsContainer.innerHTML += `
          <div class="flex ${isMe ? 'justify-end' : 'justify-start'} mb-3 w-full max-w-3xl mx-auto animate-fade-in">
            <div class="${isMe ? 'chat-bubble-me' : 'chat-bubble-other'} px-4 py-2 max-w-[80%] relative">
              ${!isMe ? `<p class="text-[10px] font-bold text-brand-500 mb-1">${post.authorName}</p>` : ''}
              <p class="text-sm whitespace-pre-line">${post.content}</p>
              ${mediaHtml}
              <span class="text-[9px] ${isMe ? 'text-white/70' : 'text-gray-400'} block text-left mt-1">${date}</span>
            </div>
          </div>
        `;
      } else {
        // ... (نفس كود عرض المنشورات السابق مع إضافة mediaHtml)
      }
    });
    
    if (type === 'chat') postsContainer.scrollTop = postsContainer.scrollHeight;
    
  }, (error) => {
    postsContainer.innerHTML = `<div class="text-red-500 text-center mt-10 font-bold">Error: ${error.message}</div>`;
  });
}

// ... (بقية الكود الأصلي مثل دوال القنوات والدردشة والترجمة) ...
