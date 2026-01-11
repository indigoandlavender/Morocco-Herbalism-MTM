export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="max-w-2xl space-y-8">
          {/* Purpose */}
          <div>
            <p className="section-label">Purpose</p>
            <p className="leading-relaxed">
              Nabat is an ethnobotanical reference documenting plants traditionally
              used in Morocco. It records cultural knowledge without making health
              claims. The project aims to preserve and share information about
              regional plant practices in a factual, accessible format.
            </p>
          </div>

          {/* Sources */}
          <div>
            <p className="section-label">Sources</p>
            <p className="leading-relaxed">
              Information is gathered from published ethnobotanical literature,
              regional documentation, and oral knowledge recorded in the field.
              AI tools are used to structure and organize content, not to generate
              botanical or cultural claims.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="section-label">Disclaimer</p>
            <p className="leading-relaxed">
              This site provides cultural and ethnobotanical information only. It
              is not medical advice. The content does not diagnose, treat, cure,
              or prevent any disease or condition. Traditional use does not imply
              safety or efficacy. Consult qualified healthcare practitioners for
              health concerns. Do not ingest, apply, or use any plant based on
              information found here without professional guidance.
            </p>
          </div>

          {/* Attribution */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm">
              Produced by the team behind{" "}
              <a
                href="https://slowmorocco.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slow Morocco
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
