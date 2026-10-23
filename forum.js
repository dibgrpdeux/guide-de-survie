import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, doc, setDoc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

let isLoginMode = true;
let currentUserData = null;
let currentChannelId = 'general';
let unsubscribePosts = null;

// قائمة الولايات الـ 58 (الرسمية)
const wilayas = [
  "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة", "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة",
  "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو", "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة",
  "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة", "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة",
  "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس", "36 - الطارف", "37 - تندوف", "38 - تيسمسيلت", "39 - الوادي", "40 - خنشلة",
  "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة", "46 - عين تموشنت", "47 - غرداية", "48 - غليزان",
  "49 - تيميمون", "50 - برج باجي مختار", "51 - أولاد جلال", "52 - بني عباس", "53 - عين صالح", "54 - عين قزام", "55 - تقرت", "56 - جانت", "57 - المغير", "58 - المنيعة"
];

// DOM Elements
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

// تعبئة الولايات
const wilayaSelect = document.getElementById('wilayaInput');
wilayaSelect.innerHTML = ''; // تفريغ القائمة أولاً
wilayas.forEach(w => { wilayaSelect.innerHTML += `<option value="${w}">${w}</option>`; });

// --- الدخول والتسجيل ---
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
      await updateProfile(userCred.user, { displayName: name });
      await setDoc(doc(db, "users", userCred.user.uid), { name, email, year, wilaya });
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

// --- حالة المستخدم ---
onAuthStateChanged(auth, async (user) => {
  loadingScreen.classList.add('hidden');
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.exists() ? userDoc.data() : { name: user.displayName, year: 'طالب', wilaya: '16 - الجزائر' };

    currentUserData = { uid: user.uid, name: userData.name, email: user.email, year: userData.year, wilaya: userData.wilaya };

    authScreen.classList.add('hidden');
    forumScreen.classList.remove('hidden');
    
    document.getElementById('userAvatar').innerText = currentUserData.name.charAt(0);
    document.getElementById('postAvatar').innerText = currentUserData.name.charAt(0);
    document.getElementById('userName').innerText = currentUserData.name;
    document.getElementById('userInfo').innerText = `${currentUserData.year} | ${currentUserData.wilaya}`;

    renderChannels();
    selectChannel('general', 'Salle Général', 'النقاشات العامة');
  } else {
    currentUserData = null;
    if (unsubscribePosts) unsubscribePosts();
    authScreen.classList.remove('hidden');
    forumScreen.classList.add('hidden');
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => signOut(auth));

// --- الغرف ---
function renderChannels() {
  const wilayaContainer = document.getElementById('wilayaChannels');
  wilayaContainer.innerHTML = '';
  wilayas.forEach(w => {
    const isCurrent = w === currentUserData.wilaya;
    wilayaContainer.innerHTML += `
      <button onclick="selectChannel('wilaya_${w}', '${w}', 'غرفة أبناء ولاية ${w}')" 
        class="w-full text-right p-2.5 rounded-lg hover:bg-gray-800 flex items-center gap-3 text-xs text-gray-300 ${isCurrent ? 'border border-gray-700 bg-gray-800/30' : ''}">
        <i class="fa-solid fa-location-dot text-emerald-500"></i> ${w}
        ${isCurrent ? '<span class="text-[9px] bg-emerald-900 text-emerald-300 px-1.5 rounded ml-auto">ولايتك</span>' : ''}
      </button>
    `;
  });

  const customContainer = document.getElementById('customChannels');
  onSnapshot(collection(db, "rooms"), (snapshot) => {
    customContainer.innerHTML = '';
    if (snapshot.empty) customContainer.innerHTML = '<div class="text-xs text-gray-500 px-2">لا توجد غرف.</div>';
    snapshot.forEach((doc) => {
      const room = doc.data();
      customContainer.innerHTML += `
        <button onclick="selectChannel('room_${doc.id}', '${room.name}', 'غرفة طلابية')" 
          class="w-full text-right p-2.5 rounded-lg hover:bg-gray-800 flex items-center gap-3 text-xs text-gray-300">
          <i class="fa-solid fa-comments text-purple-400"></i> ${room.name}
        </button>
      `;
    });
  });
}

window.selectChannel = (id, title, subtitle) => {
  currentChannelId = id;
  document.getElementById('channelTitle').innerHTML = `<i class="fa-solid fa-hashtag text-blue-500"></i> ${title}`;
  document.getElementById('channelSubtitle').innerText = subtitle;
  
  // تحديث تصميم الأزرار
  document.querySelectorAll('aside button').forEach(btn => btn.classList.remove('bg-gray-800', 'text-blue-400'));
  if(event && event.currentTarget) {
    event.currentTarget.classList.add('bg-gray-800', 'text-blue-400');
  }

  loadPosts(id);
};

window.createRoom = async () => {
  const name = document.getElementById('newRoomName').value.trim();
  if (!name) return alert("أدخل اسم الغرفة");
  try {
    await addDoc(collection(db, "rooms"), { name, createdBy: currentUserData.name, createdAt: serverTimestamp() });
    document.getElementById('createRoomModal').classList.add('hidden');
    document.getElementById('newRoomName').value = '';
  } catch (e) { alert("خطأ في الإنشاء"); }
};

// --- المنشورات والتعليقات ---
postBtn.addEventListener('click', async () => {
  const text = postText.value.trim();
  if (!text) return;
  postBtn.disabled = true;
  postBtn.innerText = '...';
  try {
    await addDoc(collection(db, "posts"), {
      channelId: currentChannelId,
      content: text,
      authorName: currentUserData.name,
      authorYear: currentUserData.year,
      authorEmail: currentUserData.email,
      comments: [],
      createdAt: serverTimestamp()
    });
    postText.value = '';
    postText.style.height = 'auto';
  } catch (e) { alert("تعذر النشر"); } 
  finally { postBtn.disabled = false; postBtn.innerText = 'نشر'; }
});

function loadPosts(channelId) {
  if (unsubscribePosts) unsubscribePosts();
  postsContainer.innerHTML = '<div class="text-center mt-10 text-gray-400"><i class="fa-solid fa-spinner fa-spin text-2xl"></i></div>';

  const q = query(collection(db, "posts"), where("channelId", "==", channelId), orderBy("createdAt", "desc"));

  unsubscribePosts = onSnapshot(q, (snapshot) => {
    postsContainer.innerHTML = '';
    if (snapshot.empty) {
      postsContainer.innerHTML = '<div class="text-center text-gray-400 mt-10">لا توجد منشورات. كن الأول!</div>';
      return;
    }

    snapshot.forEach((docSnap) => {
      const post = docSnap.data();
      const postId = docSnap.id;
      const isMe = post.authorEmail === currentUserData.email;
      const date = post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString('ar-DZ') : 'الآن';
      
      let commentsHTML = '';
      if (post.comments && post.comments.length > 0) {
        post.comments.forEach(c => {
          commentsHTML += `
            <div class="bg-gray-50 p-2 rounded-lg mt-2 text-sm flex gap-2 items-start">
              <div class="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">${c.author.charAt(0)}</div>
              <div>
                <p class="font-bold text-gray-800 text-xs">${c.author}</p>
                <p class="text-gray-600 text-xs">${c.text}</p>
              </div>
            </div>
          `;
        });
      }

      postsContainer.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow-sm border ${isMe ? 'border-blue-200' : 'border-gray-100'} max-w-3xl mx-auto w-full mb-4">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full ${isMe ? 'bg-blue-600' : 'bg-indigo-600'} text-white flex items-center justify-center font-bold text-lg">${post.authorName.charAt(0)}</div>
              <div>
                <p class="text-sm font-bold text-gray-800">${post.authorName}</p>
                <p class="text-[11px] text-gray-500">${post.authorYear}</p>
              </div>
            </div>
            <span class="text-[11px] text-gray-400 bg-gray-50 px-2 py-1 rounded">${date}</span>
          </div>
          <p class="text-gray-800 text-[15px] mb-3 whitespace-pre-line">${post.content}</p>
          <div class="mt-2 mb-3 space-y-1">${commentsHTML}</div>
          <div class="pt-3 border-t border-gray-100 flex gap-2">
            <input type="text" id="comment-input-${postId}" placeholder="اكتب تعليقاً..." class="flex-1 bg-gray-100 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-blue-400">
            <button onclick="addComment('${postId}')" class="bg-gray-200 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-lg text-sm font-bold transition">إرسال</button>
          </div>
        </div>
      `;
    });
  }, (error) => {
    postsContainer.innerHTML = `<div class="text-red-500 text-center mt-10 font-bold">خطأ: ${error.message}</div>`;
  });
}

window.addComment = async (postId) => {
  const input = document.getElementById(`comment-input-${postId}`);
  const text = input.value.trim();
  if (!text) return;
  try {
    await updateDoc(doc(db, "posts", postId), {
      comments: arrayUnion({ author: currentUserData.name, text: text, date: new Date().toLocaleString('ar-DZ') })
    });
    input.value = '';
  } catch (e) { alert("تعذر إضافة التعليق"); }
};

postText.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
