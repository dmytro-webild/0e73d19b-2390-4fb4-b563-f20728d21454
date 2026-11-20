import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import AboutArchCurve from "@/components/sections/about/AboutArchCurve";
import PricingFramedSlider from "@/components/sections/pricing/PricingFramedSlider";
import GalleryWindowMerge from "@/components/sections/gallery/GalleryWindowMerge";
import TestimonialPhotoQuote from "@/components/sections/testimonial/TestimonialPhotoQuote";
import FaqPlusAccordion from "@/components/sections/faq/FaqPlusAccordion";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title="hotel Sid El-Aidi"
          script="Rabat"
          labelLeft="Séjour authentique"
          labelRight="Au cœur Medina"
          marquee={[
            "Riad traditionnel",
            "Kasbah Oudayas",
            "Havre de paix"
          ]}
          imageSrc="https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598098-groz5xbq.jpg"
          imageAlt="studded wooden arched doorway"
          cta={{
            text: "Réserver direct",
            href: "https://wa.me/212643696693"
          }}
        />
      </div>

      <div id="about" data-webild-section="AboutArchCurve" data-webild-section-id="AboutArchCurve-1" data-section="about">
        <AboutArchCurve
          title="Havre de paix"
          label="Architecture marocaine & tradition"
          placeTitle="MÉDINA DE RABAT"
          description="Plongez dans l'authenticité d'un Hôtel traditionnel. Entre zelliges artisanaux, patio ombragé et architecture historique, vivez une expérience authentique au cœur de Rabat."
          note="Authenticité & tradition"
          items={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598099-m1hxz5mv.jpg",
              imageAlt: "Beautiful luxury pillow on sofa"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingFramedSlider" data-webild-section-id="PricingFramedSlider-1" data-section="pricing">
        <PricingFramedSlider
          title="Chambres & Tarifs"
          script="séjour"
          items={[
            {
              name: "Chambre Double",
              price: "342 MAD",
              period: "par nuit",
              description: "Lit double, salle de bain en zellige et connexion Wi-Fi haut débit.",
              specs: [
                {
                  label: "Capacité",
                  value: "2 personnes"
                },
                {
                  label: "Sanitaires",
                  value: "Zellige privé"
                },
                {
                  label: "Connexion",
                  value: "Wi-Fi gratuit"
                }
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598100-mqy7odzw.jpg",
              imageAlt: "Room interior design",
              cta: {
                text: "Réserver",
                href: "https://wa.me/212643696693?text=Bonjour,%20je%20souhaite%20réserver%20une%20Chambre%20Double."
              }
            },
            {
              name: "Chambre Twin",
              price: "342 MAD",
              period: "par nuit",
              description: "Deux lits simples et vue apaisante sur le patio et la fontaine.",
              specs: [
                {
                  label: "Capacité",
                  value: "2 personnes"
                },
                {
                  label: "Sanitaires",
                  value: "Zellige privé"
                },
                {
                  label: "Connexion",
                  value: "Wi-Fi gratuit"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/pillow-bed-with-light-lamp_74190-2095.jpg",
              imageAlt: "Pillow on bed with light lamp",
              cta: {
                text: "Réserver",
                href: "https://wa.me/212643696693?text=Bonjour,%20je%20souhaite%20réserver%20une%20Chambre%20Twin."
              }
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery" data-scene data-gallery>
        <GalleryWindowMerge
          word="RABAT"
          quote="Nous avons préservé l'architecture marocaine traditionnelle au cœur du patio."
          credit="Hugo Martin, gérant du riad"
          imageSrc="https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795184261043-96t9psva.jpg"
          imageAlt="Colorful and vibrant indian landscape"
          items={[
            {
              title: "Fontaine en zellige",
              imageSrc: "https://img.b2bpic.net/free-photo/arab-restaurant_23-2147794217.jpg",
              imageAlt: "Fontaine en zellige au centre du patio"
            },
            {
              title: "Cour du petit-déjeuner",
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-table-served-with-pilaf-with-dried-fruits-served-stewed-meat-with-herbs-bowls_140725-12864.jpg",
              imageAlt: "Side view of a table served with pilaf with dried fruits served and stewed meat with herbs in bowls"
            },
            {
              title: "Réception du Riad",
              imageSrc: "https://img.b2bpic.net/free-photo/handmade-copper-cezve-turkish-traditional-tableware-shelf-kitchen-home-restaurant-selective-focus_166373-4560.jpg",
              imageAlt: "Handmade copper cezve Turkish traditional tableware on a shelf in the kitchen at home or in a restaurant selective focus"
            },
            {
              title: "Escalier sculpté",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598097-l933ha47.jpg",
              imageAlt: "Steps in the old city vertical frame concept for wallpaper or background Journey through the old cities of the Mediterranean"
            },
            {
              title: "Salon marocain",
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-luxury-pillow-sofa_74190-2057.jpg",
              imageAlt: "Beautiful luxury pillow on sofa"
            },
            {
              title: "Détails artisanaux",
              imageSrc: "https://img.b2bpic.net/free-photo/patterned-tiles_1122-1237.jpg",
              imageAlt: "Patterned tiles"
            },
            {
              title: "Patio central",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598099-rs701r2v.jpg?_wi=2",
              imageAlt: "Natural beautiful texture"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPhotoQuote" data-webild-section-id="TestimonialPhotoQuote-1" data-section="testimonial" data-scene>
        <TestimonialPhotoQuote
          items={[
            {
              quote: "Un havre de paix au cœur de la médina. Le patio est magnifique et l'accueil très chaleureux.",
              name: "Manon Fournier",
              role: "Voyageuse en solo"
            },
            {
              quote: "Emplacement idéal tout près de la Kasbah des Oudayas. Chambre confortable et très calme.",
              name: "Nicolas Roux",
              role: "Séjour en couple"
            }
          ]}
          imageSrc="https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795184293893-fcy7wu5z.jpg"
          imageAlt="Sunset reflects on ruined monument ancient history illuminated generated by AI"
        />
      </div>

      <div id="faq-plus-accordion" data-webild-section="FaqPlusAccordion" data-webild-section-id="FaqPlusAccordion-1" data-section="faq-plus-accordion">
        <FaqPlusAccordion
          title="Questions sur la Médina"
          script="MEDINA DE RABAT"
          items={[
            {
              title: "OÙ SE TROUVE L'HÔTEL ?",
              description: "Nous sommes situés au 8 Rue Sidi El Aidi, dans une ruelle calme de la Medina de Rabat."
            },
            {
              title: "LA KASBAH EST-ELLE ACCESSIBLE À PIED ?",
              description: "Oui, vous pouvez rejoindre la Kasbah des Oudayas en quelques minutes de marche à travers la Medina."
            },
            {
              title: "COMMENT RÉSERVER VOTRE SÉJOUR ?",
              description: "Toutes les réservations se font directement avec nous via WhatsApp au 06 43 69 66 93 pour obtenir le meilleur tarif sans commission."
            }
          ]}
          cta={{
            text: "Réserver sur WhatsApp",
            href: "#contact-plum-form"
          }}
          ariaLabel="Foire aux questions sur la situation du Riad"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="Réserver un séjour"
          script="contact"
          options={[
            "Chambre Double",
            "Chambre Twin",
            "Autre demande"
          ]}
          submitText="Envoyer"
          labels={{
            name: "Nom complet",
            email: "Email",
            enquiry: "Sujet",
            message: "Message",
            sending: "Envoi...",
            sent: "Envoyé !",
            thanks: "Merci, nous vous répondrons rapidement."
          }}
        />
      </div>
    </>
  );
}
