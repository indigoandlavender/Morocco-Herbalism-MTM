import type { Metadata } from "next";
import { getPlants } from "@/lib/plants";
import PlantMap from "@/components/PlantMap";

export const metadata: Metadata = {
  title: "Plant Distribution Map",
  description:
    "Explore the geographic distribution of plants traditionally used in Morocco. An interactive map showing where different herbs and botanicals are found across regions.",
};

export default function MapPage() {
  const plants = getPlants();
  const plantsWithCoordinates = plants.filter((p) => p.coordinates);

  return (
    <div className="container">
      <h1 className="font-serif text-3xl md:text-4xl mb-4">
        Plant Distribution
      </h1>
      <p className="text-muted mb-8 max-w-2xl">
        An overview of where plants in the Nabat collection are traditionally
        found across Morocco. Regions include the Atlas and Rif mountains,
        coastal areas, valleys, and the Sahara.
      </p>

      <PlantMap plants={plantsWithCoordinates} />

      <div className="mt-12">
        <h2 className="section-label mb-4">Regions Represented</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="font-serif">Atlas Mountains</p>
            <p className="text-sm text-muted">High altitude, wild herbs</p>
          </div>
          <div>
            <p className="font-serif">Rif Mountains</p>
            <p className="text-sm text-muted">Mediterranean climate</p>
          </div>
          <div>
            <p className="font-serif">Souss Valley</p>
            <p className="text-sm text-muted">Argan territory</p>
          </div>
          <div>
            <p className="font-serif">Draa Valley</p>
            <p className="text-sm text-muted">Oasis plants, date palms</p>
          </div>
          <div>
            <p className="font-serif">Atlantic Coast</p>
            <p className="text-sm text-muted">Maritime influences</p>
          </div>
          <div>
            <p className="font-serif">Anti-Atlas</p>
            <p className="text-sm text-muted">Arid highlands</p>
          </div>
          <div>
            <p className="font-serif">Central Plains</p>
            <p className="text-sm text-muted">Agricultural regions</p>
          </div>
          <div>
            <p className="font-serif">Sahara</p>
            <p className="text-sm text-muted">Desert adaptations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
