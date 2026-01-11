# Nabat — Moroccan Ethnobotanical Reference

A static reference site documenting plants traditionally used in Morocco. Ethnobotanical information presented factually, without health claims or wellness language.

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS
- **Data**: JSON files (migrateable to Google Sheets)
- **Deployment**: Vercel

## Project Structure

```
nabat/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Design system
│   └── plants/
│       ├── page.tsx         # Plant index
│       └── [slug]/page.tsx  # Individual plant pages
├── components/
│   ├── PlantIndex.tsx       # Filterable plant list
│   └── Footer.tsx           # Methodology & disclaimer
├── data/
│   └── plants.json          # Plant entries
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   ├── plants.ts            # Data utilities
│   └── sheets.ts            # Google Sheets integration
└── public/
    └── icon.svg             # Favicon
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

Static files are exported to `/out` directory.

## Deployment (Vercel)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy (no configuration needed)

For Google Sheets CMS:
- Add `GOOGLE_SHEET_ID` and `GOOGLE_API_KEY` environment variables

---

## Google Sheets Schema

Create a Google Sheet with a tab named "Plants" and the following columns:

| Column | Header | Description | Example |
|--------|--------|-------------|---------|
| A | Plant_ID | Unique identifier | `zaatar` |
| B | Common_Name | English name | `Thyme` |
| C | Arabic_Name | Arabic script | `زعتر` |
| D | Amazigh_Name | Tifinagh/Latin (optional) | `Azukni` |
| E | Latin_Name | Scientific binomial | `Thymus vulgaris` |
| F | Region | Comma-separated | `atlas, rif, anti-atlas` |
| G | Season | Comma-separated | `spring, summer` |
| H | Use_Category | Comma-separated | `digestive, respiratory` |
| I | Traditional_Uses | Descriptive text | Full paragraph |
| J | Preparation | Comma-separated | `tea, infusion, dried` |
| K | Cautions | Warnings | Full paragraph |
| L | Map_Coordinates | Optional lat,lng | `31.7917, -7.0926` |

### Valid Values

**Region**: `rif`, `atlas`, `anti-atlas`, `souss`, `draa`, `sahara`, `atlantic-coast`, `mediterranean`, `oriental`, `plains`

**Season**: `spring`, `summer`, `autumn`, `winter`, `year-round`

**Use_Category**: `digestive`, `respiratory`, `skin`, `hair`, `oral`, `aromatic`, `culinary`, `ritual`, `general`

**Preparation**: `tea`, `infusion`, `decoction`, `fumigation`, `oil`, `poultice`, `powder`, `fresh`, `dried`

### Example Rows

| Plant_ID | Common_Name | Arabic_Name | Amazigh_Name | Latin_Name | Region | Season | Use_Category | Traditional_Uses | Preparation | Cautions | Map_Coordinates |
|----------|-------------|-------------|--------------|------------|--------|--------|--------------|------------------|-------------|----------|-----------------|
| zaatar | Thyme | زعتر | Azukni | Thymus vulgaris | atlas, rif | spring, summer | digestive, respiratory | In Moroccan households, thyme is commonly prepared as an infusion for digestive discomfort... | tea, infusion, dried | Should not be used in large quantities during pregnancy... | 31.7917, -7.0926 |
| naanaa | Spearmint | نعناع | Liqama | Mentha spicata | atlas, souss, plains | year-round | digestive, culinary | Spearmint is ubiquitous in Moroccan daily life... | tea, infusion, fresh | Generally considered safe in culinary amounts... | 31.6295, -7.9811 |

---

## Content Guidelines

- Describe, don't prescribe
- No "benefits" language
- No healing claims
- Include cautions for every plant
- Factual, neutral tone
- Cultural context over wellness framing

---

## Attribution

Produced by the team behind [Slow Morocco](https://slowmorocco.com)
