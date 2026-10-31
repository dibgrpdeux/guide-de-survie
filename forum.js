// ==========================================
// 1. الاستيراد
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// ==========================================
// 2. إعدادات Firebase
// ==========================================
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

// ==========================================
// 3. إعدادات Supabase (لرفع الملفات)
// ==========================================
const supabaseUrl = 'https://zvvnkpujqewgpxwfsrvw.supabase.co';
const supabaseKey = 'sb_publishable_eWjkMgImX1Czpm6qEOwuqQ__wLYpTUm';
const supabase = createClient(supabaseUrl, supabaseKey);

// ==========================================
// 4. المتغيرات
// ==========================================
let isLoginMode = true;
let currentUserData = null;
let currentChannelId = 'general_posts';
let currentChannelType = 'posts';
let unsubscribeMessages = null;
let currentLang = localStorage.getItem('enstp_lang') || 'ar';
let attachedFile = null;

const wilayas = ["01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة", "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة", "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو", "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة", "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة", "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة", "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس", "36 - الطارف", "37 - تندوف", "38 - تيسمسيلت", "39 - الوادي", "40 - خنشلة", "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة", "46 - عين تموشنت", "47 - غرداية", "48 - غليزان"];

// ==========================================
// 5. عناصر DOM
// ==========================================
const loadingScreen = document.getElementById('loadingScreen');
const authScreen = document.getElementById('authScreen');
const forumScreen = document.getElementById('forumScreen');
const submitBtn = document.getElementById('submitBtn');
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');
const registerFields = document.getElementById('registerFields');
const errorMsg = document.getElementById('errorMsg');
const postsContainer = document.getElementById('postsContainer');
const postBtn = document.getElementById('postBtn');
const postText = document.getElementById('postText');

const wilayaSelect = document.getElementById('wilayaInput');
wilayas.forEach(w => { wilayaSelect.innerHTML += `<option value="${w}">${w}</option>`; });

// ==========================================
// 6. Dark Mode
// ==========================================
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

window.toggleSidebar = function() {
  document.getElementById('sidebar').classList.toggle('translate-x-full');
};

// ==========================================
// 7. Auth
// ==========================================
toggleBtn.addEventListener('click', () => {
  isLoginMode = !isLoginMode;
  errorMsg.classList.add('hidden');
  if (isLoginMode) {
    registerFields.classList.add('hidden');
    submitBtn.innerText = 'تسجيل الدخول';
    toggleText.innerText = 'ليس لديك حساب؟';
    toggleBtn.innerText = 'إنشاء حساب جديد';
  } else {
    registerFields.classList.remove('hidden');
    submitBtn.innerText = 'إنشاء حساب';
    toggleText.innerText = 'لديك حساب بالفعل؟';
    toggleBtn.innerText = 'تسجيل الدخول';
  }
});

submitBtn.addEventListener('click', async () => {
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value;
  if (!email.endsWith('@enstp.edu.dz')) return showError('يجب استخدام البريد المهني @enstp.edu.dz');
  if (pass.length < 6) return showError('كلمة السر يجب أن تكون 6 أحرف على الأقل');

  submitBtn.disabled = true;
  submitBtn.innerText = 'جاري المعالجة...';
  errorMsg.classList.add('hidden');

  try {
    if (isLoginMode) {
      await signInWithEmailAndPassword(auth, email, pass);
    } else {
      const name = document.getElementById('nameInput').value.trim();
      const year = document.getElementById('yearInput').value;
      const wilaya = document.getElementById('wilayaInput').value;
      if (!name) throw new Error('يرجى إدخال الاسم');
      const userCred = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(userCred.user, { displayName: name });
      await setDoc(doc(db, "users", userCred.user.uid), { name, email, year, wilaya });
    }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') showError('البريد مستخدم بالفعل');
    else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') showError('البريد أو كلمة السر غير صحيحة');
    else showError(error.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = isLoginMode ? 'تسجيل الدخول' : 'إنشاء حساب';
  }
});

function showError(msg) { errorMsg.innerText = msg; errorMsg.classList.remove('hidden'); }

onAuthStateChanged(auth, async (user) => {
  loadingScreen.classList.add('hidden');
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.exists() ? userDoc.data() : { name: user.displayName, year: 'طالب', wilaya: '16 - الجزائر' };
    currentUserData = { uid: user.uid, name: userData.name, email: user.email, year: userData.year, wilaya: userData.wilaya };
    authScreen.classList.add('hidden');
    forumScreen.classList.remove('hidden');
    document.getElementById('userAvatar').innerText = currentUserData.name.charAt(0);
    document.getElementById('userName').innerText = currentUserData.name;
    document.getElementById('userInfo').innerText = `${currentUserData.year} | ${currentUserData.wilaya}`;
    renderChannels();
    selectChannel('general_posts', 'القاعة العامة', 'شارك أفكارك', 'posts', document.querySelector('.active-room'));
  } else {
    currentUserData = null;
    if (unsubscribeMessages) unsubscribeMessages();
    authScreen.classList.remove('hidden');
    forumScreen.classList.add('hidden');
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => signOut(auth));

// ==========================================
// 8. Channels
// ==========================================
function renderChannels() {
  const customContainer = document.getElementById('customChannels');
  onSnapshot(collection(db, "rooms"), (snapshot) => {
    customContainer.innerHTML = '';
    if (snapshot.empty) customContainer.innerHTML = `<div class="text-xs text-gray-500 px-2">لا توجد غرف بعد</div>`;
    snapshot.forEach((docSnap) => {
      const room = docSnap.data();
      const icon = room.type === 'chat' ? 'fa-comments text-green-400' : 'fa-newspaper text-blue-400';
      customContainer.innerHTML += `
        <button onclick="selectChannel('room_${docSnap.id}', '${room.name}', 'غرفة طلابية', '${room.type}', this)" 
          class="w-full text-right p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
          <div class="w-9 h-9 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center"><i class="fa-solid ${icon}"></i></div>
          ${room.name}
        </button>
      `;
    });
  });
}

window.selectChannel = (id, title, subtitle, type, btnElement) => {
  currentChannelId = id;
  currentChannelType = type;
  document.getElementById('channelTitle').innerHTML = `<i class="fa-solid ${type === 'chat' ? 'fa-comments text-green-500' : 'fa-globe text-blue-500'}"></i> ${title}`;
  document.getElementById('channelSubtitle').innerText = subtitle;
  document.getElementById('mobileTitle').innerText = title;
  const badge = document.getElementById('channelTypeBadge');
  if (type === 'chat') {
    badge.innerText = 'دردشة';
    badge.className = "text-[10px] bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full font-bold";
    postText.placeholder = 'اكتب رسالة...';
  } else {
    badge.innerText = 'منشورات';
    badge.className = "text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full font-bold";
    postText.placeholder = 'اكتب منشوراً...';
  }
  document.querySelectorAll('aside button').forEach(btn => btn.classList.remove('active-room'));
  if(btnElement) btnElement.classList.add('active-room');
  loadMessages(id, type);
  if (window.innerWidth < 768) document.getElementById('sidebar').classList.add('translate-x-full');
};

window.createRoom = async () => {
  const name = document.getElementById('newRoomName').value.trim();
  const type = document.getElementById('newRoomType').value;
  if (!name) return alert('يرجى إدخال اسم الغرفة');
  try {
    await addDoc(collection(db, "rooms"), { name, type, createdBy: currentUserData.name, createdAt: serverTimestamp() });
    document.getElementById('createRoomModal').classList.add('hidden');
    document.getElementById('newRoomName').value = '';
  } catch (e) { alert('حدث خطأ أثناء إنشاء الغرفة'); }
};

// ==========================================
// 9. File Upload (Supabase)
// ==========================================
window.handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 50 * 1024 * 1024) { alert("حجم الملف كبير جداً (الحد الأقصى 50 ميجابايت)"); return; }
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
    previewHtml = `<div class="flex items-center gap-2 bg-gray-200 dark:bg-slate-700 p-2 rounded-lg"><i class="fa-solid fa-file text-gray-600 dark:text-gray-300"></i></div>`;
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

async function uploadFileToSupabase(file) {
  const fileName = `${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage.from('forum-files').upload(fileName, file);
  if (error) throw error;
  const { data: urlData } = supabase.storage.from('forum-files').getPublicUrl(fileName);
  return urlData.publicUrl;
}

// ==========================================
// 10. Send Post
// ==========================================
postBtn.addEventListener('click', async () => {
  const text = postText.value.trim();
  if (!text && !attachedFile) return;
  postBtn.disabled = true;
  postBtn.innerText = '...';
  let fileUrl = null;
  let fileType = null;
  try {
    if (attachedFile) {
      fileUrl = await uploadFileToSupabase(attachedFile);
      fileType = attachedFile.type;
    }
    await addDoc(collection(db, "posts"), {
      channelId: currentChannelId,
      channelType: currentChannelType,
      content: text,
      fileUrl: fileUrl,
      fileType: fileType,
      authorName: currentUserData.name,
      authorYear: currentUserData.year,
      authorEmail: currentUserData.email,
      comments: [],
      reactions: { like: [], love: [], laugh: [] },
      createdAt: serverTimestamp()
    });
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

// ==========================================
// 11. Load Messages
// ==========================================
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
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString(currentLang === 'ar' ? 'ar-DZ' : 'fr-FR', { hour: '2-digit', minute: '2-digit' }) : '...';

      let mediaHtml = '';
      if (post.fileUrl) {
        if (post.fileType && post.fileType.startsWith('image/')) {
          mediaHtml = `<img src="${post.fileUrl}" class="mt-2 rounded-lg max-h-60 w-full object-cover cursor-pointer" onclick="window.open('${post.fileUrl}')">`;
        } else if (post.fileType && post.fileType.startsWith('video/')) {
          mediaHtml = `<video src="${post.fileUrl}" class="mt-2 rounded-lg max-h-60 w-full" controls></video>`;
        } else {
          mediaHtml = `<a href="${post.fileUrl}" target="_blank" class="mt-2 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 p-2 rounded-lg text-blue-600 dark:text-blue-400 hover:underline"><i class="fa-solid fa-file"></i> تحميل الملف</a>`;
        }
      }

      // ========== التفاعلات ==========
      let reactionsHtml = '';
      if (type === 'posts') {
        const reactions = post.reactions || { like: [], love: [], laugh: [] };
        const likeCount = reactions.like ? reactions.like.length : 0;
        const loveCount = reactions.love ? reactions.love.length : 0;
        const laughCount = reactions.laugh ? reactions.laugh.length : 0;
        const myEmail = currentUserData.email;
        const hasLiked = reactions.like && reactions.like.includes(myEmail);
        const hasLoved = reactions.love && reactions.love.includes(myEmail);
        const hasLaughed = reactions.laugh && reactions.laugh.includes(myEmail);

        reactionsHtml = `
          <div class="flex gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-slate-700">
            <button onclick="reactToPost('${postId}', 'like')" class="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold transition ${hasLiked ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-brand-50'}">
              👍 ${likeCount}
            </button>
            <button onclick="reactToPost('${postId}', 'love')" class="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold transition ${hasLoved ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-red-50'}">
              ❤️ ${loveCount}
            </button>
            <button onclick="reactToPost('${postId}', 'laugh')" class="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold transition ${hasLaughed ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-yellow-50'}">
              😂 ${laughCount}
            </button>
            ${isMe ? `<button onclick="deletePost('${postId}')" class="ml-auto text-red-500 hover:text-red-700 text-sm font-bold"><i class="fa-solid fa-trash"></i> حذف</button>` : ''}
          </div>
        `;
      }

      if (type === 'chat') {
        postsContainer.innerHTML += `
          <div class="flex ${isMe ? 'justify-end' : 'justify-start'} mb-3 w-full max-w-3xl mx-auto animate-fade-in group">
            <div class="${isMe ? 'chat-bubble-me' : 'chat-bubble-other'} px-4 py-2 max-w-[80%] relative">
              ${!isMe ? `<p class="text-[10px] font-bold text-brand-500 mb-1">${post.authorName}</p>` : ''}
              <p class="text-sm whitespace-pre-line">${post.content}</p>
              ${mediaHtml}
              <span class="text-[9px] ${isMe ? 'text-white/70' : 'text-gray-400'} block text-left mt-1">${date}</span>
              ${isMe ? `<button onclick="deletePost('${postId}')" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs opacity-0 group-hover:opacity-100 transition"><i class="fa-solid fa-xmark"></i></button>` : ''}
            </div>
          </div>
        `;
      } else {
        let commentsHTML = '';
        if (post.comments && post.comments.length > 0) {
          post.comments.forEach((c, idx) => {
            const isMyComment = c.author === currentUserData.name;
            commentsHTML += `
              <div class="bg-gray-50 dark:bg-slate-700 p-2 rounded-lg mt-2 text-sm flex gap-2 items-start group">
                <div class="w-6 h-6 rounded-full bg-gray-300 dark:bg-slate-600 text-gray-700 dark:text-gray-200 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">${c.author.charAt(0)}</div>
                <div class="flex-1">
                  <p class="font-bold text-gray-800 dark:text-gray-200 text-xs">${c.author}</p>
                  <p class="text-gray-600 dark:text-gray-400 text-xs">${c.text}</p>
                </div>
                ${isMyComment ? `<button onclick="deleteComment('${postId}', ${idx})" class="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition text-xs"><i class="fa-solid fa-trash"></i></button>` : ''}
              </div>
            `;
          });
        }

        postsContainer.innerHTML += `
          <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border ${isMe ? 'border-brand-200 dark:border-brand-700' : 'border-gray-100 dark:border-slate-700'} max-w-3xl mx-auto w-full mb-4 animate-fade-in">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center font-bold text-lg">${post.authorName.charAt(0)}</div>
                <div>
                  <p class="text-sm font-bold text-gray-800 dark:text-gray-200">${post.authorName}</p>
                  <p class="text-[11px] text-gray-500 dark:text-gray-400">${post.authorYear}</p>
                </div>
              </div>
              <span class="text-[11px] text-gray-400 bg-gray-50 dark:bg-slate-700 px-2 py-1 rounded">${date}</span>
            </div>
            <p class="text-gray-800 dark:text-gray-200 text-[15px] mb-3 whitespace-pre-line">${post.content}</p>
            ${mediaHtml}
            <div class="mt-2 mb-3 space-y-1">${commentsHTML}</div>
            ${reactionsHtml}
            <div class="pt-3 border-t border-gray-100 dark:border-slate-700 flex gap-2 mt-3">
              <input type="text" id="comment-input-${postId}" placeholder="أضف تعليقاً..." class="flex-1 bg-gray-100 dark:bg-slate-900 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-brand-400 text-gray-800 dark:text-gray-200">
              <button onclick="addComment('${postId}')" class="bg-gray-200 dark:bg-slate-700 hover:bg-brand-600 hover:text-white px-3 py-1.5 rounded-lg text-sm font-bold transition">إرسال</button>
            </div>
          </div>
        `;
      }
    });
    if (type === 'chat') postsContainer.scrollTop = postsContainer.scrollHeight;
  }, (error) => {
    postsContainer.innerHTML = `<div class="text-red-500 text-center mt-10 font-bold">Error: ${error.message}</div>`;
  });
}

// ==========================================
// 12. Add Comment
// ==========================================
window.addComment = async (postId) => {
  const input = document.getElementById(`comment-input-${postId}`);
  const text = input.value.trim();
  if (!text) return;
  try {
    await updateDoc(doc(db, "posts", postId), {
      comments: arrayUnion({ author: currentUserData.name, text: text, date: new Date().toLocaleString(currentLang === 'ar' ? 'ar-DZ' : 'fr-FR') })
    });
    input.value = '';
  } catch (e) { alert('حدث خطأ أثناء إضافة التعليق'); }
};

// ==========================================
// 13. Delete Comment
// ==========================================
window.deleteComment = async (postId, commentIndex) => {
  if (!confirm('هل تريد حذف هذا التعليق؟')) return;
  try {
    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      const comments = postSnap.data().comments || [];
      const commentToDelete = comments[commentIndex];
      await updateDoc(postRef, {
        comments: arrayRemove(commentToDelete)
      });
    }
  } catch (e) { alert('حدث خطأ أثناء حذف التعليق'); }
};

// ==========================================
// 14. Delete Post
// ==========================================
window.deletePost = async (postId) => {
  if (!confirm('هل تريد حذف هذا المنشور نهائياً؟')) return;
  try {
    await deleteDoc(doc(db, "posts", postId));
  } catch (e) { alert('حدث خطأ أثناء حذف المنشور'); }
};

// ==========================================
// 15. React to Post
// ==========================================
window.reactToPost = async (postId, reactionType) => {
  try {
    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);
    if (!postSnap.exists()) return;

    const reactions = postSnap.data().reactions || { like: [], love: [], laugh: [] };
    if (!reactions.like) reactions.like = [];
    if (!reactions.love) reactions.love = [];
    if (!reactions.laugh) reactions.laugh = [];

    const myEmail = currentUserData.email;
    const list = reactions[reactionType] || [];
    const hasReacted = list.includes(myEmail);

    if (hasReacted) {
      await updateDoc(postRef, {
        [`reactions.${reactionType}`]: arrayRemove(myEmail)
      });
    } else {
      await updateDoc(postRef, {
        [`reactions.${reactionType}`]: arrayUnion(myEmail)
      });
    }
  } catch (e) { 
    console.error(e);
    alert('حدث خطأ أثناء التفاعل'); 
  }
};

// ==========================================
// 16. Auto-resize Textarea
// ==========================================
postText.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
