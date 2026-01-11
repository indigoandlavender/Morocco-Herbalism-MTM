import { Plant, Region, Season, UseCategory, PreparationMethod } from "./types";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;
const RANGE = "Plants!A2:L";

interface SheetRow {
  Plant_ID: string;
  Common_Name: string;
  Arabic_Name: string;
  Amazigh_Name: string;
  Latin_Name: string;
  Region: string;
  Season: string;
  Use_Category: string;
  Traditional_Uses: string;
  Preparation: string;
  Cautions: string;
  Map_Coordinates: string;
}

function parseArray<T>(value: string): T[] {
  if (!value) return [];
  return value.split(",").map((s) => s.trim().toLowerCase()) as T[];
}

function parseCoordinates(value: string): { lat: number; lng: number } | undefined {
  if (!value) return undefined;
  const [lat, lng] = value.split(",").map((s) => parseFloat(s.trim()));
  if (isNaN(lat) || isNaN(lng)) return undefined;
  return { lat, lng };
}

function rowToPlant(row: string[]): Plant {
  return {
    id: row[0] || "",
    slug: (row[0] || "").toLowerCase().replace(/\s+/g, "-"),
    commonName: row[1] || "",
    arabicName: row[2] || "",
    amazighName: row[3] || undefined,
    latinName: row[4] || "",
    region: parseArray<Region>(row[5]),
    season: parseArray<Season>(row[6]),
    useCategory: parseArray<UseCategory>(row[7]),
    traditionalUses: row[8] || "",
    preparation: parseArray<PreparationMethod>(row[9]),
    cautions: row[10] || "",
    coordinates: parseCoordinates(row[11]),
  };
}

export async function fetchPlantsFromSheets(): Promise<Plant[]> {
  if (!SHEET_ID || !API_KEY) {
    console.warn("Google Sheets credentials not configured, using local data");
    return [];
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      throw new Error(`Sheets API error: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values || [];
    return rows.map(rowToPlant);
  } catch (error) {
    console.error("Failed to fetch from Google Sheets:", error);
    return [];
  }
}

/*
GOOGLE SHEETS SCHEMA
====================

Sheet name: "Plants"

Column headers (Row 1):
A: Plant_ID          - Unique identifier (e.g., "zaatar", "naanaa")
B: Common_Name       - English common name
C: Arabic_Name       - Arabic script name
D: Amazigh_Name      - Tifinagh/Latin Amazigh name (optional)
E: Latin_Name        - Scientific binomial name
F: Region            - Comma-separated: rif, atlas, anti-atlas, souss, draa, sahara, atlantic-coast, mediterranean, oriental, plains
G: Season            - Comma-separated: spring, summer, autumn, winter, year-round
H: Use_Category      - Comma-separated: digestive, respiratory, skin, hair, oral, aromatic, culinary, ritual, general
I: Traditional_Uses  - Descriptive text (factual, non-prescriptive)
J: Preparation       - Comma-separated: tea, infusion, decoction, fumigation, oil, poultice, powder, fresh, dried
K: Cautions          - Important limits and warnings
L: Map_Coordinates   - Optional: "lat, lng" format (e.g., "31.7917, -7.0926")

Example rows:
| Plant_ID | Common_Name | Arabic_Name | Amazigh_Name | Latin_Name | Region | Season | Use_Category | Traditional_Uses | Preparation | Cautions | Map_Coordinates |
|----------|-------------|-------------|--------------|------------|--------|--------|--------------|------------------|-------------|----------|-----------------|
| zaatar | Thyme | زعتر | Azukni | Thymus vulgaris | atlas, rif | spring, summer | digestive, respiratory | In Moroccan households... | tea, infusion, dried | Should not be used... | 31.7917, -7.0926 |
| naanaa | Spearmint | نعناع | Liqama | Mentha spicata | atlas, souss, plains | year-round | digestive, culinary | Spearmint is ubiquitous... | tea, infusion, fresh | Generally safe... | 31.6295, -7.9811 |
*/
