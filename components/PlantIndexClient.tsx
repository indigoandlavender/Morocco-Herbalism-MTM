"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PlantIndex from "./PlantIndex";
import { Plant, UseCategory } from "@/lib/types";

interface PlantIndexClientProps {
  plants: Plant[];
}

function PlantIndexInner({ plants }: PlantIndexClientProps) {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("q") || "";
  const initialCategory = (searchParams.get("category") as UseCategory) || "";

  return (
    <PlantIndex
      plants={plants}
      initialSearch={initialSearch}
      initialCategory={initialCategory}
    />
  );
}

export default function PlantIndexClient({ plants }: PlantIndexClientProps) {
  return (
    <Suspense fallback={<div className="text-muted">Loading...</div>}>
      <PlantIndexInner plants={plants} />
    </Suspense>
  );
}
