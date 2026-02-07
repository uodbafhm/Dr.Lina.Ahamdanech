
export type Language = 'AR' | 'FR';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Translations {
  nav_home: string;
  nav_services: string;
  nav_contact: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  services_title: string;
  services_subtitle: string;
  contact_title: string;
  contact_subtitle: string;
  form_name: string;
  form_phone: string;
  form_email: string;
  form_service: string;
  form_date: string;
  form_time: string;
  form_submit: string;
  footer_address: string;
  footer_rights: string;
  whatsapp_message_prefix: string;
}
