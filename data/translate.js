// 1. قاموس الترجمات
const translations = {
  ar: {
    // --- الصفحة الرئيسية ---
    home_welcome: "مرحباً بك في فضائك الجامعي",
    home_desc: "اكتشف كل ما تحتاجه لتسهيل مسارك الدراسي وحياتك اليومية في المدرسة الوطنية العليا للأشغال العمومية (ENSTP). اختر القسم المناسب أدناه للبدء.",
    nav_school: "مدرستي",
    nav_school_desc: "تعرف على المدرسة، المرافق، والمكتبة",
    nav_admin: "إدارتي",
    nav_admin_desc: "الوثائق، الشهادات، والإجراءات الإدارية",
    nav_success: "نجاحي",
    nav_success_desc: "الدروس، الامتحانات، وجداول التوقيت",
    nav_residence: "إقامتي الجامعية",
    nav_residence_desc: "معلومات الإيواء والخدمات الجامعية",
    nav_sport: "الرياضة",
    nav_sport_desc: "الأنشطة الرياضية، الملاعب، والنوادي",
    nav_forum: "ملتقى الطلبة",
    nav_forum_desc: "النوادي العلمية، الفعاليات، والنقاشات",
    nav_transport: "النقل",
    nav_transport_desc: "خطوط الحافلات، المحطات، والتوقيت",
    nav_food: "المطاعم والتسوق",
    nav_food_desc: "مطاعم الجامعة، المقاهي، وقوائم الطعام",
    nav_leisure: "السياحة في العاصمة",
    nav_leisure_desc: "أماكن الترفيه والسياحة في العاصمة",
    // يمكنك إضافة المزيد من الكلمات هنا تدريجياً...
  },
  fr: {
    // --- Page d'accueil ---
    home_welcome: "Bienvenue dans votre espace universitaire",
    home_desc: "Découvrez tout ce dont vous avez besoin pour faciliter votre parcours académique et votre vie quotidienne à l'École Nationale Supérieure des Travaux Publics (ENSTP). Choisissez une section ci-dessous pour commencer.",
    nav_school: "Mon École",
    nav_school_desc: "Découvrez l'école, les installations et la bibliothèque",
    nav_admin: "Mon Administration",
    nav_admin_desc: "Documents, certificats et procédures administratives",
    nav_success: "Ma Réussite",
    nav_success_desc: "Cours, examens et emplois du temps",
    nav_residence: "Ma Résidence",
    nav_residence_desc: "Informations sur le logement et les services universitaires",
    nav_sport: "Sports",
    nav_sport_desc: "Activités sportives, terrains et clubs",
    nav_forum: "Forum Étudiant",
    nav_forum_desc: "Clubs scientifiques, événements et discussions",
    nav_transport: "Transport",
    nav_transport_desc: "Lignes de bus, stations et horaires",
    nav_food: "Restauration & Shopping",
    nav_food_desc: "Restaurants universitaires, cafés et menus",
    nav_leisure: "Loisirs à Alger",
    nav_leisure_desc: "Lieux de divertissement et tourisme dans la capitale",
  },
  en: {
    // --- Home Page ---
    home_welcome: "Welcome to your university space",
    home_desc: "Discover everything you need to facilitate your academic journey and daily life at the National Higher School of Public Works (ENSTP). Choose a section below to get started.",
    nav_school: "My School",
    nav_school_desc: "Discover the school, facilities, and library",
    nav_admin: "My Administration",
    nav_admin_desc: "Documents, certificates, and administrative procedures",
    nav_success: "My Success",
    nav_success_desc: "Courses, exams, and schedules",
    nav_residence: "My Residence",
    nav_residence_desc: "Accommodation and university services information",
    nav_sport: "Sports",
    nav_sport_desc: "Sports activities, fields, and clubs",
    nav_forum: "Student Forum",
    nav_forum_desc: "Scientific clubs, events, and discussions",
    nav_transport: "Transport",
    nav_transport_desc: "Bus lines, stations, and schedules",
    nav_food: "Food & Shopping",
    nav_food_desc: "University restaurants, cafes, and menus",
    nav_leisure: "Leisure in Algiers",
    nav_leisure_desc: "Entertainment and tourism places in the capital",
  }
};

// 2. دالة تغيير اللغة
function setLanguage(lang) {
  // حفظ اللغة في المتصفح
  localStorage.setItem('enstp_lang', lang);
  
  // تحديث اتجاه الصفحة (RTL للعربية، LTR للفرنسية والإنجليزية)
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // تغيير جميع العناصر التي تحتوي على data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  
  // تحديث تصميم الأزرار (تلوين الزر النشط)
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-' + lang);
  if(activeBtn) activeBtn.classList.add('active');
}

// 3. تشغيل اللغة المحفوظة عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('enstp_lang') || 'ar';
  // تأخير بسيط لضمان تحميل الصفحة
  setTimeout(() => setLanguage(savedLang), 100);
});
