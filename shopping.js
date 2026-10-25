// ============================================
// data/shopping.js — التسوق والأكل (محدث)
// ============================================

window.SECTIONS = window.SECTIONS || [];

(function() {
  for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
    if (window.SECTIONS[i].id === 'shopping') window.SECTIONS.splice(i, 1);
  }

  const CATS = {
    manger:   { icon: "🍽️", fr: "Manger",       ar: "المطاعم",       en: "Food" },
    cafe:     { icon: "☕", fr: "Cafés",         ar: "المقاهي",       en: "Cafés" },
    courses:  { icon: "🛒", fr: "Courses",       ar: "التسوق اليومي", en: "Groceries" },
    pharma:   { icon: "💊", fr: "Pharmacies",    ar: "الصيدليات",     en: "Pharmacies" },
    copie:    { icon: "🖨️", fr: "Copie & Print", ar: "النسخ والطبع",  en: "Print & Copy" },
    sport:    { icon: "🏋️", fr: "Sport",         ar: "الرياضة",       en: "Sports" },
    beaute:   { icon: "💈", fr: "Beauté",        ar: "الحلاقة",       en: "Beauty" },
    tel:      { icon: "📱", fr: "Téléphonie",    ar: "الهواتف",       en: "Phones" },
    vetements:{ icon: "👕", fr: "Vêtements",     ar: "الملابس",       en: "Clothing" },
    services: { icon: "🏦", fr: "Services",      ar: "الخدمات",       en: "Services" },
    mosquee:  { icon: "🕌", fr: "Mosquées",      ar: "المساجد",       en: "Mosques" }
  };

  const ENSTP = [36.7255818, 3.0695956];

  // دالة لحساب المسافة بين نقطتين (بالمسافة المباشرة)
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // نصف قطر الأرض بالكيلومتر
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(2); // إرجاع المسافة بالكيلومتر
  }

  function parseGPS(str) {
    if (!str) return null;
    try {
      if (Array.isArray(str)) return str;
      if (typeof str === 'string') {
        const cleaned = str.replace(/[\[\]]/g, '').split(',').map(Number);
        if (cleaned.length === 2 && !isNaN(cleaned[0]) && !isNaN(cleaned[1])) return cleaned;
      }
    } catch (e) {}
    return null;
  }

  // هيكل البيانات الجديد: [التصنيف, الاسم, الهاتف, التقييم, فئة السعر (1-3), أوقات العمل, أوقات نهاية الأسبوع, ملاحظات, الاحداثيات, الروابط, الفيديو, القائمة]
  const RAW = [
    // ============ MANGER (🍽️) ============
    ["manger","Ovni Burger","+213791389001",4.6,1,[["11:00","02:00"]],{5:[["17:00","02:00"]]},"Burgers","[36.7294789,3.0727182]",{}, "", "Burger, Tacos, Boissons"],
    ["manger","CHEESE KOU","+213562656809",4.2,1,[["10:30","01:00"]],{},"Burgers, tacos, pizzas","[36.7226875,3.0739069]",{}, "", "Pizza, Tacos, Burger"],
    ["manger","KGB","+213541041085",3.8,1,[["10:30","02:00"]],{5:[["07:00","02:00"]]},"Burgers","[36.7296152,3.0765289]",{web:"https://koubagourmentburgerkgb.lovable.app/"}, "tTcA4WxMmYU", "Burgers Gourmet, Frites, Boissons"],
    ["manger","DZ TACOS","+213558363274",3.8,1,[["11:00","01:00"]],{5:[["17:00","01:00"]]},"Tacos, pizza","[36.7220684,3.076564]",{ig:"https://instagram.com/dztacos16"}, "", "Tacos, Pizza"],
    ["manger","Chippy Pizza","+213549238957",3.8,2,[["11:00","23:00"]],{4:[["11:00","23:30"]],5:[["15:00","23:30"]]},"Pizzeria","[36.7274727,3.0651558]",{}, "", "Pizza, Pâtes"],
    ["manger","So Pizz Vieux Kouba","+213557603186",4.5,1,[["11:00","23:00"]],{4:[["11:00","24:00"]],5:[["17:00","24:00"]]},"Pizzeria","[36.7294389,3.0743456]",{}, "Fd-Xfzggt4A", "Pizza, Calzone"],
    ["manger","Chicken Spot Kouba","+213559112233",4.3,1,[["11:00","23:30"]],{5:[["16:00","23:30"]]},"Poulet frit, grillades","[36.7285,3.0752]",{}, "", "Poulet frit, Burgers"],
    ["manger","Tacos World","+213661445566",4.1,1,[["11:00","01:00"]],{},"Tacos, burgers","[36.7268,3.0771]",{}, "", "Tacos, Burger"],
    ["manger","Snack El Wafa","+213550778899",4.0,1,[["08:00","23:00"]],{},"Sandwichs, chawarma","[36.7259,3.0714]",{}, "", "Sandwich, Chawarma"],
    ["manger","Grill House Alger","+213771223344",4.5,2,[["12:00","23:30"]],{5:[["18:00","23:30"]]},"Grillades, couscous","[36.7312,3.0731]",{}, "", "Grillades, Couscous"],

    // ============ CAFÉS (☕) ============
    ["cafe","Green Terrace","+213770203542",4.5,2,[["07:30","22:00"]],{4:[["07:30","24:00"]],5:[["15:00","24:00"]]},"Salon de thé, crêpes, gaufres","[36.7297067,3.0745479]",{}, "", "Crêpes, Gaufres, Café, Jus"],
    ["cafe","Brioch'art Kouba","+213559475640",4.5,2,[["07:00","22:00"]],{},"Café, viennoiseries","[36.7298356,3.075571]",{}, "", "Croissants, Café"],
    ["cafe","Omar Kouba cacahouètes","",4.8,1,[["15:00","03:00"]],{},"Café, thé","[36.7269374,3.0705958]",{}, "", "Thé, Café, Cacahuètes"],
    ["cafe","Celtic Coffee","",4.2,2,[["08:00","23:00"]],{},"Café, boissons","[36.7290, 3.0740]",{}, "8VGVnonAnIg", "Café, Boissons chaudes"],

    // ============ COURSES (🛒) ============
    ["courses","Supérette El-Benna","",3.8,1,[["07:00","22:30"]],{5:[["08:00","12:00"],["13:30","22:30"]]},"Courses","[36.7246946,3.0744576]",{}, "_bspquujzqg", "Produits de base"],
    ["courses","Soummam","",4.1,2,[["09:00","19:00"]],{0:[]},"Boulangerie, pâtisserie","[36.7287341,3.0725755]",{}, "kPLMeh9niw4", "Pain, Gâteaux"],
    ["courses","Boulangerie El Baraka","+213661998877",4.5,1,[["05:00","21:00"]],{},"Pain, viennoiseries","[36.7288,3.0746]",{}, "", "Pain, Viennoiseries"],

    // ============ PHARMA (💊) ============
    ["pharma","Pharmacie BAIDA","+213540175021",4.8,2,[["09:00","02:00"]],{5:[]},"Ouverte tard","[36.7262975,3.0782722]",{}, "ujIck_QBRGk", "Médicaments"],
    ["pharma","Pharmacie AIT AISSA","+213770516293",4.1,2,[["00:00","24:00"]],{},"24h/24","[36.7309633,3.0886542]",{}, "", "Médicaments, Urgences"],

    // ============ COPIE (🖨️) ============
    ["copie","Copie Quick Vieux Kouba","+213550722835",4.1,1,[["07:30","21:00"]],{5:[]},"Photocopie","[36.7291088,3.074546]",{fb:"http://www.facebook.com/copie.quick"}, "", "Photocopie, Impression"],
    ["copie","Librairie 3ami Daoud","+213549143675",4.5,2,[["07:15","23:00"]],{5:[["16:00","23:00"]]},"Papeterie, livres","[36.7297506,3.0734749]",{}, "0TiwKh8Bc2g", "Livres, Papeterie"],

    // ============ SPORT (🏋️) ============
    ["sport","Bk sports Kouba","+213550669696",4.5,2,[["08:00","24:00"]],{5:[["08:30","12:00"],["16:00","21:00"]],0:[["08:00","23:00"]]},"Salle de sport","[36.7278532,3.0888096]",{}, "", "Abonnements, Coaching"],
    ["sport","Body Boost Gym","",4.8,2,[["06:30","23:00"]],{5:[["15:00","23:00"]]},"Salle de sport","[36.7190907,3.0847302]",{}, "", "Musculation, Cardio"],

    // ============ BEAUTÉ (💈) ============
    ["beaute","Golden Barber","+213550249997",4.7,1,[["10:00","21:00"]],{5:[["15:00","20:00"]],0:[]},"Coiffeur","[36.7305383,3.0654661]",{}, "", "Coupe, Barbe"],
    ["beaute","Barber Sperdi","+213552054935",4.9,1,[["09:00","02:00"]],{5:[["14:00","02:00"]]},"Barbier","[36.7255506,3.0887766]",{}, "", "Coupe, Barbe"],

    // ============ TÉLÉPHONIE (📱) ============
    ["tel","YOKA PHONE","+213559216195",4.7,2,[["10:30","22:00"]],{5:[["16:30","22:00"]]},"Téléphones, accessoires","[36.7291607,3.0738177]",{}, "", "Téléphones, Réparation"],
    ["tel","Rogers Phone","+213540124946",4.8,2,[["11:00","23:30"]],{5:[["16:00","23:30"]]},"Téléphones, accessoires","[36.7289015,3.0769381]",{}, "", "Téléphones, Accessoires"],

    // ============ MOSQUÉES (🕌) ============
    ["mosquee","مسجد عبد اللطيف سلطاني","",4.9,0,[],{},"مسجد","[36.7280, 3.0740]",{}, "q9iK6P3XsYA", "مسجد"]
  ];

  const items = RAW.map(function(a, i) {
    const gps = parseGPS(a[8]);
    let distance = null;
    
    // حساب المسافة إذا كانت الإحداثيات موجودة
    if (gps) {
      distance = calculateDistance(ENSTP[0], ENSTP[1], gps[0], gps[1]);
    }

    return {
      i: i,
      c: a[0] || 'manger',
      n: a[1] || 'Sans nom',
      t: a[2] || '',
      r: a[3] || 0,
      p: a[4] || 0, // فئة السعر (0 إلى 3)
      h: a[5] || [], // أوقات العمل
      x: a[6] || {}, // استثناءات نهاية الأسبوع
      note: a[7] || '',
      g: gps,
      l: a[9] || {}, // الروابط
      video: a[10] || "", // الفيديو
      menu: a[11] || "", // القائمة الجديدة
      dist: distance // المسافة المحسوبة
    };
  });

  window.SECTIONS.push({
    id: "shopping",
    icon: "🍽️",
    titleKey: "sectionShopping",
    introKey: "shoppingIntro",
    type: "shops",
    categories: Object.keys(CATS).map(function(key) {
      return {
        id: key,
        icon: CATS[key].icon,
        titleKey: "shop_" + key,
        title: CATS[key].fr,
        items: items.filter(function(x) { return x.c === key; })
      };
    }).filter(function(c) { return c.items.length > 0; })
  });

  window.SHOP_DATA = { items: items, cats: CATS, enstp: ENSTP };

  window.LANG_DATA = window.LANG_DATA || {};
  const trans = {
    fr: {
      sectionShopping: "Manger & Shopping",
      shoppingIntro: "Tous les commerces autour de l'ENSTP.",
      shop_manger: "🍽️ Manger", shop_cafe: "☕ Cafés", shop_courses: "🛒 Courses",
      shop_pharma: "💊 Pharmacies", shop_copie: "🖨️ Copie & Print", shop_sport: "🏋️ Sport",
      shop_beaute: "💈 Beauté", shop_tel: "📱 Téléphonie", shop_vetements: "👕 Vêtements",
      shop_services: "🏦 Services", shop_mosquee: "🕌 Mosquées",
      shopOpen: "Ouvert", shopClosed: "Fermé", shopCall: "📞 Appeler", shopGo: "🚶 Y aller",
      priceLabel: "Prix", distLabel: "Distance", menuLabel: "Menu", scheduleLabel: "Horaires"
    },
    ar: {
      sectionShopping: "الأكل والتسوق",
      shoppingIntro: "كل المتاجر حول ENSTP.",
      shop_manger: "🍽️ المطاعم", shop_cafe: "☕ المقاهي", shop_courses: "🛒 التسوق اليومي",
      shop_pharma: "💊 الصيدليات", shop_copie: "🖨️ النسخ والطبع", shop_sport: "🏋️ الرياضة",
      shop_beaute: "💈 الحلاقة", shop_tel: "📱 الهواتف", shop_vetements: "👕 الملابس",
      shop_services: "🏦 الخدمات", shop_mosquee: "🕌 المساجد",
      shopOpen: "مفتوح", shopClosed: "مغلق", shopCall: "📞 اتصل", shopGo: "🚶 اذهب",
      priceLabel: "السعر", distLabel: "المسافة", menuLabel: "القائمة", scheduleLabel: "أوقات العمل"
    },
    en: {
      sectionShopping: "Food & Shopping",
      shoppingIntro: "All shops around ENSTP.",
      shop_manger: "🍽️ Food", shop_cafe: "☕ Cafés", shop_courses: "🛒 Groceries",
      shop_pharma: "💊 Pharmacies", shop_copie: "🖨️ Print & Copy", shop_sport: "🏋️ Sports",
      shop_beaute: "💈 Beauty", shop_tel: "📱 Phones", shop_vetements: "👕 Clothing",
      shop_services: "🏦 Services", shop_mosquee: "🕌 Mosques",
      shopOpen: "Open", shopClosed: "Closed", shopCall: "📞 Call", shopGo: "🚶 Go",
      priceLabel: "Price", distLabel: "Distance", menuLabel: "Menu", scheduleLabel: "Schedule"
    }
  };
  Object.keys(trans).forEach(function(lang) {
    if (!window.LANG_DATA[lang]) window.LANG_DATA[lang] = {};
    Object.assign(window.LANG_DATA[lang], trans[lang]);
  });
})();
