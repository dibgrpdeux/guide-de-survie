// ==========================================
// قاموس الترجمات الأساسي (آمن ومحمي)
// ==========================================
const translations = {
  ar: {
    nav_app_name: "دليل ENSTP",
    nav_app_sub: "المدرسة الوطنية العليا",
    nav_home: "الرئيسية",
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
    nav_leisure: "Loisirs à Alger",
    nav_leisure_desc: "أماكن الترفيه والسياحة في العاصمة",
    nav_schedule_badge: "استعمال الزمن",
    nav_qr: "QR Code",
    nav_qr_desc: "مسح الرموز للوصول السريع للخدمات",
    home_welcome: "مرحباً بك في فضائك الجامعي",
    home_desc: "اكتشف كل ما تحتاجه لتسهيل مسارك الدراسي وحياتك اليومية في المدرسة الوطنية العليا للأشغال العمومية (ENSTP). اختر القسم المناسب أدناه للبدء.",
    
    // مدرستي
    ecole_title: "مدرستي",
    ecole_desc: "المدرسة الوطنية العليا للأشغال العمومية بالقبة هي صرح أثري وعلمي عريق لتكوين المهندسين.",
    ecole_teachers: "هيئة التدريس",
    ecole_teachers_desc: "استعراض أساتذة المواد للسنة الأولى والثانية تحضيري مع التفاصيل.",
    ecole_teachers_btn: "عرض القائمة",
    ecole_buildings: "المباني والمدرجات",
    ecole_buildings_desc: "مواقع المدرجات الرئيسية (A, B)، القاعات والمخابر العلمية.",
    ecole_buildings_btn: "استكشف",
    ecole_history: "التاريخ والنبذة",
    ecole_history_desc: "نبذة تاريخية عن تأسيس المدرسة ودورها في تكوين مهندسي الأشغال العمومية.",
    ecole_history_btn: "اقرأ التاريخ",
    ecole_map3d: "الخريطة ثلاثية الأبعاد",
    ecole_map3d_desc: "خريطة تفاعلية ثلاثية الأبعاد للتنقل داخل الحرم الجامعي.",
    ecole_map3d_btn: "فتح الخريطة",
    
    // المباني
    modal_buildings_title: "المباني والمدرجات",
    modal_buildings_map: "خريطة الحرم الجامعي",
    modal_buildings_map_desc: "استكشف المدرسة بشكل ثلاثي الأبعاد.",
    modal_buildings_map_btn: "فتح الخريطة ثلاثية الأبعاد",
    modal_buildings_videos: "فيديوهات تعريفية للمدرسة",
    modal_video_tour: "جولة في المدرسة",
    modal_video_prepa: "الأقسام التحضيرية",
    modal_video_amphi: "المدرجات",
    modal_video_infra: "المنشآت القاعدية",
    modal_video_entree: "مدخل المدرسة",
    modal_video_info: "قسم الإعلام الآلي",
    
    // التاريخ
    modal_history_title: "نبذة تاريخية عن المدرسة"
  },
  fr: {
    nav_app_name: "Guide ENSTP",
    nav_app_sub: "École Nationale Supérieure",
    nav_home: "Accueil",
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
    nav_schedule_badge: "Emploi du temps",
    nav_qr: "QR Code",
    nav_qr_desc: "Scanner pour un accès rapide",
    home_welcome: "Bienvenue dans votre espace universitaire",
    home_desc: "Découvrez tout ce dont vous avez besoin pour faciliter votre parcours académique et votre vie quotidienne à l'École Nationale Supérieure des Travaux Publics (ENSTP).",
    
    ecole_title: "Mon École",
    ecole_desc: "L'École Nationale Supérieure des Travaux Publics de Kouba est une institution historique et scientifique pour la formation des ingénieurs.",
    ecole_teachers: "Corps Enseignant",
    ecole_teachers_desc: "Découvrez les enseignants des matières pour les 1ère et 2ème années préparatoires.",
    ecole_teachers_btn: "Ouvrir la liste",
    ecole_buildings: "Bâtiments & Amphis",
    ecole_buildings_desc: "Emplacements des amphis principaux (A, B), salles et laboratoires.",
    ecole_buildings_btn: "Explorer",
    ecole_history: "Histoire & À propos",
    ecole_history_desc: "Aperçu historique de la fondation de l'école et de son rôle.",
    ecole_history_btn: "Lire l'histoire",
    ecole_map3d: "Carte 3D",
    ecole_map3d_desc: "Carte interactive en 3D pour naviguer sur le campus.",
    ecole_map3d_btn: "Ouvrir la carte",
    
    modal_buildings_title: "Bâtiments & Amphis",
    modal_buildings_map: "Carte du Campus",
    modal_buildings_map_desc: "Explorez l'école en 3D pour trouver les amphis et les salles.",
    modal_buildings_map_btn: "Ouvrir la carte 3D",
    modal_buildings_videos: "Vidéos de présentation",
    modal_video_tour: "Visite de l'école",
    modal_video_prepa: "Classes Préparatoires",
    modal_video_amphi: "Amphithéâtres",
    modal_video_infra: "Infrastructures",
    modal_video_entree: "Entrée de l'école",
    modal_video_info: "Département Informatique",
    modal_history_title: "Histoire de l'ENSTP"
  },
  en: {
    nav_app_name: "ENSTP Guide",
    nav_app_sub: "National Higher School",
    nav_home: "Home",
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
    nav_schedule_badge: "Schedule",
    nav_qr: "QR Code",
    nav_qr_desc: "Scan for quick access",
    home_welcome: "Welcome to your university space",
    home_desc: "Discover everything you need to facilitate your academic journey and daily life at the National Higher School of Public Works (ENSTP).",
    
    ecole_title: "My School",
    ecole_desc: "The National Higher School of Public Works in Kouba is a historic and scientific institution for engineering training.",
    ecole_teachers: "Faculty Members",
    ecole_teachers_desc: "Explore subject teachers for 1st and 2nd preparatory years.",
    ecole_teachers_btn: "Open List",
    ecole_buildings: "Buildings & Amphis",
    ecole_buildings_desc: "Locations of main amphitheaters (A, B), classrooms, and labs.",
    ecole_buildings_btn: "Explore",
    ecole_history: "History & About",
    ecole_history_desc: "Historical overview of the school's founding and its role.",
    ecole_history_btn: "Read History",
    ecole_map3d: "3D Map",
    ecole_map3d_desc: "Interactive 3D map to navigate the campus.",
    ecole_map3d_btn: "Open Map",
    
    modal_buildings_title: "Buildings & Amphis",
    modal_buildings_map: "Campus Map",
    modal_buildings_map_desc: "Explore the school in 3D to find amphitheaters and classrooms.",
    modal_buildings_map_btn: "Open 3D Map",
    modal_buildings_videos: "Presentation Videos",
    modal_video_tour: "School Tour",
    modal_video_prepa: "Preparatory Classes",
    modal_video_amphi: "Amphitheaters",
    modal_video_infra: "Infrastructures",
    modal_video_entree: "School Entrance",
    modal_video_info: "Computer Science Dept",
    modal_history_title: "History of ENSTP"
  }
};

// دالة تغيير اللغة
function setLanguage(lang) {
  localStorage.setItem('enstp_lang', lang);
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-' + lang);
  if(activeBtn) activeBtn.classList.add('active');
}

// تشغيل اللغة المحفوظة
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('enstp_lang') || 'ar';
  setTimeout(() => setLanguage(savedLang), 100);
});
