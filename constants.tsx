
import { Service, Translations } from './types';

export const DOCTOR_INFO = {
  name: "Dr. Lina Ahamdanech",
  whatsapp: "0660040641",
  phone: "0531055452",
  instagram: "lina.ahamdanech",
  address: "Tetouan, Morocco",
  google_maps_iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25962.85254220684!2d-5.408748125683568!3d35.56959000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b43508bbc88bd%3A0xa2c6007f8ed7c973!2sCabinet%20Dentaire%20Dr.%20Lina%20Ahamdanech!5e0!3m2!1sen!2sma!4v1769628377429!5m2!1sen!2sma",
  google_maps_link: "https://maps.app.goo.gl/4nbfyg6aFtXqeD3S9"
};

export const SERVICES_AR: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];

export const SERVICES_FR: Service[] = [
  {
    id: "blanchiment",
    title: "Blanchiment Dentaire",
    description: "Blanchiment professionnel pour un sourire éclatant et naturel avec les dernières technologies.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "Implants Dentaires",
    description: "Restauration permanente des dents manquantes pour un confort et une confiance garantis.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "Orthodontie",
    description: "Correction de l'alignement des dents pour enfants et adultes.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "Soins Caries",
    description: "Traitement rapide et sans douleur des caries tout en préservant la structure dentaire.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "Détartrage & Polissage",
    description: "Élimination de la plaque et du tartre pour maintenir des gencives saines.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "Extraction Dentaire",
    description: "Extraction sûre avec des soins particuliers pour minimiser la douleur.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];

export const TRANSLATIONS_AR: Translations = {
  nav_home: "الرئيسية",
  nav_services: "خدماتنا",
  nav_contact: "حجز موعد",
  hero_title: "ابتسامتك هي أولويتنا",
  hero_subtitle: "نحن نقدم أفضل رعاية صحية لأسنانك باستخدام أحدث التقنيات لضمان راحتك وجمال ابتسامتك.",
  hero_cta: "احجز موعدك الآن",
  services_title: "خدماتنا المتميزة",
  services_subtitle: "حلول شاملة لصحة وجمال أسنانك",
  contact_title: "تواصل معنا",
  contact_subtitle: "املأ الاستمارة وسنقوم بالتواصل معك عبر الواتساب لتأكيد الموعد",
  form_name: "الاسم الكامل",
  form_phone: "رقم الهاتف",
  form_email: "البريد الإلكتروني",
  form_service: "الخدمة المطلوبة",
  form_date: "تاريخ الموعد",
  form_time: "وقت الموعد",
  form_submit: "تأكيد الموعد عبر واتساب",
  footer_address: "تطوان، المغرب",
  footer_rights: "جميع الحقوق محفوظة",
  whatsapp_message_prefix: "السلام عليكم دكتورة لينا، أود حجز موعد ل"
};

export const TRANSLATIONS_FR: Translations = {
  nav_home: "Accueil",
  nav_services: "Services",
  nav_contact: "Rendez-vous",
  hero_title: "Votre sourire est notre priorité",
  hero_subtitle: "Nous offrons les meilleurs soins dentaires avec des technologies de pointe pour votre confort.",
  hero_cta: "Prendre rendez-vous",
  services_title: "Nos Services",
  services_subtitle: "Solutions complètes pour la santé et la beauté de vos dents",
  contact_title: "Contactez-nous",
  contact_subtitle: "Remplissez le formulaire et nous vous contacterons via WhatsApp pour confirmer.",
  form_name: "Nom complet",
  form_phone: "Téléphone",
  form_email: "E-mail",
  form_service: "Service souhaité",
  form_date: "Date du RDV",
  form_time: "Heure du RDV",
  form_submit: "Réserver via WhatsApp",
  footer_address: "Tétouan, Maroc",
  footer_rights: "Tous droits réservés",
  whatsapp_message_prefix: "Bonjour Dr. Lina, je souhaite prendre un rendez-vous pour "
};
