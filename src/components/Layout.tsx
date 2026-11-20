import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="solid" data-card="filled" data-pattern="hairlines">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="Hotel Sid El-Aidi Medina"
          cta={{
            text: "Réserver sur WhatsApp",
            href: "#contact-plum-form"
          }}
        />
      </header>
      <main className="flex-grow" data-button="solid" data-card="filled" data-pattern="hairlines">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="Hotel Sid El-Aidi Medina"
          phone={"06 43 69 66 93.\r\n7"}
          email="contact@hotelsidelaidi.com"
          address={[
            "8 Rue Sidi El Aidi",
            "Rabat 10030"
          ]}
          columns={[
            {
              title: "Navigation",
              links: [
                {
                  text: "Accueil",
                  href: "#hero"
                },
                {
                  text: "Le Riad",
                  href: "#about"
                },
                {
                  text: "Chambres & Tarifs",
                  href: "#pricing"
                }
              ]
            },
            {
              title: "Découvrir",
              links: [
                {
                  text: "Galerie photo",
                  href: "#gallery"
                },
                {
                  text: "Situation & Medina",
                  href: "#faq-plus-accordion"
                },
                {
                  text: "Contact & Accès",
                  href: "#contact-plum-form"
                }
              ]
            },
            {
              title: "Direct",
              links: [
                {
                  text: "Réserver via WhatsApp",
                  href: "https://wa.me/212643696693"
                },
                {
                  text: "Mentions légales",
                  href: "#"
                }
              ]
            }
          ]}
          legal="© 2026 Hotel Sid El-Aidi Medina. Tous droits réservés."
          toTopText="Haut de page"
        />
      </footer>
    </div>
  );
}
