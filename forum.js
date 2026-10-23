import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات Firebase الخاصة بك
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

// متغيرات عامة
let isLoginMode = true;
let currentUserData = null;
let currentChannelId = 'general';
let unsubscribePosts = null;

// قائمة الولايات الأساسية (يمكنك إضافة الـ 58 ولاية)
const wilayas = ['16 - الجزائر', '09 - البليدة', '31 - وهران', '25 - قسنطينة', '19 - سطيف', '06 - بجاية', '15 - تيزي وزو'];

// عناصر DOM
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

// --- 1. نظام الدخول والتسجيل ---
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
    submitBtn.innerText = 'إنشاء حساب';
    toggleText.innerText = 'لديك حساب بالفعل؟';
    toggleBtn.innerText = 'تسجيل الدخول';
  }
});

submitBtn.addEventListener('click', async () => {
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value;
  
  if (!email.endsWith('@enstp.edu.dz')) return showError('يجب استخدام بريد @enstp.edu.dz');
  if (pass.length < 6) return showError('كلمة السر 6 أحرف على الأقل');

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
      if (!name) throw new Error("يرجى إدخال الاسم");

      const userCred = await createUserWithEmailAndPassword(auth, email, pass);
      
      // حفظ بيانات إضافية في حساب المستخدم
      await updateProfile(userCred.user, {
        displayName: name
      });
      
      // حفظ بيانات الطالب في Firestore (الولاية والسنة) لاستخدامها في الغرف
      await setDoc(doc(db, "users", userCred.user.uid), {
        name: name,
        email: email,
        year: year,
        wilaya: wilaya
      });
    }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') showError('البريد مسجل مسبقاً');
    else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') showError('البريد أو كلمة السر خاطئة');
    else showError(error.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = isLoginMode ? 'تسجيل الدخول' : 'إنشاء حساب';
  }
});

function showError(msg) { errorMsg.innerText = msg; errorMsg.classList.remove('hidden'); }

// --- 2. إدارة الجلسة والواجهة ---
onAuthStateChanged(auth, async (user) => {
  loadingScreen.classList.add('hidden');
  
  if (user) {
    // جلب بيانات الطالب الإضافية من قاعدة البيانات
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.exists() ? userDoc.data() : { name: user.email.split('@')[0], year: 'طالب', wilaya: '16 - الجزائر' };

    currentUserData = {
      uid: user.uid,
      name: userData.name || user.displayName,
      email: user.email,
      year: userData.year,
      wilaya: userData.wilaya
    };

    authScreen.classList.add('hidden');
    forumScreen.classList.remove('hidden');

    // تحديث الواجهة الجانبية
    document.getElementById('userAvatar').innerText = currentUserData.name.charAt(0);
    document.getElementById('postAvatar').innerText = currentUserData.name.charAt(0);
    document.getElementById('userName').innerText = currentUserData.name;
    document.getElementById('userInfo').innerText = `${currentUserData.year} | ${currentUserData.wilaya}`;

    // بناء الغرف
    renderChannels();
    
    // تحميل الغرفة العامة افتراضياً
    selectChannel('general', 'Salle Général', 'النقاشات العامة لجميع الطلبة');
    
  } else {
    currentUserData = null;
    if (unsubscribePosts) unsubscribePosts();
    authScreen.classList.remove('hidden');
    forumScreen.classList.add('hidden');
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => signOut(auth));

// --- 3. إدارة القنوات (الغرف) ---
function renderChannels() {
  // 1. غرف الولايات
  const wilayaContainer = document.getElementById('wilayaChannels');
  wilayaContainer.innerHTML = '';
  wilayas.forEach(w => {
    const isCurrent = w === currentUserData.wilaya;
    wilayaContainer.innerHTML += `
      <button onclick="selectChannel('wilaya_${w}', '${w}', 'غرفة أبناء ولاية ${w}')" 
        class="w-full text-right p-2.5 rounded-lg hover:bg-gray-800 flex items-center gap-3 text-sm transition-colors text-gray-300 ${isCurrent ? 'border border-gray-700' : ''}">
        <i class="fa-solid fa-location-dot text-emerald-500"></i> ${w}
        ${isCurrent ? '<span class="text-[9px] bg-emerald-900 text-emerald-300 px-1.5 py-0.5 rounded ml-auto">ولايتك</span>' : ''}
      </button>
    `;
  });

  // 2. الغرف التي أنشأها الطلبة
  const customContainer = document.getElementById('customChannels');
  customContainer.innerHTML = '<div class="text-xs text-gray-500 px-2 py-1"><i class="fa-solid fa-circle-notch fa-spin"></i> تحميل...</div>';
  
  onSnapshot(collection(db, "rooms"), (snapshot) => {
    customContainer.innerHTML = '';
    if (snapshot.empty) {
      customContainer.innerHTML = '<div class="text-xs text-gray-500 px-2 py-1">لا توجد غرف. كن أول من ينشئ واحدة!</div>';
    }
    snapshot.forEach((doc) => {
      const room = doc.data();
      customContainer.innerHTML += `
        <button onclick="selectChannel('room_${doc.id}', '${room.name}', 'غرفة طلابية')" 
          class="w-full text-right p-2.5 rounded-lg hover:bg-gray-800 flex items-center gap-3 text-sm transition-colors text-gray-300">
          <i class="fa-solid fa-comments text-purple-400"></i> ${room.name}
        </button>
      `;
    });
  });
}

// تغيير الغرفة
window.selectChannel = (id, title, subtitle) => {
  currentChannelId = id;
  document.getElementById('channelTitle').innerHTML = `<i class="fa-solid fa-hashtag text-blue-500"></i> ${title}`;
  document.getElementById('channelSubtitle').innerText = subtitle;
  
  // تحديث تصميم الأزرار (إزالة التحديد عن الكل وتحديد الحالي)
  document.querySelectorAll('aside button').forEach(btn => btn.classList.remove('bg-gray-800', 'text-blue-400'));
  event.currentTarget.classList.add('bg-gray-800', 'text-blue-400');

  loadPosts(id);
};

// --- 4. إنشاء غرفة جديدة ---
window.openCreateRoomModal = () => {
  document.getElementById('createRoomModal').classList.remove('hidden');
  document.getElementById('newRoomName').focus();
};

window.closeCreateRoomModal = () => {
  document.getElementById('createRoomModal').classList.add('hidden');
  document.getElementById('newRoomName').value = '';
};

window.createRoom = async () => {
  const name = document.getElementById('newRoomName').value.trim();
  if (!name) return alert("يرجى إدخال اسم الغرفة");

  try {
    await addDoc(collection(db, "rooms"), {
      name: name,
      createdBy: currentUserData.name,
      createdAt: serverTimestamp()
    });
    closeCreateRoomModal();
  } catch (error) {
    alert("حدث خطأ أثناء إنشاء الغرفة");
  }
};

// --- 5. المنشورات (النشر والقراءة) ---
postBtn.addEventListener('click', async () => {
  const text = postText.value.trim();
  if (!text) return;

  postBtn.disabled = true;
  postBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

  try {
    await addDoc(collection(db, "posts"), {
      channelId: currentChannelId,
      content: text,
      authorName: currentUserData.name,
      authorYear: currentUserData.year,
      authorEmail: currentUserData.email,
      createdAt: serverTimestamp()
    });
    postText.value = '';
    postText.style.height = 'auto';
  } catch (error) {
    alert("تعذر النشر: " + error.message);
  } finally {
    postBtn.disabled = false;
    postBtn.innerHTML = 'نشر <i class="fa-solid fa-paper-plane text-xs"></i>';
  }
});

function loadPosts(channelId) {
  if (unsubscribePosts) unsubscribePosts();
  
  postsContainer.innerHTML = '<div class="text-center mt-10 text-gray-400"><i class="fa-solid fa-circle-notch fa-spin text-3xl"></i><p class="mt-2">جاري التحميل...</p></div>';

  // جلب المنشورات الخاصة بهذه الغرفة فقط
  const q = query(
    collection(db, "posts"),
    where("channelId", "==", channelId),
    orderBy("createdAt", "desc")
  );

  unsubscribePosts = onSnapshot(q, (snapshot) => {
    postsContainer.innerHTML = '';
    
    if (snapshot.empty) {
      postsContainer.innerHTML = '<div class="text-center text-gray-400 mt-10"><i class="fa-regular fa-comment-dots text-5xl mb-3 opacity-50"></i><p class="font-bold">لا توجد منشورات هنا.</p><p class="text-xs mt-1">كن أول من يبدأ النقاش!</p></div>';
      return;
    }

    snapshot.forEach((doc) => {
      const post = doc.data();
      const isMe = post.authorEmail === currentUserData.email;
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString('ar-DZ', { hour: '2-digit', minute:'2-digit' }) : 'الآن';

      // تصميم المنشور (شبيه بفيسبوك)
      postsContainer.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow-sm border ${isMe ? 'border-blue-200' : 'border-gray-100'} max-w-3xl mx-auto w-full">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full ${isMe ? 'bg-blue-600' : 'bg-indigo-600'} text-white flex items-center justify-center font-bold text-lg shadow-sm">
                ${post.authorName.charAt(0)}
              </div>
              <div>
                <p class="text-sm font-bold text-gray-800">
                  ${post.authorName} 
                  ${isMe ? '<span class="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full mr-1">أنت</span>' : ''}
                </p>
                <p class="text-[11px] text-gray-500 font-semibold">${post.authorYear}</p>
              </div>
            </div>
            <span class="text-[11px] text-gray-400 bg-gray-50 px-2 py-1 rounded-md border"><i class="fa-regular fa-clock ml-1"></i>${date}</span>
          </div>
          
          <p class="text-gray-800 text-[15px] whitespace-pre-line leading-relaxed">${post.content}</p>
          
          <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between text-gray-500 text-sm font-semibold">
             <button class="hover:text-blue-600 transition flex items-center gap-1"><i class="fa-regular fa-thumbs-up"></i> إعجاب</button>
             <button class="hover:text-blue-600 transition flex items-center gap-1"><i class="fa-regular fa-comment"></i> تعليق</button>
          </div>
        </div>
      `;
    });
  });
}

// تمدد مربع النص
postText.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
