import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";
import { useLanguage, type Language } from "@/context/LanguageContext";

const navItemsByLang: Record<Language, { name: string; href: string }[]> = {
  fr: [
    { name: "Accueil", href: "#hero" },
    { name: "Le Riad", href: "#about" },
    { name: "Chambres & Tarifs", href: "#pricing" },
    { name: "Galerie photo", href: "#gallery" },
    { name: "À proximité", href: "#nearby" },
    { name: "Situation & Médina", href: "#faq-plus-accordion" },
    { name: "Contact", href: "#contact-plum-form" },
  ],
  en: [
    { name: "Home", href: "#hero" },
    { name: "The Riad", href: "#about" },
    { name: "Rooms & Rates", href: "#pricing" },
    { name: "Photo Gallery", href: "#gallery" },
    { name: "Nearby attractions", href: "#nearby" },
    { name: "Location & Medina", href: "#faq-plus-accordion" },
    { name: "Contact", href: "#contact-plum-form" },
  ],
  ar: [
    { name: "الرئيسية", href: "#hero" },
    { name: "عن الرياض", href: "#about" },
    { name: "الغرف والأسعار", href: "#pricing" },
    { name: "معرض الصور", href: "#gallery" },
    { name: "الأماكن القريبة", href: "#nearby" },
    { name: "الموقع والمدينة", href: "#faq-plus-accordion" },
    { name: "اتصل بنا", href: "#contact-plum-form" },
  ],
};

const ctaByLang: Record<Language, { text: string; href: string }> = {
  fr: { text: "Réserver sur WhatsApp", href: "https://wa.me/212643696693" },
  en: { text: "Book on WhatsApp", href: "https://wa.me/212643696693" },
  ar: { text: "احجز عبر واتساب", href: "https://wa.me/212643696693" },
};

export default function Layout() {
  const { language } = useLanguage();
  const lang = language ?? "fr";
  const navItems = navItemsByLang[lang];
  const cta = ctaByLang[lang];

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="solid" data-card="filled" data-pattern="hairlines">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="Hotel Sid El-Aidi Medina"
          navItems={navItems}
          cta={cta}
          menuText={lang === "ar" ? "القائمة" : lang === "en" ? "Menu" : "Menu"}
          closeText={lang === "ar" ? "إغلاق" : lang === "en" ? "Close" : "Fermer"}
        />
      </header>
      <main className="flex-grow" data-button="solid" data-card="filled" data-pattern="hairlines">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="Hotel Sid El-Aidi Medina"
          phone="06 43 69 66 93"
          email="contact@hotelsidelaidi.com"
          address={[
            "8 Rue Sidi El Aidi",
            "Rabat 10030"
          ]}
          columns={[
            {
              title: lang === "ar" ? "التنقل" : lang === "en" ? "Navigation" : "Navigation",
              links: navItems.slice(0, 3).map((item) => ({ text: item.name, href: item.href })),
            },
            {
              title: lang === "ar" ? "اكتشف" : lang === "en" ? "Discover" : "Découvrir",
              links: [
                {
                  text: lang === "ar" ? "معرض الصور" : lang === "en" ? "Photo Gallery" : "Galerie photo",
                  href: "#gallery",
                },
                {
                  text: lang === "ar" ? "الأماكن القريبة" : lang === "en" ? "Nearby attractions" : "À proximité",
                  href: "#nearby",
                },
                {
                  text: lang === "ar" ? "الموقع والمدينة" : lang === "en" ? "Location & Medina" : "Situation & Medina",
                  href: "#faq-plus-accordion",
                },
                {
                  text: lang === "ar" ? "اتصل بنا" : lang === "en" ? "Contact & Access" : "Contact & Accès",
                  href: "#contact-plum-form",
                },
              ],
            },
            {
              title: lang === "ar" ? "حجز مباشر" : lang === "en" ? "Direct Booking" : "Direct",
              links: [
                {
                  text: lang === "ar" ? "حجز عبر واتساب" : lang === "en" ? "Book via WhatsApp" : "Réserver via WhatsApp",
                  href: "https://wa.me/212643696693",
                },
                {
                  text: lang === "ar" ? "الشروط القانونية" : lang === "en" ? "Legal Notice" : "Mentions légales",
                  href: "#",
                },
              ],
            },
          ]}
          legal="© 2026 Hotel Sid El-Aidi Medina. Tous droits réservés."
          toTopText={lang === "ar" ? "أعلى الصفحة" : lang === "en" ? "Back to top" : "Haut de page"}
        />
      </footer>
    </div>
  );
}
