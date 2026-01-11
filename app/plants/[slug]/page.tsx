import { notFound } from "next/navigation";
import Link from "next/link";
import { getPlants, getPlantBySlug } from "@/lib/plants";
import {
  REGION_LABELS,
  SEASON_LABELS,
  USE_CATEGORY_LABELS,
  PREPARATION_LABELS,
} from "@/lib/types";

interface PlantPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const plants = getPlants();
  return plants.map((plant) => ({ slug: plant.slug }));
}

export async function generateMetadata({ params }: PlantPageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) return {};

  return {
    title: `${plant.commonName} (${plant.latinName})`,
    description: `Ethnobotanical reference for ${plant.commonName} (${plant.arabicName}). Traditional uses, preparation methods, and regional distribution in Morocco.`,
  };
}

export default async function PlantPage({ params }: PlantPageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    notFound();
  }

  return (
    <div className="container">
      <div className="max-w-2xl">
        {/* Back link */}
        <Link
          href="/plants"
          className="inline-block text-sm text-muted hover:text-foreground mb-8"
        >
          ← Plant Index
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-serif mb-3">
            {plant.commonName}
          </h1>
          <p className="text-lg text-muted italic">{plant.latinName}</p>
        </header>

        {/* Names */}
        <div className="plant-meta">
          <div className="plant-meta-item">
            <p className="plant-meta-label">Arabic</p>
            <p className="text-xl rtl">{plant.arabicName}</p>
          </div>
          {plant.amazighName && (
            <div className="plant-meta-item">
              <p className="plant-meta-label">Amazigh</p>
              <p>{plant.amazighName}</p>
            </div>
          )}
          <div className="plant-meta-item">
            <p className="plant-meta-label">Regions</p>
            <p>{plant.region.map((r) => REGION_LABELS[r]).join(", ")}</p>
          </div>
          <div className="plant-meta-item">
            <p className="plant-meta-label">Season</p>
            <p>{plant.season.map((s) => SEASON_LABELS[s]).join(", ")}</p>
          </div>
        </div>

        {/* Use categories */}
        <section className="mb-8">
          <p className="section-label">Use Categories</p>
          <div className="flex flex-wrap gap-2">
            {plant.useCategory.map((cat) => (
              <span key={cat} className="tag">
                {USE_CATEGORY_LABELS[cat]}
              </span>
            ))}
          </div>
        </section>

        {/* Traditional uses */}
        <section className="mb-8">
          <p className="section-label">Traditional Uses</p>
          <div className="prose">
            <p>{plant.traditionalUses}</p>
          </div>
        </section>

        {/* Preparation */}
        <section className="mb-8">
          <p className="section-label">Preparation Methods</p>
          <div className="flex flex-wrap gap-2">
            {plant.preparation.map((prep) => (
              <span key={prep} className="tag">
                {PREPARATION_LABELS[prep]}
              </span>
            ))}
          </div>
        </section>

        {/* Cautions */}
        <div className="caution-box">
          <p className="caution-box-title">Limits & Cautions</p>
          <p className="text-sm leading-relaxed">{plant.cautions}</p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted mt-10 pt-6 border-t border-border">
          This information describes traditional cultural practices. It is not
          medical advice. Do not use this information to diagnose, treat, or
          prevent any condition. Consult qualified practitioners for health
          concerns.
        </p>
      </div>
    </div>
  );
}
