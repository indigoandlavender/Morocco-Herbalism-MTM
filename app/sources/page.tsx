import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources & Bibliography",
  description:
    "Academic sources, ethnobotanical literature, and references used to compile the Nabat plant database. Scholarly works on Moroccan traditional plant knowledge.",
};

interface Source {
  author: string;
  year: string;
  title: string;
  publication?: string;
  type: "book" | "journal" | "thesis" | "report";
}

const sources: Source[] = [
  {
    author: "Bellakhdar, J.",
    year: "1997",
    title: "La Pharmacopée Marocaine Traditionnelle: Médecine Arabe Ancienne et Savoirs Populaires",
    publication: "Ibis Press, Paris",
    type: "book",
  },
  {
    author: "Bellakhdar, J.",
    year: "2006",
    title: "Plantes Médicinales au Maghreb et Soins de Base: Précis de Phytothérapie Moderne",
    publication: "Le Fennec, Casablanca",
    type: "book",
  },
  {
    author: "Boulos, L.",
    year: "1983",
    title: "Medicinal Plants of North Africa",
    publication: "Reference Publications, Algonac, Michigan",
    type: "book",
  },
  {
    author: "Sijelmassi, A.",
    year: "1993",
    title: "Les Plantes Médicinales du Maroc",
    publication: "Le Fennec, Casablanca",
    type: "book",
  },
  {
    author: "Fennane, M., Ibn Tattou, M., Mathez, J., Ouyahya, A., & El Oualidi, J.",
    year: "1999–2014",
    title: "Flore Pratique du Maroc (Volumes 1–3)",
    publication: "Institut Scientifique, Rabat",
    type: "book",
  },
  {
    author: "Benabid, A.",
    year: "2000",
    title: "Flore et Écosystèmes du Maroc: Évaluation et Préservation de la Biodiversité",
    publication: "Ibis Press, Paris",
    type: "book",
  },
  {
    author: "Tanji, A.",
    year: "2005",
    title: "Flore Spontanée du Maroc: Potentialités Pastorales et Aromatiques",
    publication: "INRA, Rabat",
    type: "book",
  },
  {
    author: "Hmamouchi, M.",
    year: "1999",
    title: "Les Plantes Médicinales et Aromatiques Marocaines",
    publication: "Imprimerie de Fédala, Mohammedia",
    type: "book",
  },
  {
    author: "El-Hilaly, J., Hmammouchi, M., & Lyoussi, B.",
    year: "2003",
    title: "Ethnobotanical studies and economic evaluation of medicinal plants in Taounate province (Northern Morocco)",
    publication: "Journal of Ethnopharmacology, 86(2–3), 149–158",
    type: "journal",
  },
  {
    author: "Eddouks, M., Maghrani, M., Lemhadri, A., Ouahidi, M. L., & Jouad, H.",
    year: "2002",
    title: "Ethnopharmacological survey of medicinal plants used for the treatment of diabetes mellitus, hypertension and cardiac diseases in the south-east region of Morocco",
    publication: "Journal of Ethnopharmacology, 82(2–3), 97–103",
    type: "journal",
  },
  {
    author: "Mehdioui, R., & Kahouadji, A.",
    year: "2007",
    title: "Étude ethnobotanique auprès de la population riveraine de la forêt d'Amsittène",
    publication: "Bulletin de l'Institut Scientifique, Rabat, 29, 11–20",
    type: "journal",
  },
  {
    author: "Ziyyat, A., Legssyer, A., Mekhfi, H., Dassouli, A., Serhrouchni, M., & Benjelloun, W.",
    year: "1997",
    title: "Phytotherapy of hypertension and diabetes in oriental Morocco",
    publication: "Journal of Ethnopharmacology, 58(1), 45–54",
    type: "journal",
  },
  {
    author: "Salhi, S., Fadli, M., Zidane, L., & Douira, A.",
    year: "2010",
    title: "Études floristique et ethnobotanique des plantes médicinales de la ville de Kénitra (Maroc)",
    publication: "Lazaroa, 31, 133–146",
    type: "journal",
  },
  {
    author: "Benkhnigue, O., Zidane, L., Fadli, M., Elyacoubi, H., Rochdi, A., & Douira, A.",
    year: "2010",
    title: "Étude ethnobotanique des plantes médicinales dans la région de Mechraâ Bel Ksiri (Région du Gharb du Maroc)",
    publication: "Acta Botanica Barcinonensia, 53, 191–216",
    type: "journal",
  },
  {
    author: "Jouad, H., Haloui, M., Rhiouani, H., El Hilaly, J., & Eddouks, M.",
    year: "2001",
    title: "Ethnobotanical survey of medicinal plants used for the treatment of diabetes, cardiac and renal diseases in the North centre region of Morocco",
    publication: "Journal of Ethnopharmacology, 77(2–3), 175–182",
    type: "journal",
  },
  {
    author: "Merzouki, A., Ed-derfoufi, F., & Molero Mesa, J.",
    year: "2000",
    title: "Contribution to the knowledge of Rifian traditional medicine. II: Folk medicine in Ksar Lakbir district (NW Morocco)",
    publication: "Fitoterapia, 71(3), 278–307",
    type: "journal",
  },
  {
    author: "Lagnaoui, A.",
    year: "2012",
    title: "Étude Ethnobotanique des Plantes Médicinales et Aromatiques du Rif (Nord du Maroc)",
    publication: "Université Abdelmalek Essaâdi, Tétouan",
    type: "thesis",
  },
  {
    author: "Jahandiez, É., & Maire, R.",
    year: "1931–1941",
    title: "Catalogue des Plantes du Maroc (Volumes 1–3)",
    publication: "Imprimerie Minerva, Alger",
    type: "book",
  },
  {
    author: "Charco, J.",
    year: "2001",
    title: "Guía de los Árboles y Arbustos del Norte de África",
    publication: "Agencia Española de Cooperación Internacional, Madrid",
    type: "book",
  },
  {
    author: "Lev, E., & Amar, Z.",
    year: "2008",
    title: "Practical Materia Medica of the Medieval Eastern Mediterranean According to the Cairo Genizah",
    publication: "Brill, Leiden",
    type: "book",
  },
];

export default function SourcesPage() {
  const books = sources.filter((s) => s.type === "book");
  const journals = sources.filter((s) => s.type === "journal");
  const theses = sources.filter((s) => s.type === "thesis");

  return (
    <div className="container">
      <h1 className="font-serif text-3xl md:text-4xl mb-4">
        Sources & Bibliography
      </h1>
      <p className="text-muted mb-10 max-w-2xl">
        The information in Nabat draws from published ethnobotanical research,
        regional flora studies, and academic surveys of traditional plant use in
        Morocco. The following works inform the content of this reference.
      </p>

      <div className="space-y-12">
        {/* Books Section */}
        <section>
          <h2 className="section-label mb-4">Books & Monographs</h2>
          <div className="space-y-4">
            {books.map((source, i) => (
              <div key={i} className="border-b border-border pb-4">
                <p className="text-sm">
                  <span className="font-medium">{source.author}</span> (
                  {source.year}).{" "}
                  <em className="font-serif">{source.title}</em>.{" "}
                  {source.publication}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Journals Section */}
        <section>
          <h2 className="section-label mb-4">Journal Articles</h2>
          <div className="space-y-4">
            {journals.map((source, i) => (
              <div key={i} className="border-b border-border pb-4">
                <p className="text-sm">
                  <span className="font-medium">{source.author}</span> (
                  {source.year}).{" "}
                  <span className="font-serif">{source.title}</span>.{" "}
                  <em>{source.publication}</em>.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Theses Section */}
        {theses.length > 0 && (
          <section>
            <h2 className="section-label mb-4">Theses & Dissertations</h2>
            <div className="space-y-4">
              {theses.map((source, i) => (
                <div key={i} className="border-b border-border pb-4">
                  <p className="text-sm">
                    <span className="font-medium">{source.author}</span> (
                    {source.year}).{" "}
                    <em className="font-serif">{source.title}</em>.{" "}
                    {source.publication}.
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Methodology Note */}
        <section className="mt-12 pt-8 border-t border-border">
          <h2 className="section-label mb-4">Methodology Note</h2>
          <div className="prose max-w-2xl">
            <p className="text-sm text-muted leading-relaxed">
              Plant entries are compiled from the sources above, with regional
              variation noted where documented. Where oral knowledge supplements
              published sources, this is indicated. AI tools (Claude) are used
              to structure and format content, not to generate botanical claims.
              All entries are reviewed for accuracy against primary sources.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-4">
              This bibliography is not exhaustive. Additional sources are
              consulted for specific plants and regions. The focus is on works
              that document traditional Moroccan plant use with scholarly rigor.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
