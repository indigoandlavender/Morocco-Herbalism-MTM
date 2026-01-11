import { getPlants } from "@/lib/plants";
import PlantIndexClient from "@/components/PlantIndexClient";

export const metadata = {
  title: "Plant Index",
  description:
    "Browse the Moroccan ethnobotanical reference by plant name, region, season, or use category.",
};

export default function PlantsPage() {
  const plants = getPlants();

  return (
    <div className="container">
      <div className="max-w-2xl">
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-serif mb-4">Plant Index</h1>
          <p className="text-muted">
            Browse by name, region, season, or traditional use category.
          </p>
        </section>

        <PlantIndexClient plants={plants} />
      </div>
    </div>
  );
}
