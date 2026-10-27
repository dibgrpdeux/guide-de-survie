// ============================================
// data/shopping.js — التسوق والأكل
// ============================================

window.SECTIONS = window.SECTIONS || [];

(function() {
  for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
    if (window.SECTIONS[i].id === 'shopping') window.SECTIONS.splice(i, 1);
  }

  // التصنيفات مع مفاتيح الترجمة
  const CATS = {
    manger:   { icon: "🍽️", key: "manger", title: { ar: "المطاعم", fr: "Manger", en: "Food" } },
    cafe:     { icon: "☕", key: "cafe", title: { ar: "المقاهي", fr: "Cafés", en: "Cafés" } },
    courses:  { icon: "🛒", key: "courses", title: { ar: "التسوق اليومي", fr: "Courses", en: "Groceries" } },
    pharma:   { icon: "💊", key: "pharma", title: { ar: "الصيدليات", fr: "Pharmacies", en: "Pharmacies" } },
    copie:    { icon: "🖨️", key: "copie", title: { ar: "النسخ والطبع", fr: "Copie & Print", en: "Print & Copy" } },
    sport:    { icon: "🏋️", key: "sport", title: { ar: "الرياضة", fr: "Sport", en: "Sports" } },
    beaute:   { icon: "💈", key: "beaute", title: { ar: "الحلاقة", fr: "Beauté", en: "Beauty" } },
    tel:      { icon: "📱", key: "tel", title: { ar: "الهواتف", fr: "Téléphonie", en: "Phones" } },
    mosquee:  { icon: "🕌", key: "mosquee", title: { ar: "المساجد", fr: "Mosquées", en: "Mosques" } }
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
    return parseFloat((R * c).toFixed(2));
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

  // البيانات الخام
  const RAW = [
    // ============ MANGER (🍽️) ============
    ["manger","Mega Pizza Kouba","",4.5,2,[["11:00","23:00"]],{},"Pizzeria","[36.7294389,3.0743456]",{}, "", {ar: "بيتزا", fr: "Pizza", en: "Pizza"}, ["MEGA 1.jpg", "MEGA 2.jpg"]],
    ["manger","Mo Pizza","+213552554140",4.4,2,[["11:00","23:55"]],{4:[["11:00","00:30"]],5:[["18:00","00:30"]]},"Pizzas, sandwichs","[36.7289283,3.0804309]",{}, "", {ar: "بيتزا", fr: "Pizza", en: "Pizza"}, ["MO VIP.jpg", "MOO.jpg"]],
    ["manger","On Est La","",4.8,2,[["11:00","01:00"]],{},"Restaurant","[36.7220684,3.076564]",{}, "", {ar: "أطباق متنوعة", fr: "Plats variés", en: "Various dishes"}, ["ON EST LA 1.jpg", "ON EST LA 2.jpg"]],
    ["manger","American Berger","",4.1,1,[["11:00","23:00"]],{},"Burgers","[36.7274727,3.0651558]",{}, "", {ar: "برغر", fr: "Burgers", en: "Burgers"}, ["american1.jpg", "american2.jpg", "american3.jpg", "american4.jpg"]],
    ["manger","Cheese Kou","+213562656809",4.2,1,[["10:30","01:00"]],{},"Burgers, tacos","[36.7226875,3.0739069]",{}, "", {ar: "تاكتوز، بيتزا", fr: "Tacos, Pizza", en: "Tacos, Pizza"}, ["cheese.jpg", "cheese3.jpg", "cheese4.jpg", "cheese5.jpg", "cheese6.jpg"]],
    ["manger","KGB","+213541041085",3.8,1,[["10:30","02:00"]],{5:[["07:00","02:00"]]},"Burgers","[36.7296152,3.0765289]",{web:"https://koubagourmentburgerkgb.lovable.app/"}, "tTcA4WxMmYU", {ar: "برغر KGB: 700 دج", fr: "KGB Burger: 700 DA", en: "KGB Burger: 700 DA"}, ["kgb.png", "kgb1.jpeg", "kgb2.jpeg"]],
    ["manger","Ovni Burger","+213791389001",4.6,1,[["11:00","02:00"]],{5:[["17:00","02:00"]]},"Burgers","[36.7294789,3.0727182]",{}, "", {ar: "برغر كلاسيك: 450 دج", fr: "Burger Classique: 450 DA", en: "Classic Burger: 450 DA"}, ["ovni.png.jpg", "ovni1.png.jpg", "ovni2.png.webp", "ovni3.png.jpeg"]],
    ["manger","DZ Tacos","+213558363274",3.8,1,[["11:00","01:00"]],{5:[["17:00","01:00"]]},"Tacos","[36.7220684,3.076564]",{}, "", {ar: "تاكتوز", fr: "Tacos", en: "Tacos"}, ["tacos.jpg", "tacos1.jpg", "tacos10.jpg", "tacos2.jpg", "tacos3.jpg", "tacos4.jpg", "tacos5.jpg", "tacos6.jpg", "tacos7.jpg", "tacos8.jpg", "tacos9.jpg"]],

    // ============ CAFÉS (☕) ============
    ["cafe","Patisserie Benkhlifa","",4.5,2,[["07:00","22:00"]],{},"Pâtisserie","[36.7298356,3.075571]",{}, "", {ar: "حلويات", fr: "Gâteaux", en: "Cakes"}, ["benkhlifa 3.jpg", "benkhlifa1.jpg", "benkhlifa2.jpg"]],
    ["cafe","César Patisserie","+213669846909",4.2,2,[["08:00","23:00"]],{},"Pâtisserie","[36.7303142,3.0840737]",{}, "", {ar: "حلويات", fr: "Gâteaux", en: "Cakes"}, ["cesar1.jpg", "cesar2.jpg", "cesar3.jpg"]],
    ["cafe","Green Caffee","+213770203542",4.5,2,[["07:30","22:00"]],{4:[["07:30","24:00"]],5:[["15:00","24:00"]]},"Salon de thé","[36.7297067,3.0745479]",{}, "", {ar: "قهوة", fr: "Café", en: "Coffee"}, ["green1.jpg", "green2.jpg", "green3.jpg", "green5.jpg", "green6.jpg", "green7.jpg"]],

    // ============ COURSES (🛒) ============
    ["courses","Supérette El-Benna","",3.8,1,[["07:00","22:30"]],{5:[["08:00","12:00"],["13:30","22:30"]]},"Courses","[36.7246946,3.0744576]",{}, "_bspquujzqg", "", []],

    // ============ PHARMA (💊) ============
    ["pharma","Pharmacie BAIDA","+213540175021",4.8,2,[["09:00","02:00"]],{5:[]},"Ouverte tard","[36.7262975,3.0782722]",{}, "ujIck_QBRGk", "", []],

    // ============ MOSQUÉES (🕌) ============
    ["mosquee","مسجد عبد اللطيف سلطاني","",4.9,0,[],{},"مسجد","[36.7280, 3.0740]",{}, "q9iK6P3XsYA", "", []]
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
      menu: a[11] || {ar: "", fr: "", en: ""}, // قائمة الطعام مترجمة
      menuImages: a[12] || [],
      dist: distance 
    };
  });

  window.SECTIONS.push({
    id: "shopping",
    icon: "🍽️",
    titleKey: "shopping_title",
    introKey: "shopping_subtitle",
    type: "shops",
    categories: Object.keys(CATS).map(function(key) {
      return {
        id: key,
        icon: CATS[key].icon,
        title: CATS[key].title,
        items: items.filter(function(x) { return x.c === key; })
      };
    }).filter(function(c) { return c.items.length > 0; })
  });

  window.SHOP_DATA = { items: items, cats: CATS, enstp: ENSTP };
})();
