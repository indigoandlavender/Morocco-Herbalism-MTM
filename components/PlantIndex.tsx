"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Plant,
  Region,
  Season,
  UseCategory,
  REGION_LABELS,
  SEASON_LABELS,
  USE_CATEGORY_LABELS,
} from "@/lib/types";

interface PlantIndexProps {
  plants: Plant[];
}

export default function PlantIndex({ plants }: PlantIndexProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region | "">("");
  const [season, setSeason] = useState<Season | "">("");
  const [category, setCategory] = useState<UseCategory | "">("");

  // Get unique filter values from data
  const regions = useMemo(() => {
    const set = new Set<Region>();
    plants.forEach((p) => p.region.forEach((r) => set.add(r)));
    return Array.from(set).sort();
  }, [plants]);

  const seasons = useMemo(() => {
    const set = new Set<Season>();
    plants.forEach((p) => p.season.forEach((s) => set.add(s)));
    return Array.from(set);
  }, [plants]);

  const categories = useMemo(() => {
    const set = new Set<UseCategory>();
    plants.forEach((p) => p.useCategory.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [plants]);

  // Filter plants
  const filtered = useMemo(() => {
    return plants.filter((plant) => {
      // Region filter
      if (region && !plant.region.includes(region)) return false;
      // Season filter
      if (season && !plant.season.includes(season)) return false;
      // Category filter
      if (category && !plant.useCategory.includes(category)) return false;
      // Search filter
      if (search) {
        const s = search.toLowerCase();
        const matches =
          plant.commonName.toLowerCase().includes(s) ||
          plant.arabicName.includes(search) ||
          plant.latinName.toLowerCase().includes(s) ||
          (plant.amazighName && plant.amazighName.toLowerCase().includes(s));
        if (!matches) return false;
      }
      return true;
    });
  }, [plants, region, season, category, search]);

  const hasFilters = region || season || category || search;

  return (
    <div>
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search plants"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="filter-select"
          value={region}
          onChange={(e) => setRegion(e.target.value as Region | "")}
          aria-label="Filter by region"
        >
          <option value="">All regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {REGION_LABELS[r]}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={season}
          onChange={(e) => setSeason(e.target.value as Season | "")}
          aria-label="Filter by season"
        >
          <option value="">All seasons</option>
          {seasons.map((s) => (
            <option key={s} value={s}>
              {SEASON_LABELS[s]}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value as UseCategory | "")}
          aria-label="Filter by use"
        >
          <option value="">All uses</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {USE_CATEGORY_LABELS[c]}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="section-label mb-4">
        {hasFilters
          ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`
          : `${plants.length} plants`}
      </p>

      {/* Plant list */}
      {filtered.length > 0 ? (
        <div>
          {filtered.map((plant) => (
            <Link
              key={plant.id}
              href={`/plants/${plant.slug}`}
              className="plant-card"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h2 className="font-serif text-lg">{plant.commonName}</h2>
                  <p className="text-sm text-muted italic mt-0.5">
                    {plant.latinName}
                  </p>
                </div>
                <span className="text-lg rtl text-muted">{plant.arabicName}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {plant.useCategory.slice(0, 3).map((cat) => (
                  <span key={cat} className="tag">
                    {USE_CATEGORY_LABELS[cat]}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-muted py-8">No plants match your search.</p>
      )}
    </div>
  );
}
