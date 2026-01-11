import plantsData from "@/data/plants.json";
import { Plant, Region, Season, UseCategory } from "./types";

export function getPlants(): Plant[] {
  return plantsData as Plant[];
}

export function getPlantBySlug(slug: string): Plant | undefined {
  return getPlants().find((p) => p.slug === slug);
}

export function getPlantsByRegion(region: Region): Plant[] {
  return getPlants().filter((p) => p.region.includes(region));
}

export function getPlantsBySeason(season: Season): Plant[] {
  return getPlants().filter((p) => p.season.includes(season));
}

export function getPlantsByCategory(category: UseCategory): Plant[] {
  return getPlants().filter((p) => p.useCategory.includes(category));
}

export function getAllRegions(): Region[] {
  const regions = new Set<Region>();
  getPlants().forEach((p) => p.region.forEach((r) => regions.add(r)));
  return Array.from(regions).sort();
}

export function getAllSeasons(): Season[] {
  const seasons = new Set<Season>();
  getPlants().forEach((p) => p.season.forEach((s) => seasons.add(s)));
  return Array.from(seasons);
}

export function getAllCategories(): UseCategory[] {
  const categories = new Set<UseCategory>();
  getPlants().forEach((p) => p.useCategory.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}

export function filterPlants(
  plants: Plant[],
  filters: {
    region?: Region;
    season?: Season;
    category?: UseCategory;
    search?: string;
  }
): Plant[] {
  return plants.filter((plant) => {
    if (filters.region && !plant.region.includes(filters.region)) {
      return false;
    }
    if (filters.season && !plant.season.includes(filters.season)) {
      return false;
    }
    if (filters.category && !plant.useCategory.includes(filters.category)) {
      return false;
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      return (
        plant.commonName.toLowerCase().includes(search) ||
        plant.arabicName.includes(filters.search) ||
        plant.latinName.toLowerCase().includes(search) ||
        (plant.amazighName && plant.amazighName.toLowerCase().includes(search))
      );
    }
    return true;
  });
}
