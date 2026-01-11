import Link from "next/link";
import { getPlants } from "@/lib/plants";

export default function Home() {
  const plants = getPlants();

  return (
    <div className="container">
      <div className="max-w-2xl">
        {/* Introduction */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-serif mb-8">
            Moroccan Ethnobotanical Reference
          </h1>
          <div className="prose">
            <p>
              Nabat documents plants traditionally used across Morocco. It records
              common names, regional presence, seasonal availability, preparation
              methods, and cultural context.
            </p>
            <p>
              This is an ethnobotanical reference, not a guide to remedies. The
              information here describes traditional knowledge and cultural
              practices. It does not constitute medical advice and should not be
              used to diagnose, treat, or prevent any condition.
            </p>
            <p>
              The scope is Moroccan: plants that grow in or are traditionally used
              within the country, from the Rif to the Sahara. Where applicable,
              Arabic and Amazigh names are recorded alongside Latin binomials.
            </p>
            <p>
              Each entry includes cautions. Traditional use does not imply safety.
              Consult qualified practitioners for health concerns.
            </p>
          </div>
        </section>

        {/* Browse */}
        <section>
          <p className="section-label">Browse</p>
          <Link
            href="/plants"
            className="block py-4 border-t border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="font-serif text-xl">Plant Index</span>
            <span className="block text-sm text-muted mt-1">
              {plants.length} entries
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
}
