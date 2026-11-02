// ============================================
// data/sport.js — Section Santé & Sport
// ============================================

window.SECTIONS = window.SECTIONS || [];

// Supprimer l'ancienne section sport si elle existe
for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'sport') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "sport",
  icon: "⚕️",
  titleKey: "sectionSport",
  introKey: "sportIntro",
  type: "items",

  items: [

    // ==========================================
    // 🩺 MÉDECINS (9)
    // ==========================================
    {
      category: "medecin",
      title: { fr: "Dr Farid Aissani", ar: "د. فريد عيساني", en: "Dr Farid Aissani" },
      icon: "❤️",
      specialty: { fr: "Cardiologie", ar: "أمراض القلب", en: "Cardiology" },
      address: "Coopemad Sud, Bt 71/4, Kouba",
      phone: "023 70 54 57",
      map: "Coopemad Sud Bt 71/4 Kouba Alger",
      mapCoords: [36.7260, 3.0750]
    },
    {
      category: "medecin",
      title: { fr: "Dr Amina Bendali", ar: "د. أمينة بن دالي", en: "Dr Amina Bendali" },
      icon: "👶",
      specialty: { fr: "Gynécologie-Obstétrique", ar: "أمراض النساء والتوليد", en: "Gynecology-Obstetrics" },
      address: "Route des Annassers, Kouba",
      phone: "0553 24 07 60",
      map: "Route des Annassers Kouba Alger",
      mapCoords: [36.7275, 3.0765]
    },
    {
      category: "medecin",
      title: { fr: "Dr Houria Ouabdesselam", ar: "د. حورية وعباد السلام", en: "Dr Houria Ouabdesselam" },
      icon: "🧒",
      specialty: { fr: "Pédiatrie", ar: "طب الأطفال", en: "Pediatrics" },
      address: "Jolie Vue 2, 1216 logements, Bt 12, Kouba",
      phone: "0697 28 58 17",
      map: "Jolie Vue 2 1216 logements Kouba Alger",
      mapCoords: [36.7285, 3.0780]
    },
    {
      category: "medecin",
      title: { fr: "Dr Mokhtar Bengherbi", ar: "د. مختار بن غربي", en: "Dr Mokhtar Bengherbi" },
      icon: "👁️",
      specialty: { fr: "Ophtalmologie", ar: "طب العيون", en: "Ophthalmology" },
      address: "70 avenue des Frères Abdeslami, Kouba",
      phone: "023 60 16 78",
      map: "70 avenue des Frères Abdeslami Kouba Alger",
      mapCoords: [36.7290, 3.0800]
    },
    {
      category: "medecin",
      title: { fr: "Dr Abdelghani Debba", ar: "د. عبد الغني دبة", en: "Dr Abdelghani Debba" },
      icon: "👁️",
      specialty: { fr: "Ophtalmologie", ar: "طب العيون", en: "Ophthalmology" },
      address: "75 avenue des Frères Abdeslami, Vieux Kouba",
      phone: "0660 39 29 22",
      map: "75 avenue des Frères Abdeslami Vieux Kouba Alger",
      mapCoords: [36.7300, 3.0820]
    },
    {
      category: "medecin",
      title: { fr: "Dr Farid Ait Allaoua", ar: "د. فريد آيت علاوة", en: "Dr Farid Ait Allaoua" },
      icon: "👁️",
      specialty: { fr: "Ophtalmologie", ar: "طب العيون", en: "Ophthalmology" },
      address: "43 rue des Frères Abdeslami, Kouba",
      phone: "0696 57 94 94",
      map: "43 rue des Frères Abdeslami Kouba Alger",
      mapCoords: [36.7310, 3.0830]
    },
    {
      category: "medecin",
      title: { fr: "Dr Widad Benantar", ar: "د. وداد بن نتر", en: "Dr Widad Benantar" },
      icon: "🧒",
      specialty: { fr: "Pédiatrie", ar: "طب الأطفال", en: "Pediatrics" },
      address: "Cité Sastra / Jolie Vue 2, Kouba",
      phone: "021 68 89 13",
      map: "Cité Sastra Jolie Vue 2 Kouba Alger",
      mapCoords: [36.7320, 3.0840]
    },
    {
      category: "medecin",
      title: { fr: "Dr Zineb Belhadj", ar: "د. زينب بلحاج", en: "Dr Zineb Belhadj" },
      icon: "👶",
      specialty: { fr: "Gynécologie-Obstétrique", ar: "أمراض النساء والتوليد", en: "Gynecology-Obstetrics" },
      address: "12 avenue des Frères Abdeslami, 1er étage, Kouba",
      phone: "0559 67 11 71",
      map: "12 avenue des Frères Abdeslami Kouba Alger",
      mapCoords: [36.7255, 3.0735]
    },
    {
      category: "medecin",
      title: { fr: "Pr Bouferrouk", ar: "أ.د. بوفرق", en: "Pr Bouferrouk" },
      icon: "❤️",
      specialty: { fr: "Cardiologie", ar: "أمراض القلب", en: "Cardiology" },
      address: "Cité Garidi 1, Bt 8 n°1, Kouba",
      phone: "0551 26 84 36",
      map: "Cité Garidi 1 Bt 8 Kouba Alger",
      mapCoords: [36.7295, 3.0775]
    },

    // ==========================================
    // 🦷 DENTISTES (4)
    // ==========================================
    {
      category: "dentiste",
      title: { fr: "Cabinet Dental GR", ar: "عيادة الأسنان GR", en: "Cabinet Dental GR" },
      icon: "🦷",
      specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
      address: "Kouba, Alger",
      phone: "0558 58 11 07",
      map: "Cabinet Dental GR Kouba Alger",
      mapCoords: [36.7280, 3.0750],
      images: ["gr 1.jpg", "gr 2.jpg", "gr 3.jpg", "gr 4.jpg", "gr 5.jpg", "gr6.jpg"]
    },
    {
      category: "dentiste",
      title: { fr: "Cabinet Dentaire Kouba", ar: "عيادة الأسنان القبة", en: "Cabinet Dentaire Kouba" },
      icon: "🦷",
      specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
      address: "Kouba, Alger",
      phone: "0666 42 12 72",
      map: "Cabinet Dentaire Kouba Alger",
      mapCoords: [36.7290, 3.0760],
      images: ["cabinet1.jpg"]
    },
    {
      category: "dentiste",
      title: { fr: "NN Cabinet Dentaire", ar: "عيادة الأسنان NN", en: "NN Cabinet Dentaire" },
      icon: "🦷",
      specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
      address: "Kouba, Alger",
      phone: "",
      map: "NN Cabinet Dentaire Kouba Alger",
      mapCoords: [36.7300, 3.0770],
      images: ["nn1.jpg", "nn2.jpg", "nn3.jpg", "nn4.jpg"]
    },
    {
      category: "dentiste",
      title: { fr: "Cabinet Dentaire Dr Noui", ar: "عيادة الأسنان د. نوي", en: "Cabinet Dentaire Dr Noui" },
      icon: "🦷",
      specialty: { fr: "Dentiste", ar: "عيادة أسنان", en: "Dentist" },
      address: "Kouba, Alger",
      phone: "",
      map: "Cabinet Dentaire Dr Noui Kouba Alger",
      mapCoords: [36.7310, 3.0780],
      images: ["noui 1.jpg", "noui 2.jpg", "noui 3.jpg", "noui 4.jpg", "noui 5.jpg"]
    },

    // ==========================================
    // 🏋️ SALLES DE FITNESS (7)
    // ==========================================
    {
      category: "salle",
      title: { fr: "Ares Sport", ar: "Ares Sport", en: "Ares Sport" },
      icon: "🏋️",
      specialty: { fr: "Salle de sport", ar: "صالة رياضية", en: "Gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Ares Sport Kouba Alger",
      mapCoords: [36.7270, 3.0740],
      images: ["ares 1.jpg", "ares 2.jpg", "ares 3.jpg", "ares 4.jpg"]
    },
    {
      category: "salle",
      title: { fr: "Club des Femmes", ar: "نادي النساء", en: "Club des Femmes" },
      icon: "💃",
      specialty: { fr: "Salle pour femmes", ar: "صالة رياضية للنساء", en: "Women's gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Club des Femmes Kouba Alger",
      mapCoords: [36.7280, 3.0755],
      images: ["bas 1.jpg", "bas 3.jpg", "bas 4.jpg"]
    },
    {
      category: "salle",
      title: { fr: "Fitness Club", ar: "Fitness Club", en: "Fitness Club" },
      icon: "💪",
      specialty: { fr: "Salle de fitness", ar: "صالة لياقة", en: "Fitness gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Fitness Club Kouba Alger",
      mapCoords: [36.7290, 3.0765],
      images: ["club 1.jpg", "club 2.jpg"]
    },
    {
      category: "salle",
      title: { fr: "Bouzid Club", ar: "Bouzid Club", en: "Bouzid Club" },
      icon: "🏋️",
      specialty: { fr: "Salle de sport", ar: "صالة رياضية", en: "Gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Bouzid Club Kouba Alger",
      mapCoords: [36.7300, 3.0775],
      images: ["bouzid 1.jpg", "bouzid 2.jpg"]
    },
    {
      category: "salle",
      title: { fr: "Kouba Olympic", ar: "Kouba Olympic", en: "Kouba Olympic" },
      icon: "🏊",
      specialty: { fr: "Piscine et salle de sport", ar: "مسبح وصالة رياضية", en: "Pool and gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Kouba Olympic Kouba Alger",
      mapCoords: [36.7310, 3.0785],
      images: ["swiming 1.jpg", "swiming 2.jpg"]
    },
    {
      category: "salle",
      title: { fr: "Fitness City", ar: "Fitness City", en: "Fitness City" },
      icon: "💪",
      specialty: { fr: "Salle de fitness", ar: "صالة لياقة", en: "Fitness gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Fitness City Kouba Alger",
      mapCoords: [36.7320, 3.0795],
      images: ["city 1.jpg", "city 2.jpg", "city 3.jpg"]
    },
    {
      category: "salle",
      title: { fr: "Body Boost Gym", ar: "Body Boost Gym", en: "Body Boost Gym" },
      icon: "💪",
      specialty: { fr: "Salle de musculation", ar: "صالة كمال أجسام", en: "Bodybuilding gym" },
      address: "Kouba, Alger",
      phone: "",
      map: "Body Boost Gym Kouba Alger",
      mapCoords: [36.7330, 3.0805],
      images: ["gym 1.jpg", "gym 2.jpg", "gym 3.jpg", "gym 4.jpg", "gym 5.jpg"]
    },

    // ==========================================
    // 🎬 VIDÉOS (3)
    // ==========================================
    {
      category: "video",
      title: { fr: "Complexe Sportif de Kouba", ar: "المركب الرياضي القبة", en: "Kouba Sports Complex" },
      icon: "🏟️",
      desc: { fr: "Découvrez le complexe sportif de Kouba en vidéo.", ar: "اكتشف المركب الرياضي القبة من خلال الفيديو.", en: "Discover the Kouba sports complex in video." },
      video: "aqPng7nyFZU",
      extra: "📍 Kouba, Alger"
    },
    {
      category: "video",
      title: { fr: "Vidéo motivante (Garidi)", ar: "فيديو تحفيزي (قاريدي)", en: "Motivating video (Garidi)" },
      icon: "💪",
      desc: { fr: "Une vidéo motivante tournée à Garidi.", ar: "فيديو تحفيزي تم تصويره في قاريدي.", en: "A motivating video filmed in Garidi." },
      video: "byDM5wQ3wcc",
      extra: "🎬 Motivation"
    },
    {
      category: "video",
      title: { fr: "", ar: "", en: "" },
      icon: "🔥",
      desc: { fr: "Un short inspirant pour te dépasser.", ar: "فيديو قصير ملهم لتجاوز نفسك.", en: "An inspiring short to push your limits." },
      videoUrl: "https://youtube.com/shorts/s4IcvPRD5dY",
      extra: "🎬 YouTube Shorts"
    }
  ]
});
