"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import useMenuDialog from "@/components/kit/useMenuDialog";

type NavItem = { name: string; href: string };

type NavbarSealCornerProps = {
  brand?: string;
  navItems?: NavItem[];
  cta?: { text: string; href: string };
  menuText?: string;
  closeText?: string;
  delay?: number;
};

const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];

const NavbarSealCorner = ({
  brand = "Villa Solenne",
  navItems = [],
  cta = { text: "Book a stay", href: "#contact" },
  menuText = "Menu",
  closeText = "Close",
  delay = 2.2,
}: NavbarSealCornerProps) => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const percent = useTransform(scrollYProgress, (v) => String(Math.round(v * 100)).padStart(2, "0"));
  useMenuDialog(open, panelRef, () => setOpen(false));

  return (
    <>
      <motion.nav
        aria-label="Main"
        initial={reduce || !delay ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        className="pointer-events-none fixed inset-0 z-50 text-white mix-blend-difference"
      >
        <div className="pointer-events-none absolute left-0 right-0 top-[clamp(1rem,3vh,1.75rem)] flex h-[2.75rem] items-center justify-between gap-3 px-4 md:left-[var(--gutter)] md:right-[var(--gutter)] md:px-0">
          <div className="pointer-events-auto flex h-[2.75rem] max-w-[55%] min-w-0 items-center gap-2 sm:gap-3 text-current md:max-w-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="size-5 sm:size-6 shrink-0">
              {[0, 45, 90, 135].map((deg) => (
                <path key={deg} d="M12 2 V22" transform={`rotate(${deg} 12 12)`} />
              ))}
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span className="font-[family-name:var(--font-heading)] text-xs sm:text-base lg:text-xl uppercase tracking-[0.08em] leading-none truncate whitespace-nowrap">
              {brand}
            </span>
          </div>

          <div className="pointer-events-auto flex h-[2.75rem] shrink-0 items-center gap-[0.75rem]">
            {cta && (
              <a
                href={cta.href}
                className="flex h-[2.75rem] w-[6.5rem] items-center justify-center whitespace-nowrap rounded-full border border-current px-3 text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] transition-opacity duration-300 hover:opacity-70 md:w-auto md:px-[1.25rem]"
              >
                <span className="hidden md:inline">{cta.text}</span>
                <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold md:hidden">
                  <svg className="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.063 2.876 1.21 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2a9.94 9.94 0 0 0-8.584 14.988L2 22l5.16-1.354A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.06-1.11l-.29-.172-3.017.791.805-2.943-.19-.302A7.956 7.956 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                  </svg>
                  <span>Réserver</span>
                </span>
              </a>
            )}
            {navItems.length > 0 && (
              <button
                type="button"
                aria-expanded={open}
                aria-label={open ? closeText : menuText}
                onClick={() => setOpen((v) => !v)}
                className="flex size-[2.75rem] flex-col items-center justify-center gap-[0.3rem] rounded-full border border-current lg:hidden"
              >
                <div aria-hidden="true" className="h-px w-[1rem] bg-current" />
                <div aria-hidden="true" className="h-px w-[1rem] bg-current" />
              </button>
            )}
          </div>
        </div>

        <div className="absolute left-[calc(var(--gutter)+2.25rem)] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[0.75rem] lg:flex">
          <div className="relative h-[8rem] w-px bg-current/25">
            <motion.div style={{ scaleY: scrollYProgress }} className="absolute inset-0 origin-top bg-current" />
          </div>
          <motion.p aria-hidden="true" className="text-[length:var(--text-label)] tabular-nums tracking-[0.1em]">{percent}</motion.p>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={menuText}
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0% round 0 0 50vw 50vw)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0% round 0 0 0vw 0vw)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0% round 0 0 50vw 50vw)" }}
            transition={{ duration: 0.8, ease: [0.75, 0, 0.25, 1] }}
            className="fixed inset-0 z-[70] flex flex-col bg-deep px-[var(--gutter)] pb-[var(--gutter)] pt-[clamp(1rem,3vh,1.75rem)] text-deep-foreground lg:hidden"
          >
            <div className="flex justify-end">
              <button type="button" onClick={() => setOpen(false)} aria-label={closeText} className="flex size-[2.75rem] items-center justify-center rounded-full border border-current">
                <div aria-hidden="true" className="relative size-[1rem]">
                  <div className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <div className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </div>
              </button>
            </div>
            <ul className="mt-[clamp(2rem,8vh,4rem)] flex flex-col items-center gap-[0.5rem] text-center">
              {navItems.map((item, i) => (
                <li key={`${i}-${item.href}`} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 + i * 0.06 }}
                    className="block font-[family-name:var(--font-heading)] text-[length:var(--text-h1)] uppercase leading-[0.9] tracking-[-0.02em] [overflow-wrap:anywhere]"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
            {cta && (
              <div className="mt-auto flex justify-center pt-[2rem]">
                <a href={cta.href} onClick={() => setOpen(false)} className="btn-secondary w-full">
                  <p className="btn-label">{cta.text}</p>
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarSealCorner;
