window.SHOP_DATA = {
  cats: {
    courses:  { icon: "🛒", title: { ar: "التسوق اليومي", fr: "Courses", en: "Groceries" } },
    pharma:   { icon: "💊", title: { ar: "الصيدليات", fr: "Pharmacies", en: "Pharmacies" } },
    tel:      { icon: "📱", title: { ar: "محلات الهواتف", fr: "Téléphonie", en: "Phone Stores" } },
    copie:    { icon: "🖨️", title: { ar: "النسخ والطبع", fr: "Copie & Print", en: "Print & Copy" } },
    beaute:   { icon: "💈", title: { ar: "الحلاقة", fr: "Beauté", en: "Beauty" } },
   
  },
  items: [
    // ==========================================
    // 1. الصيدليات (Pharmacies)
    // ==========================================
    { 
      c: "pharma", n: "Pharmacie Attoui", r: 4.5, p: 2, dist: 0.6, 
      h: [["08:00", "20:00"]], t: "", g: [36.7260, 3.0750], 
      video: "", 
      menu: { ar: "صيدلية عامة، أدوية ومستلزمات طبية", fr: "Pharmacie générale, médicaments et matériel médical", en: "General pharmacy, medicines and medical supplies" }, 
      menuImages: ["attoui 1.jpg", "attoui 2.jpg", "attoui 3.jpg", "attoui 4.jpg", "attoui 5.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Djarar", r: 4.6, p: 2, dist: 0.8, 
      h: [["08:30", "21:00"]], t: "", g: [36.7275, 3.0765], 
      video: "", 
      menu: { ar: "صيدلية، مستحضرات تجميل طبية", fr: "Pharmacie, cosmétiques médicaux", en: "Pharmacy, medical cosmetics" }, 
      menuImages: ["djerar 1.jpg", "djerar 3.jpg", "djerar 4.jpg", "djerar 5.jpg", "djrar 2.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Hassani", r: 4.4, p: 2, dist: 1.0, 
      h: [["09:00", "19:30"]], t: "", g: [36.7285, 3.0780], 
      video: "", 
      menu: { ar: "صيدلية، أدوية مزمنة", fr: "Pharmacie, médicaments chroniques", en: "Pharmacy, chronic medicines" }, 
      menuImages: ["hassani 1.jpg", "hassani 2.jpg", "hassani 3.jpg", "hassani 4.jpg", "hassani 5.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Hadibi", r: 4.2, p: 2, dist: 1.2, 
      h: [["08:00", "20:00"]], t: "", g: [36.7290, 3.0800], 
      video: "", 
      menu: { ar: "صيدلية، مستلزمات الأطفال", fr: "Pharmacie, articles pour bébés", en: "Pharmacy, baby supplies" }, 
      menuImages: ["hadibi 1.jpg", "hadibi 2.jpg", "hadibi 3.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Torkiche", r: 4.3, p: 2, dist: 1.5, 
      h: [["08:00", "21:00"]], t: "", g: [36.7300, 3.0820], 
      video: "", 
      menu: { ar: "صيدلية، فحص ضغط وسكري", fr: "Pharmacie, tension et diabète", en: "Pharmacy, BP and diabetes check" }, 
      menuImages: ["torkich 1.jpg", "torkich 2.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Harket", r: 4.1, p: 2, dist: 1.7, 
      h: [["09:00", "20:00"]], t: "", g: [36.7310, 3.0830], 
      video: "", 
      menu: { ar: "صيدلية، عناية بالبشرة", fr: "Pharmacie, soins de la peau", en: "Pharmacy, skin care" }, 
      menuImages: ["harkat 1.jpg", "harkat 2.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Baziz", r: 4.0, p: 2, dist: 1.9, 
      h: [["08:30", "20:30"]], t: "", g: [36.7320, 3.0840], 
      video: "", 
      menu: { ar: "صيدلية، مكملات غذائية", fr: "Pharmacie, compléments alimentaires", en: "Pharmacy, food supplements" }, 
      menuImages: ["baziz 1.jpg", "baziz 2.jpg"] 
    },
    { 
      c: "pharma", n: "Pharmacie Chikhi", r: 4.7, p: 2, dist: 0.9, 
      h: [["08:00", "22:00"]], t: "", g: [36.7255, 3.0735], 
      video: "", 
      menu: { ar: "صيدلية مناوبة، أدوية نادرة", fr: "Pharmacie de garde, médicaments rares", en: "On-call pharmacy, rare medicines" }, 
      menuImages: ["chikhi 1.jpg", "chikhi 2.jpg", "chikhi 3.jpg"] 
    },

    // ==========================================
    // 2. محلات الهواتف (Phone Stores)
    // ==========================================
    { 
      c: "tel", n: "Progress Phone", r: 4.3, p: 2, dist: 0.7, 
      h: [["09:00", "20:00"]], t: "", g: [36.7265, 3.0760], 
      video: "", 
      menu: { ar: "هواتف ذكية، إكسسوارات", fr: "Smartphones, accessoires", en: "Smartphones, accessories" }, 
      menuImages: ["rogres 1.jpg", "rogres 2.jpg", "rogres 3.jpg"] 
    },
    { 
      c: "tel", n: "Prestige Mobile", r: 4.5, p: 3, dist: 1.1, 
      h: [["09:30", "21:00"]], t: "", g: [36.7280, 3.0780], 
      video: "", 
      menu: { ar: "هواتف رائدة، أجهزة لوحية", fr: "Téléphones haut de gamme, tablettes", en: "High-end phones, tablets" }, 
      menuImages: ["prestige 1.jpg", "prestige 2.jpg", "prestige 3.jpg", "prestige 4.jpg"] 
    },
    { 
      c: "tel", n: "Brothers Phone Kouba", r: 4.2, p: 2, dist: 1.0, 
      h: [["09:00", "20:30"]], t: "", g: [36.7270, 3.0755], 
      video: "", 
      menu: { ar: "إصلاح هواتف، بيع مستعمل", fr: "Réparation de téléphones, vente d'occasion", en: "Phone repair, used sales" }, 
      menuImages: ["brother 2.jpg", "brother 3.jpg", "brother 4.jpg", "brothers 1.jpg"] 
    },
    { 
      c: "tel", n: "Yoka Phone", r: 4.0, p: 1, dist: 1.3, 
      h: [["10:00", "22:00"]], t: "", g: [36.7290, 3.0795], 
      video: "", 
      menu: { ar: "هواتف اقتصادية، شواحن", fr: "Téléphones économiques, chargeurs", en: "Budget phones, chargers" }, 
      menuImages: ["yoka 1.jpg", "yoka 2.jpg", "yoka 3.jpg", "yoka 5.jpg", "yoka 6.jpg"] 
    },
    { 
      c: "tel", n: "Castle Phone", r: 4.4, p: 2, dist: 1.6, 
      h: [["09:00", "21:00"]], t: "", g: [36.7300, 3.0810], 
      video: "", 
      menu: { ar: "هواتف وأجهزة لوحية، صيانة", fr: "Téléphones et tablettes, maintenance", en: "Phones and tablets, maintenance" }, 
      menuImages: ["cafe1.jpg", "cafe2.jpg", "castle 1.jpg", "castle 2.jpg", "castle 3.jpg", "castle 4.jpg"] 
    },
    { 
      c: "tel", n: "Theme Phone", r: 4.1, p: 1, dist: 1.8, 
      h: [["09:30", "20:00"]], t: "", g: [36.7310, 3.0825], 
      video: "", 
      menu: { ar: "إكسسوارات، سماعات", fr: "Accessoires, écouteurs", en: "Accessories, headphones" }, 
      menuImages: ["theme 1.jpg", "theme 2.jpg", "theme 3.jpg", "theme 4.jpg", "theme 5.jpg"] 
    },
    { 
      c: "tel", n: "Hamia Phone", r: 4.3, p: 2, dist: 2.0, 
      h: [["08:30", "21:30"]], t: "", g: [36.7320, 3.0840], 
      video: "", 
      menu: { ar: "هواتف، بطاقات شحن", fr: "Téléphones, cartes de recharge", en: "Phones, recharge cards" }, 
      menuImages: ["hamia 1.jpg", "hamia 2.jpg", "hamia 3.jpg", "hamia 4.jpg", "hamia 5.jpg", "hamia 6.jpg"] 
    },
    { 
      c: "tel", n: "Fiane Phone", r: 4.6, p: 3, dist: 1.4, 
      h: [["09:00", "22:00"]], t: "", g: [36.7295, 3.0775], 
      video: "", 
      menu: { ar: "أحدث الهواتف، ضمان رسمي", fr: "Derniers téléphones, garantie officielle", en: "Latest phones, official warranty" }, 
      menuImages: ["fiane 1.jpg", "fiane 2.jpg", "fiane 3.jpg", "fiane 4.jpg", "fiane 5.jpg", "chikhi 4.jpg"] 
    },

    // ==========================================
    // 3. التسوق اليومي والخدمات
    // ==========================================
    { 
      c: "courses", n: "Supérette El-Benna", r: 3.8, p: 1, dist: 0.5, 
      h: [["07:00", "22:30"]], t: "", g: [36.7246946, 3.0744576], 
      video: "_bspquujzqg", // فيديو سوبيريت البنا
      menu: { ar: "مواد غذائية، تنظيف", fr: "Alimentation, Nettoyage", en: "Food, Cleaning" }, 
      menuImages: [] 
    },
    { 
      c: "copie", n: "مكتبة عمي داوود", r: 4.2, p: 1, dist: 0.3, 
      h: [["08:00", "19:00"]], t: "", g: [36.7255, 3.0710], 
      video: "0TiwKh8Bc2g", // فيديو مكتبة عمي داوود
      menu: { ar: "طباعة، نسخ، تجليد", fr: "Impression, Photocopie, Reliure", en: "Printing, Copy, Binding" }, 
      menuImages: [] 
    },
    { 
      c: "copie", n: "Maktabet El-Nour", r: 4.2, p: 1, dist: 0.4, 
      h: [["08:00", "19:00"]], t: "", g: [36.7255, 3.0710], 
      video: "", 
      menu: { ar: "طباعة، نسخ، تجليد", fr: "Impression, Photocopie, Reliure", en: "Printing, Copy, Binding" }, 
      menuImages: [] 
    },
    { 
      c: "beaute", n: "Salon El-Wafa", r: 4.6, p: 2, dist: 0.9, 
      h: [["09:00", "21:00"]], t: "", g: [36.7260, 3.0720], 
      video: "", 
      menu: { ar: "حلاقة رجالية", fr: "Coiffure homme", en: "Men's haircut" }, 
      menuImages: [] 
    },
  ]
};
