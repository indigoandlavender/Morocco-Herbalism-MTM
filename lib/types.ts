export interface Plant {
  id: string;
  slug: string;
  commonName: string;
  arabicName: string;
  amazighName?: string;
  latinName: string;
  region: Region[];
  season: Season[];
  useCategory: UseCategory[];
  traditionalUses: string;
  preparation: PreparationMethod[];
  cautions: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  imageUrl?: string;
}

export type Region =
  | "rif"
  | "atlas"
  | "anti-atlas"
  | "souss"
  | "draa"
  | "sahara"
  | "atlantic-coast"
  | "mediterranean"
  | "oriental"
  | "plains";

export type Season = "spring" | "summer" | "autumn" | "winter" | "year-round";

export type UseCategory =
  | "digestive"
  | "respiratory"
  | "skin"
  | "hair"
  | "oral"
  | "aromatic"
  | "culinary"
  | "ritual"
  | "general";

export type PreparationMethod =
  | "tea"
  | "infusion"
  | "decoction"
  | "fumigation"
  | "oil"
  | "poultice"
  | "powder"
  | "fresh"
  | "dried";

export const REGION_LABELS: Record<Region, string> = {
  rif: "Rif Mountains",
  atlas: "Atlas Mountains",
  "anti-atlas": "Anti-Atlas",
  souss: "Souss Valley",
  draa: "Draa Valley",
  sahara: "Sahara",
  "atlantic-coast": "Atlantic Coast",
  mediterranean: "Mediterranean Coast",
  oriental: "Oriental Region",
  plains: "Central Plains",
};

export const SEASON_LABELS: Record<Season, string> = {
  spring: "Spring",
  summer: "Summer",
  autumn: "Autumn",
  winter: "Winter",
  "year-round": "Year-round",
};

export const USE_CATEGORY_LABELS: Record<UseCategory, string> = {
  digestive: "Digestive",
  respiratory: "Respiratory",
  skin: "Skin",
  hair: "Hair",
  oral: "Oral care",
  aromatic: "Aromatic",
  culinary: "Culinary",
  ritual: "Ritual",
  general: "General",
};

export const PREPARATION_LABELS: Record<PreparationMethod, string> = {
  tea: "Tea",
  infusion: "Infusion",
  decoction: "Decoction",
  fumigation: "Fumigation",
  oil: "Oil",
  poultice: "Poultice",
  powder: "Powder",
  fresh: "Fresh",
  dried: "Dried",
};
