"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Plant,
  Region,
  Season,
  UseCategory,
  PreparationMethod,
  REGION_LABELS,
  SEASON_LABELS,
  USE_CATEGORY_LABELS,
  PREPARATION_LABELS,
} from "@/lib/types";

interface PlantIndexProps {
  plants: Plant[];
  initialSearch?: string;
  initialCategory?: UseCategory | "";
}

export default function PlantIndex({
  plants,
  initialSearch = "",
  initialCategory = "",
}: PlantIndexProps) {
  const [search, setSearch] = useState(initialSearch);
  const [region, setRegion] = useState<Region | "">("");
  const [season, setSeason] = useState<Season | "">("");
  const [category, setCategory] = useState<UseCategory | "">(initialCategory);
  const [preparation, setPreparation] = useState<PreparationMethod | "">("");
  const [showAdvanced, setShowAdvanced] = useState(!!initialCategory);

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

  const preparations = useMemo(() => {
    const set = new Set<PreparationMethod>();
    plants.forEach((p) => p.preparation.forEach((pr) => set.add(pr)));
    return Array.from(set).sort();
  }, [plants]);

  // Filter plants
  const filtered = useMemo(() => {
    return plants.filter((plant) => {
      if (region && !plant.region.includes(region)) return false;
      if (season && !plant.season.includes(season)) return false;
      if (category && !plant.useCategory.includes(category)) return false;
      if (preparation && !plant.preparation.includes(preparation)) return false;
      if (search) {
        const s = search.toLowerCase();
        const matches =
          plant.commonName.toLowerCase().includes(s) ||
          plant.arabicName.includes(search) ||
          plant.latinName.toLowerCase().includes(s) ||
          (plant.amazighName && plant.amazighName.toLowerCase().includes(s)) ||
          plant.traditionalUses.toLowerCase().includes(s) ||
          plant.cautions.toLowerCase().includes(s);
        if (!matches) return false;
      }
      return true;
    });
  }, [plants, region, season, category, preparation, search]);

  const hasFilters = region || season || category || preparation || search;

  const clearFilters = () => {
    setSearch("");
    setRegion("");
    setSeason("");
    setCategory("");
    setPreparation("");
  };

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, use, or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search plants"
        />
      </div>

      {/* Advanced Search Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          {showAdvanced ? "− Hide filters" : "+ Advanced search"}
        </button>
      </div>

      {/* Filters */}
      {showAdvanced && (
        <div className="mb-8 p-4 border border-border bg-surface">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="section-label block mb-2">Region</label>
              <select
                className="filter-select w-full"
                value={region}
                onChange={(e) => setRegion(e.target.value as Region | "")}
              >
                <option value="">All regions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {REGION_LABELS[r]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="section-label block mb-2">Season</label>
              <select
                className="filter-select w-full"
                value={season}
                onChange={(e) => setSeason(e.target.value as Season | "")}
              >
                <option value="">All seasons</option>
                {seasons.map((s) => (
                  <option key={s} value={s}>
                    {SEASON_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="section-label block mb-2">Use</label>
              <select
                className="filter-select w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value as UseCategory | "")}
              >
                <option value="">All uses</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {USE_CATEGORY_LABELS[c]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="section-label block mb-2">Preparation</label>
              <select
                className="filter-select w-full"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value as PreparationMethod | "")}
              >
                <option value="">All forms</option>
                {preparations.map((p) => (
                  <option key={p} value={p}>
                    {PREPARATION_LABELS[p]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted hover:text-foreground underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

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
