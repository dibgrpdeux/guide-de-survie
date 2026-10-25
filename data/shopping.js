// ============================================
// data/shopping.js — التسوق والأكل
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

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return parseFloat((R * c).toFixed(2)); // إرجاع المسافة كرقم
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

  // هيكل البيانات: [التصنيف, الاسم, الهاتف, التقييم, فئة السعر, أوقات العمل, استثناءات, ملاحظات, الإحداثيات, الروابط, الفيديو, قائمة الطعام والأسعار]
  const RAW = [
    // ============ MANGER (🍽️) ============
    ["manger","Ovni Burger","+213791389001",4.6,1,[["11:00","02:00"]],{5:[["17:00","02:00"]]},"Burgers","[36.7294789,3.0727182]",{}, "", "Burger Classique: 450 DA | Double Cheese: 650 DA | Frites: 200 DA | Boisson: 100 DA"],
    ["manger","CHEESE KOU","+213562656809",4.2,1,[["10:30","01:00"]],{},"Burgers, tacos, pizzas","[36.7226875,3.0739069]",{}, "", "Tacos Poulet: 500 DA | Pizza Margarita: 600 DA | Burger: 400 DA"],
    ["manger","KGB","+213541041085",3.8,1,[["10:30","02:00"]],{5:[["07:00","02:00"]]},"Burgers","[36.7296152,3.0765289]",{web:"https://koubagourmentburgerkgb.lovable.app/"}, "tTcA4WxMmYU", "KGB Burger: 700 DA | Menu Combo: 1000 DA | Frites Cheddar: 350 DA"],
    ["manger","So Pizz Vieux Kouba","+213557603186",4.5,2,[["11:00","23:00"]],{4:[["11:00","24:00"]],5:[["17:00","24:00"]]},"Pizzeria","[36.7294389,3.0743456]",{}, "Fd-Xfzggt4A", "Pizza 4 Fromages: 900 DA | Calzone: 800 DA | Pâtes: 600 DA"],
    ["manger","Grill House Alger","+213771223344",4.5,2,[["12:00","23:30"]],{5:[["18:00","23:30"]]},"Grillades, couscous","[36.7312,3.0731]",{}, "", "Couscous Poulet: 800 DA | Grillades Mixtes: 1200 DA | Salade: 300 DA"],

    // ============ CAFÉS (☕) ============
    ["cafe","Green Terrace","+213770203542",4.5,2,[["07:30","22:00"]],{4:[["07:30","24:00"]],5:[["15:00","24:00"]]},"Salon de thé, crêpes","[36.7297067,3.0745479]",{}, "", "Crêpe Nutella: 400 DA | Café: 150 DA | Jus d'orange: 250 DA"],
    ["cafe","Brioch'art Kouba","+213559475640",4.5,2,[["07:00","22:00"]],{},"Café, viennoiseries","[36.7298356,3.075571]",{}, "", "Croissant: 100 DA | Pain au chocolat: 120 DA | Cappuccino: 200 DA"],
    ["cafe","Omar Kouba cacahouètes","",4.8,1,[["15:00","03:00"]],{},"Café, thé","[36.7269374,3.0705958]",{}, "", "Thé à la menthe: 100 DA | Café: 80 DA | Cacahuètes: 150 DA"],
    ["cafe","Celtic Coffee","",4.2,2,[["08:00","23:00"]],{},"Café, boissons","[36.7290, 3.0740]",{}, "8VGVnonAnIg", "Café Latte: 250 DA | Muffin: 200 DA | Jus Frais: 300 DA"],

    // ============ COURSES (🛒) ============
    ["courses","Supérette El-Benna","",3.8,1,[["07:00","22:30"]],{5:[["08:00","12:00"],["13:30","22:30"]]},"Courses","[36.7246946,3.0744576]",{}, "_bspquujzqg", ""],
    ["courses","Soummam","",4.1,2,[["09:00","19:00"]],{0:[]},"Boulangerie, pâtisserie","[36.7287341,3.0725755]",{}, "kPLMeh9niw4", "Pain: 10 DA | Gâteau: 200 DA"],
    ["courses","Boulangerie El Baraka","+213661998877",4.5,1,[["05:00","21:00"]],{},"Pain, viennoiseries","[36.7288,3.0746]",{}, "", ""],

    // ============ PHARMA (💊) ============
    ["pharma","Pharmacie BAIDA","+213540175021",4.8,2,[["09:00","02:00"]],{5:[]},"Ouverte tard","[36.7262975,3.0782722]",{}, "ujIck_QBRGk", ""],
    ["pharma","Pharmacie AIT AISSA","+213770516293",4.1,2,[["00:00","24:00"]],{},"24h/24","[36.7309633,3.0886542]",{}, "", ""],

    // ============ MOSQUÉES (🕌) ============
    ["mosquee","مسجد عبد اللطيف سلطاني","",4.9,0,[],{},"مسجد","[36.7280, 3.0740]",{}, "q9iK6P3XsYA", ""]
  ];

  const items = RAW.map(function(a, i) {
    const gps = parseGPS(a[8]);
    let distance = null;
    if (gps) {
      distance = calculateDistance(ENSTP[0], ENSTP[1], gps[0], gps[1]);
    }

    return {
      i: i,
      c: a[0] || 'manger',
      n: a[1] || 'Sans nom',
      t: a[2] || '',
      r: a[3] || 0,
      p: a[4] || 0, 
      h: a[5] || [], 
      x: a[6] || {}, 
      note: a[7] || '',
      g: gps,
      l: a[9] || {}, 
      video: a[10] || "", 
      menu: a[11] || "", 
      dist: distance 
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
})();
