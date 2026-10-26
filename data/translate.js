// إعدادات الترجمة
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ar',
    includedLanguages: 'ar,fr,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

// تحميل سكريبت جوجل تلقائياً
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
})();

// وظيفة تغيير اللغة عند الضغط على الأزرار
function changeLanguage(lang) {
  var select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change'));
  }
}
