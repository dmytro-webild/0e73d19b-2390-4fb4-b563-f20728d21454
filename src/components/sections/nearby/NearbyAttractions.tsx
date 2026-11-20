"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import EraTitle from "@/components/kit/EraTitle";
import Media from "@/components/kit/Media";
import { Footprints, MapPin } from "lucide-react";
import { useLanguage, type Language } from "@/context/LanguageContext";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type NearbyItem = {
  id: string;
  name: Record<Language, string>;
  line: Record<Language, string>;
  walkTime: string;
  imageSrc: string;
  imageAlt: Record<Language, string>;
};

const attractions: NearbyItem[] = [
  {
    id: "udayas",
    name: {
      fr: "Kasbah des Oudayas",
      en: "Kasbah des Oudayas",
      ar: "قصبة الأوداية",
    },
    line: {
      fr: "Citadelle historique offrant une vue imprenable sur l'océan Atlantique et l'embouchure du Bouregreg.",
      en: "Historic citadel with breathtaking views of the Atlantic Ocean and the Bouregreg river mouth.",
      ar: "قلعة تاريخية عريقة تطل على المحيط الأطلسي ومصب نهر أبو رقراق.",
    },
    walkTime: "X min walk",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598098-groz5xbq.jpg",
    imageAlt: {
      fr: "Porte et enceinte fortifiée de la Kasbah des Oudayas",
      en: "Fortified doorway of the Kasbah des Oudayas",
      ar: "باب وسور قصبة الأوداية التاريخي",
    },
  },
  {
    id: "udayas-gardens",
    name: {
      fr: "Jardins des Oudayas (Jardins andalous)",
      en: "Oudayas Gardens (Andalusian gardens)",
      ar: "حدائق الأوداية (الحدائق الأندلسية)",
    },
    line: {
      fr: "Havre de verdure paisible d'inspiration andalouse abritant orangers, lauriers et bougainvilliers.",
      en: "Peaceful Andalusian-style garden filled with orange trees, oleanders, and bougainvillea.",
      ar: "واحة خضراء غناء بطراز أندلسي تحيط بها أشجار البرتقال والأزهار العطرة.",
    },
    walkTime: "X min walk",
    imageSrc: "https://img.b2bpic.net/free-photo/arab-restaurant_23-2147794217.jpg",
    imageAlt: {
      fr: "Jardins andalous des Oudayas",
      en: "Oudayas Andalusian Gardens",
      ar: "حدائق الأوداية الأندلسية",
    },
  },
  {
    id: "medina-souks",
    name: {
      fr: "Médina de Rabat et ses souks",
      en: "Rabat Medina and its souks",
      ar: "مدينة الرباط القديمة وأسواقها",
    },
    line: {
      fr: "Ruelles pittoresques et animées bordées d'échoppes d'artisans, d'épices et d'artisanat local.",
      en: "Picturesque vibrant alleys lined with artisan shops, spices, and traditional crafts.",
      ar: "أزقة عريقة مفعمة بالحياة والحرف التقليدية والأسواق المغربية الأصيلة.",
    },
    walkTime: "X min walk",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MLOeyW4BsnFq0Fm7Mpzc72h7pC/uploaded-1795181598097-l933ha47.jpg",
    imageAlt: {
      fr: "Ruelles et échoppes de la Médina de Rabat",
      en: "Traditional alleyways of the Rabat Medina",
      ar: "أزقة وتجار المدينة القديمة بالرباط",
    },
  },
  {
    id: "hassan-tower",
    name: {
      fr: "Tour Hassan",
      en: "Hassan Tower",
      ar: "صومعة حسان",
    },
    line: {
      fr: "Minaret majestueux en grès rouge du XIIe siècle, monument emblématique de Rabat.",
      en: "Majestic 12th-century red sandstone minaret and iconic landmark of Rabat.",
      ar: "مئذنة تاريخية شهيرة من الحجر الأحمر تعود للقرن الثاني عشر.",
    },
    walkTime: "X min walk",
    imageSrc: "https://img.b2bpic.net/free-photo/sunset-reflects-ruined-monument-ancient-history-illuminated-generated-by-ai_188544-11678.jpg",
    imageAlt: {
      fr: "Tour Hassan à Rabat",
      en: "Hassan Tower monument in Rabat",
      ar: "صومعة حسان بالرباط",
    },
  },
  {
    id: "mausoleum",
    name: {
      fr: "Mausolée de Mohammed V",
      en: "Mausoleum of Mohammed V",
      ar: "ضريح محمد الخامس",
    },
    line: {
      fr: "Chef-d'œuvre de l'architecture marocaine moderne en marbre blanc au toit de tuiles vertes.",
      en: "Masterpiece of modern Moroccan architecture built with white marble and green tile roof.",
      ar: "تحفة معمارية مغربية حديثة بالرخام الأبيض والزخارف التقليدية الفاخرة.",
    },
    walkTime: "X min walk",
    imageSrc: "https://images.pexels.com/photos/5987994/pexels-photo-5987994.png?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: {
      fr: "Mausolée de Mohammed V",
      en: "Mausoleum of Mohammed V",
      ar: "ضريح محمد الخامس",
    },
  },
  {
    id: "chellah",
    name: {
      fr: "Chellah",
      en: "Chellah",
      ar: "شالة",
    },
    line: {
      fr: "Cité antique et nécropole mérinide nichée dans un jardin verdoyant habité par des cigognes.",
      en: "Ancient Roman and Merinid archaeological ruins set in tranquil stork-inhabited gardens.",
      ar: "موقع أثري قديم يضم آثاراً رومانية ومرينية في أحضان الطبيعة الهادئة.",
    },
    walkTime: "X min walk",
    imageSrc: "https://images.pexels.com/photos/34805600/pexels-photo-34805600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: {
      fr: "Nécropole et ruines antiques de Chellah",
      en: "Ancient ruins of Chellah",
      ar: "موقع شالة الأثري في الرباط",
    },
  },
  {
    id: "bouregreg",
    name: {
      fr: "Bouregreg river and the boat to Salé",
      en: "Bouregreg river and the boat to Salé",
      ar: "نهر أبو رقراق والقوارب إلى سلا",
    },
    line: {
      fr: "Promenade aménagée le long du fleuve et traversée pittoresque en barque traditionnelle vers Salé.",
      en: "Waterfront promenade and traditional wooden boat ride across the river to Salé.",
      ar: "جولة على ضفاف النهر وركوب القوارب الخشبية التقليدية نحو مدينة سلا.",
    },
    walkTime: "X min walk",
    imageSrc: "https://images.pexels.com/photos/6877573/pexels-photo-6877573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: {
      fr: "Fleuve Bouregreg et barques vers Salé",
      en: "Bouregreg river and traditional boats",
      ar: "نهر أبو رقراق والقوارب التقليدية",
    },
  },
];

const titles: Record<Language, { title: string; script: string; description: string }> = {
  fr: {
    title: "Lieux à proximité",
    script: "Découvrir Rabat",
    description: "Le Riad Sid El-Aidi bénéficie d'un emplacement privilégié au cœur de la Médina, à quelques minutes à pied des plus beaux trésors et monuments historiques de Rabat.",
  },
  en: {
    title: "Nearby attractions",
    script: "Discover Rabat",
    description: "Hotel Sid El-Aidi enjoys a prime location in the heart of the Medina, just a short walk from Rabat's most iconic historical landmarks and treasures.",
  },
  ar: {
    title: "الأماكن القريبة",
    script: "استكشف الرباط",
    description: "يتميز فندق سيد العايدي بموقع ممتاز في قلب المدينة القديمة، على بعد خطوات قصيرة مشياً من أبهى المعالم والكنوز التاريخية في الرباط.",
  },
};

type NearbyAttractionsProps = {
  ariaLabel?: string;
  className?: string;
};

export default function NearbyAttractions({ ariaLabel, className }: NearbyAttractionsProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const lang = language ?? "fr";
  const { title, script, description } = titles[lang];

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel ?? title}
      className={cn("relative bg-background py-[var(--section-space)] text-foreground border-t border-border/30", className)}
    >
      <div className="mx-auto w-[var(--container)] flex flex-col items-center">
        <EraTitle text={title} script={script} rule className="max-w-[4.05em]" />

        <p className="mt-4 max-w-2xl text-center text-[length:var(--text-body)] text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {attractions.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.07 }}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card,0.75rem)] border border-border/40 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Media
                  src={item.imageSrc}
                  alt={item.imageAlt[lang]}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-foreground shadow-sm border border-border/40 rtl:right-auto rtl:left-3">
                  <Footprints className="size-3.5 text-accent shrink-0" />
                  <span>{item.walkTime}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center gap-1 text-xs text-white/90">
                  <MapPin className="size-3.5 shrink-0 text-accent" />
                  <span className="truncate font-medium">{item.name[lang]}</span>
                </div>
              </div>

              <div className="flex flex-col flex-grow p-5 sm:p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
                  {item.name[lang]}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {item.line[lang]}
                </p>

                <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-accent font-medium">
                    <Footprints className="size-3.5" />
                    {item.walkTime}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase opacity-75">Medina Rabat</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
