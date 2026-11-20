import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import EraTitle from "@/components/kit/EraTitle";
import EraArchWindow from "@/components/kit/EraArchWindow";
import { useKitMotion, usePreloadImages } from "@/components/kit/kitMotion";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Detail = { label: string; value: string };

type FormLabels = { name?: string; email?: string; enquiry?: string; message?: string; sending?: string; sent?: string; thanks?: string };

type ContactPlumFormProps = {
  title?: string;
  script?: string;
  options?: string[];
  labels?: FormLabels;
  submitText?: string;
  imageSrc?: string;
  imageAlt?: string;
  details?: Detail[];
  locationTitle?: string;
  locationSubtitle?: string;
  address?: string;
  googleMapsUrl?: string;
  embedMapUrl?: string;
  highlights?: string[];
  mapsButtonText?: string;
  ariaLabel?: string;
  className?: string;
};

const ContactPlumForm = ({
  title = "Get in touch",
  script = "hello",
  options = ["A booking", "An event", "Something else"],
  labels,
  submitText = "Send",
  imageSrc,
  imageAlt = "",
  details = [],
  locationTitle,
  locationSubtitle,
  address,
  googleMapsUrl,
  embedMapUrl,
  highlights = [],
  mapsButtonText = "Voir sur Google Maps",
  ariaLabel,
  className,
}: ContactPlumFormProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const timer = useRef<number>(undefined);
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "200%");

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state !== "idle") return;
    const form = event.currentTarget;
    setState("sending");
    timer.current = window.setTimeout(() => {
      setState("sent");
      form.reset();
    }, 1200);
  };

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: kit.base, ease: kit.ease, delay },
  });

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative bg-secondary py-[var(--section-space)] text-secondary-foreground", className)}>
      <div className="mx-auto grid w-[var(--container)] grid-cols-1 gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col gap-[clamp(2.5rem,5vw,4rem)]">
          <EraTitle text={title} script={script} align="left" className="max-w-[3.95em]" />
          <motion.form {...fade(0.2)} onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.name ?? "Name"}</p>
                <input name="name" required autoComplete="name" className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground" />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.email ?? "Email"}</p>
                <input name="email" type="email" required autoComplete="email" className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground" />
              </label>
            </div>
            {options.length > 0 && (
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.enquiry ?? "Enquiry"}</p>
                <select name="topic" defaultValue={options[0]} className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground">
                  {options.map((option) => (
                    <option key={option} value={option} className="bg-secondary text-secondary-foreground">
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className="flex flex-col gap-2">
              <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{labels?.message ?? "Message"}</p>
              <textarea name="message" rows={3} className="resize-none border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground" />
            </label>
            <div className="flex items-center gap-6">
              <button type="submit" disabled={state !== "idle"} className="btn-secondary disabled:cursor-default">
                {state === "sending" ? (labels?.sending ?? "Sending") : state === "sent" ? (labels?.sent ?? "Sent") : submitText}
              </button>
              <p aria-live="polite" className="text-[length:var(--text-small)] text-secondary-foreground/75">
                {state === "sent" ? (labels?.thanks ?? "Thank you, we will reply within a day.") : ""}
              </p>
            </div>
          </motion.form>
        </div>

        <div className="flex flex-col gap-6">
          {(locationTitle || address || googleMapsUrl || highlights.length > 0) && (
            <motion.div {...fade(0.25)} className="flex flex-col gap-4 rounded-2xl border border-secondary-foreground/25 bg-secondary-foreground/5 p-6 sm:p-7 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {locationSubtitle && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary-foreground/30 bg-secondary-foreground/10 px-3 py-1 text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5 shrink-0" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {locationSubtitle}
                  </span>
                )}
                {googleMapsUrl && (
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
                  >
                    <span>Google Maps</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>

              {locationTitle && (
                <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] text-secondary-foreground">
                  {locationTitle}
                </h3>
              )}

              {address && (
                <p className="flex items-start gap-2.5 text-[length:var(--text-body)] leading-relaxed text-secondary-foreground/85">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5 shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{address}</span>
                </p>
              )}

              {highlights.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-secondary-foreground/15">
                  {highlights.map((h, i) => (
                    <span key={`${i}-${h}`} className="inline-flex items-center gap-1.5 rounded-lg bg-secondary-foreground/10 px-3 py-1.5 text-[length:var(--text-small)] font-medium text-secondary-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {embedMapUrl && (
            <motion.div {...fade(0.35)} className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-secondary-foreground/25 min-h-[300px] lg:min-h-[340px] lg:flex-1 shadow-sm">
              <iframe
                src={embedMapUrl}
                title="Google Maps Location - Hotel Sid El-Aidi Medina"
                className="h-full w-full min-h-[300px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-secondary-foreground/20 bg-secondary/95 px-4 py-2 text-[length:var(--text-label)] font-semibold uppercase tracking-wider text-secondary-foreground shadow-md backdrop-blur-md transition-all hover:bg-secondary hover:scale-105"
                >
                  <span>{mapsButtonText}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}

          {imageSrc && !embedMapUrl && (
            <div className="flex w-full flex-col border border-secondary-foreground/25 p-2 lg:min-h-[28rem] lg:flex-1">
              <EraArchWindow className="aspect-[4/5] w-full lg:aspect-auto lg:flex-1">
                <Media src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              </EraArchWindow>
            </div>
          )}
          {details.length > 0 && (
            <motion.dl {...fade(0.3)} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {details.map((detail, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <dt className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{detail.label}</dt>
                  <dd className="text-[length:var(--text-body)] leading-[1.5] [overflow-wrap:anywhere]">{detail.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPlumForm;
