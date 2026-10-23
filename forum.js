// --- إعدادات أولية ---
const authScreen = document.getElementById('authScreen');
const forumScreen = document.getElementById('forumScreen');
const loginBtn = document.getElementById('loginBtn');
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');
const registerFields = document.getElementById('registerFields');
const errorMsg = document.getElementById('errorMsg');
const logoutBtn = document.getElementById('logoutBtn');

let isLoginMode = true; // الوضع الافتراضي: تسجيل دخول

// --- التبديل بين تسجيل الدخول وإنشاء حساب ---
toggleBtn.addEventListener('click', () => {
  isLoginMode = !isLoginMode;
  if (isLoginMode) {
    registerFields.classList.add('hidden');
    loginBtn.innerText = 'تسجيل الدخول';
    toggleText.innerText = 'ليس لديك حساب؟';
    toggleBtn.innerText = 'إنشاء حساب جديد';
  } else {
    registerFields.classList.remove('hidden');
    loginBtn.innerText = 'إنشاء الحساب والدخول';
    toggleText.innerText = 'لديك حساب بالفعل؟';
    toggleBtn.innerText = 'تسجيل الدخول';
  }
  errorMsg.classList.add('hidden');
});

// --- وظيفة إنشاء الحساب أو تسجيل الدخول ---
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value;
  
  // التحقق من الإيميل
  if (!email.endsWith('@enstp.edu.dz')) {
    showError('يجب استخدام بريد ينتهي بـ @enstp.edu.dz');
    return;
  }
  if (pass.length < 4) {
    showError('كلمة السر يجب أن تكون 4 أحرف على الأقل');
    return;
  }

  // جلب الحسابات المحفوظة في المتصفح
  let users = JSON.parse(localStorage.getItem('enstp_users')) || {};

  if (isLoginMode) {
    // --- تسجيل الدخول ---
    if (users[email] && users[email].password === pass) {
      // نجاح
      loginUser(users[email]);
    } else {
      showError('البريد الإلكتروني أو كلمة السر غير صحيحة');
    }
  } else {
    // --- إنشاء حساب جديد ---
    const firstName = document.getElementById('firstNameInput').value.trim();
    const lastName = document.getElementById('lastNameInput').value.trim();
    const year = document.getElementById('yearInput').value;

    if (!firstName || !lastName) {
      showError('يرجى إدخال الاسم واللقب');
      return;
    }
    if (users[email]) {
      showError('هذا البريد مسجل مسبقاً، يرجى تسجيل الدخول');
      return;
    }

    // حفظ المستخدم الجديد
    const newUser = {
      email: email,
      password: pass,
      firstName: firstName,
      lastName: lastName,
      year: year,
      fullName: `${firstName} ${lastName}`
    };
    
    users[email] = newUser;
    localStorage.setItem('enstp_users', JSON.stringify(users));
    loginUser(newUser);
  }
});

function showError(msg) {
  errorMsg.innerText = msg;
  errorMsg.classList.remove('hidden');
}

// --- دالة تسجيل الدخول بنجاح ---
function loginUser(user) {
  // حفظ الجلسة الحالية
  localStorage.setItem('enstp_currentUser', JSON.stringify(user));
  
  // إخفاء شاشة الدخول وإظهار المنتدى
  authScreen.classList.add('hidden');
  forumScreen.classList.remove('hidden');
  forumScreen.classList.add('flex');

  // تحديث بيانات الترويسة
  document.getElementById('userAvatar').innerText = user.firstName.charAt(0);
  document.getElementById('userInfo').innerText = `${user.fullName} | ${user.year}`;

  // تحميل المنشورات
  loadPosts();
}

// --- تسجيل الخروج ---
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('enstp_currentUser');
  location.reload(); // إعادة تحميل الصفحة
});

// --- نظام المنشورات (يُحفظ في المتصفح) ---
const postBtn = document.getElementById('postBtn');
const postText = document.getElementById('postText');
const postsContainer = document.getElementById('postsContainer');

postBtn.addEventListener('click', () => {
  const text = postText.value.trim();
  if (!text) return;

  const currentUser = JSON.parse(localStorage.getItem('enstp_currentUser'));
  
  const newPost = {
    id: Date.now(),
    author: currentUser.fullName,
    email: currentUser.email,
    year: currentUser.year,
    content: text,
    date: new Date().toLocaleString('ar-DZ', { hour: '2-digit', minute:'2-digit' })
  };

  // جلب المنشورات القديمة وإضافة الجديد
  let posts = JSON.parse(localStorage.getItem('enstp_posts')) || [];
  posts.unshift(newPost); // إضافة في الأعلى
  localStorage.setItem('enstp_posts', JSON.stringify(posts));

  postText.value = ''; // مسح الحقل
  loadPosts(); // إعادة رسم المنشورات
});

function loadPosts() {
  postsContainer.innerHTML = '';
  let posts = JSON.parse(localStorage.getItem('enstp_posts')) || [];
  const currentUser = JSON.parse(localStorage.getItem('enstp_currentUser'));

  if (posts.length === 0) {
    postsContainer.innerHTML = '<div class="text-center text-gray-400 mt-10"><i class="fa-regular fa-comment-dots text-4xl mb-2"></i><p>لا توجد منشورات بعد. كن أول من يكتب!</p></div>';
    return;
  }

  posts.forEach(post => {
    const isMe = post.email === currentUser.email;
    const postHTML = `
      <div class="bg-white p-4 rounded-xl shadow-sm border ${isMe ? 'border-blue-200' : 'border-gray-100'}">
        <div class="flex justify-between items-start mb-2">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full ${isMe ? 'bg-blue-600' : 'bg-gray-700'} text-white flex items-center justify-center font-bold text-sm">
              ${post.author.charAt(0)}
            </div>
            <div>
              <p class="text-sm font-bold">${post.author} ${isMe ? '<span class="text-[10px] bg-blue-100 text-blue-600 px-2 rounded-full mr-1">أنت</span>' : ''}</p>
              <p class="text-[10px] text-gray-500">${post.year}</p>
            </div>
          </div>
          <span class="text-xs text-gray-400">${post.date}</span>
        </div>
        <p class="text-gray-700 text-sm whitespace-pre-line">${post.content}</p>
      </div>
    `;
    postsContainer.innerHTML += postHTML;
  });
}

// --- التحقق عند فتح الصفحة (هل المستخدم مسجل مسبقاً؟) ---
window.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('enstp_currentUser');
  if (currentUser) {
    loginUser(JSON.parse(currentUser));
  }
});
