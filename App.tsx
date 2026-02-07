
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Language } from './types';
import { TRANSLATIONS_AR, TRANSLATIONS_FR, SERVICES_AR, SERVICES_FR, DOCTOR_INFO } from './constants';
import { Phone, MessageCircle, Instagram, MapPin, Calendar, Clock, User, Mail, ChevronRight, Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC<{ lang: Language, setLang: (l: Language) => void }> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = lang === 'AR' ? TRANSLATIONS_AR : TRANSLATIONS_FR;
  const isRtl = lang === 'AR';

  return (
    <nav className={`fixed top-0 w-full glass-nav z-50 shadow-sm border-b border-gray-100 transition-all duration-300 ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold bg-gradient-to-r from-clinic-primary to-clinic-accent bg-clip-text text-transparent ${isRtl ? 'font-arabic' : ''}`}>
              {DOCTOR_INFO.name}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-clinic-primary hover:text-clinic-accent font-medium transition-colors hover-underline-animation">{t.nav_home}</Link>
            <Link to="/services" className="text-clinic-primary hover:text-clinic-accent font-medium transition-colors hover-underline-animation">{t.nav_services}</Link>
            <Link to="/contact" className="text-clinic-primary hover:text-clinic-accent font-medium transition-colors hover-underline-animation">{t.nav_contact}</Link>
            
            <div className="flex bg-gray-100/50 rounded-full p-1 shadow-inner ml-4 rtl:mr-4">
              <button 
                onClick={() => setLang('AR')} 
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === 'AR' ? 'bg-clinic-primary text-white shadow-md' : 'text-gray-500 hover:text-clinic-primary'}`}
              >
                AR
              </button>
              <button 
                onClick={() => setLang('FR')} 
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === 'FR' ? 'bg-clinic-primary text-white shadow-md' : 'text-gray-500 hover:text-clinic-primary'}`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex bg-gray-100/50 rounded-full p-1 shadow-inner">
              <button onClick={() => setLang('AR')} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'AR' ? 'bg-clinic-primary text-white' : 'text-gray-500'}`}>AR</button>
              <button onClick={() => setLang('FR')} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'FR' ? 'bg-clinic-primary text-white' : 'text-gray-500'}`}>FR</button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-clinic-primary hover:text-clinic-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 border-t border-gray-100 bg-white' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1 text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-clinic-primary hover:bg-gray-50 rounded-lg">{t.nav_home}</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-clinic-primary hover:bg-gray-50 rounded-lg">{t.nav_services}</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-clinic-primary hover:bg-gray-50 rounded-lg">{t.nav_contact}</Link>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = lang === 'AR' ? TRANSLATIONS_AR : TRANSLATIONS_FR;
  const isRtl = lang === 'AR';

  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-clinic-surface overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left rtl:lg:text-right animate-fade-in-up">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-clinic-primary leading-tight mb-6 ${isRtl ? 'font-arabic' : ''}`}>
            {t.hero_title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t.hero_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact" className="px-8 py-4 bg-clinic-accent text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-clinic-accent/20 flex items-center justify-center gap-2 group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.hero_cta}
            </Link>
            <a href={`tel:${DOCTOR_INFO.phone}`} className="px-8 py-4 bg-white text-clinic-primary border border-gray-200 rounded-xl font-bold hover:border-clinic-primary transition-all flex items-center justify-center gap-2 shadow-sm">
              <Phone className="w-5 h-5 text-clinic-highlight" />
              {DOCTOR_INFO.phone}
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-clinic-accent rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="relative p-2 bg-white rounded-[2rem] shadow-2xl border border-gray-100">
            <img 
              src="https://i.postimg.cc/7hrXc5bg/imgi-47-281778532-525200255923878-6516249437400888076-n.jpg" 
              alt="Cabinet Dentaire Dr. Lina Ahamdanech" 
              className="rounded-[1.8rem] w-full max-w-lg mx-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = lang === 'AR' ? TRANSLATIONS_AR : TRANSLATIONS_FR;
  const services = lang === 'AR' ? SERVICES_AR : SERVICES_FR;
  const isRtl = lang === 'AR';

  const handleBookService = (serviceTitle: string) => {
    const message = lang === 'AR' 
      ? `السلام عليكم دكتورة لينا، أود حجز موعد ل${serviceTitle}`
      : `Bonjour Dr. Lina, je souhaite prendre un rendez-vous pour ${serviceTitle}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212${DOCTOR_INFO.whatsapp.substring(1)}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-clinic-accent font-bold tracking-widest uppercase text-sm">{lang === 'AR' ? 'خدمات احترافية' : 'SOINS PROFESSIONNELS'}</span>
          <h2 className={`text-3xl md:text-4xl font-bold text-clinic-primary mt-2 mb-4 ${isRtl ? 'font-arabic' : ''}`}>{t.services_title}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t.services_subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => handleBookService(service.title)}
              className="group flex flex-col bg-clinic-surface rounded-2xl border border-gray-100 hover:border-clinic-accent hover:shadow-xl hover:shadow-clinic-accent/5 transition-all duration-300 cursor-pointer"
            >
              <div className="h-56 overflow-hidden rounded-t-2xl relative">
                <div className="absolute inset-0 bg-clinic-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-xl font-bold text-clinic-primary mb-3 ${isRtl ? 'font-arabic' : ''}`}>{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-clinic-accent font-bold text-sm group-hover:text-clinic-primary transition-colors">
                  {t.nav_contact} <ChevronRight className={`w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = lang === 'AR' ? TRANSLATIONS_AR : TRANSLATIONS_FR;
  const services = lang === 'AR' ? SERVICES_AR : SERVICES_FR;
  const isRtl = lang === 'AR';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `${t.whatsapp_message_prefix}${formData.service}
    - ${t.form_name}: ${formData.name}
    - ${t.form_phone}: ${formData.phone}
    - ${t.form_email}: ${formData.email}
    - ${t.form_date}: ${formData.date}
    - ${t.form_time}: ${formData.time}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212${DOCTOR_INFO.whatsapp.substring(1)}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-clinic-surface min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left rtl:lg:text-right">
              <h2 className={`text-4xl font-bold text-clinic-primary mb-4 ${isRtl ? 'font-arabic' : ''}`}>{t.contact_title}</h2>
              <p className="text-gray-600 leading-relaxed">{t.contact_subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={`tel:${DOCTOR_INFO.phone}`} className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-clinic-accent transition-all group">
                <div className="p-3 bg-clinic-surface group-hover:bg-clinic-accent/10 rounded-xl text-clinic-primary group-hover:text-clinic-accent transition-colors"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Phone</p>
                  <p className="font-bold text-clinic-primary">{DOCTOR_INFO.phone}</p>
                </div>
              </a>
              <a href={`https://wa.me/212${DOCTOR_INFO.whatsapp.substring(1)}`} className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-green-400 transition-all group">
                <div className="p-3 bg-green-50 group-hover:bg-green-100 rounded-xl text-green-600 transition-colors"><MessageCircle className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">WhatsApp</p>
                  <p className="font-bold text-clinic-primary">{DOCTOR_INFO.whatsapp}</p>
                </div>
              </a>
              <a href={`https://instagram.com/${DOCTOR_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-clinic-highlight transition-all group">
                <div className="p-3 bg-clinic-highlight/5 group-hover:bg-clinic-highlight/10 rounded-xl text-clinic-highlight transition-colors"><Instagram className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Instagram</p>
                  <p className="font-bold text-clinic-primary">@{DOCTOR_INFO.instagram}</p>
                </div>
              </a>
              <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-clinic-accent/5 rounded-xl text-clinic-accent"><MapPin className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Location</p>
                  <p className="font-bold text-clinic-primary">{DOCTOR_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-72 border-8 border-white group">
              <iframe 
                src={DOCTOR_INFO.google_maps_iframe}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.form_name}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  <input 
                    type="text" required placeholder="Ahmed Benali" 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-clinic-surface focus:outline-none focus:ring-2 focus:ring-clinic-accent/20 focus:bg-white transition-all font-medium" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.form_phone}</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input 
                      type="tel" required placeholder="06XXXXXXXX" 
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-clinic-surface focus:outline-none focus:ring-2 focus:ring-clinic-accent/20 focus:bg-white transition-all font-medium" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.form_email}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input 
                      type="email" placeholder="email@example.com" 
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-clinic-surface focus:outline-none focus:ring-2 focus:ring-clinic-accent/20 focus:bg-white transition-all font-medium" 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.form_service}</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
                  <select 
                    required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-clinic-surface focus:outline-none focus:ring-2 focus:ring-clinic-accent/20 focus:bg-white transition-all font-medium appearance-none"
                  >
                    <option value="">-- {t.form_service} --</option>
                    {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.form_date}</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
                    <input 
                      type="date" required 
                      value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-clinic-surface focus:outline-none focus:ring-2 focus:ring-clinic-accent/20 focus:bg-white transition-all font-medium" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.form_time}</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
                    <input 
                      type="time" required 
                      value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-clinic-surface focus:outline-none focus:ring-2 focus:ring-clinic-accent/20 focus:bg-white transition-all font-medium" 
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-green-500 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-100 active:scale-95 mt-4"
              >
                <MessageCircle className="w-6 h-6" />
                {t.form_submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = lang === 'AR' ? TRANSLATIONS_AR : TRANSLATIONS_FR;
  const isRtl = lang === 'AR';

  return (
    <footer className={`bg-clinic-primary text-white py-16 px-4 sm:px-6 lg:px-8 ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left rtl:md:text-right">
          <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-white to-clinic-accent bg-clip-text text-transparent ${isRtl ? 'font-arabic' : ''}`}>{DOCTOR_INFO.name}</h3>
          <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
            <MapPin className="w-4 h-4 text-clinic-accent" /> {t.footer_address}
          </p>
        </div>
        <div className="flex gap-4">
          <a href={`https://wa.me/212${DOCTOR_INFO.whatsapp.substring(1)}`} className="p-4 bg-white/5 hover:bg-green-500/20 rounded-2xl transition-all hover:-translate-y-1">
            <MessageCircle className="w-7 h-7 text-green-400" />
          </a>
          <a href={`https://instagram.com/${DOCTOR_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-clinic-highlight/20 rounded-2xl transition-all hover:-translate-y-1">
            <Instagram className="w-7 h-7 text-clinic-highlight" />
          </a>
          <a href={`tel:${DOCTOR_INFO.phone}`} className="p-4 bg-white/5 hover:bg-clinic-accent/20 rounded-2xl transition-all hover:-translate-y-1">
            <Phone className="w-7 h-7 text-clinic-accent" />
          </a>
        </div>
        <div className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} {DOCTOR_INFO.name}.<br/>{t.footer_rights}.
        </div>
      </div>
    </footer>
  );
};

const HomePage: React.FC<{ lang: Language }> = ({ lang }) => (
  <>
    <Hero lang={lang} />
    <ServicesGrid lang={lang} />
  </>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('AR');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen transition-all duration-300 ${lang === 'AR' ? 'rtl' : 'ltr'}`}>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/services" element={<ServicesGrid lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </main>
      <Footer lang={lang} />

      {/* Floating Instagram Icon - Primary Action Button */}
      <a 
        href={`https://instagram.com/${DOCTOR_INFO.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-5 rounded-[1.5rem] shadow-2xl shadow-pink-200/50 hover:scale-110 transition-all duration-300 active:scale-90"
        title="Follow us on Instagram"
      >
        <Instagram className="w-8 h-8" />
      </a>
    </div>
  );
};

const WrappedApp = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default WrappedApp;
