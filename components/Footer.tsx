"use client";

import { useEffect, useState } from "react";

interface LegalContent {
  privacy?: string;
  terms?: string;
  copyright?: string;
}

export default function Footer() {
  const [legal, setLegal] = useState<LegalContent>({});
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchLegal() {
      try {
        const res = await fetch("https://nexus.slowmorocco.com/api/legal?brand=nabat");
        if (res.ok) {
          const data = await res.json();
          setLegal(data);
        }
      } catch {
        // Fallback to defaults if Nexus unavailable
      }
    }
    fetchLegal();
  }, []);

  return (
    <footer className="footer-ombre">
      {/* Level 1: Brand-specific content */}
      <div className="footer-level-1">
        <div className="container">
          <div className="max-w-2xl space-y-6">
            {/* Purpose */}
            <div>
              <p className="section-label">Purpose</p>
              <p className="text-sm leading-relaxed opacity-80">
                Nabat is an ethnobotanical reference documenting plants traditionally
                used in Morocco. It records cultural knowledge without making health
                claims. The project aims to preserve and share information about
                regional plant practices in a factual, accessible format.
              </p>
            </div>

            {/* Sources */}
            <div>
              <p className="section-label">Sources</p>
              <p className="text-sm leading-relaxed opacity-80">
                Information is gathered from published ethnobotanical literature,
                regional documentation, and oral knowledge recorded in the field.
                AI tools are used to structure and organize content, not to generate
                botanical or cultural claims.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <p className="section-label">Disclaimer</p>
              <p className="text-sm leading-relaxed opacity-80">
                This site provides cultural and ethnobotanical information only. It
                is not medical advice. The content does not diagnose, treat, cure,
                or prevent any disease or condition. Traditional use does not imply
                safety or efficacy. Consult qualified healthcare practitioners for
                health concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Level 2: Legal content + Language switcher */}
      <div className="footer-level-2">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="/privacy" className="opacity-60 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="/terms" className="opacity-60 hover:opacity-100 transition-opacity">
                Terms of Use
              </a>
              <span className="opacity-50">
                {legal.copyright || `© ${currentYear} Nabat. All rights reserved.`}
              </span>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="/" className="opacity-100" aria-current="page">EN</a>
              <span className="opacity-30">|</span>
              <a href="/fr" className="opacity-50 hover:opacity-100 transition-opacity">FR</a>
              <span className="opacity-30">|</span>
              <a href="/es" className="opacity-50 hover:opacity-100 transition-opacity">ES</a>
            </div>
          </div>
        </div>
      </div>

      {/* Level 3: Powered by Slow Morocco */}
      <div className="footer-level-3">
        <div className="container">
          <p className="text-sm opacity-50">
            Powered by{" "}
            <a
              href="https://slowmorocco.com"
              className="hover:opacity-100 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slow Morocco
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
