"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Plant, REGION_LABELS } from "@/lib/types";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5kaWdvYW5kbGF2ZW5kZXIiLCJhIjoiY21kN3B0OTZvMGllNjJpcXY0MnZlZHVlciJ9.1-jV-Pze3d7HZseOAhmkCg";

interface PlantMapProps {
  plants: Plant[];
}

export default function PlantMap({ plants }: PlantMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-7.0926, 31.7917], // Morocco center
      zoom: 5.2,
      attributionControl: false,
    });

    map.current.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-right"
    );

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      setLoaded(true);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    if (!map.current || !loaded) return;

    // Add markers for plants with coordinates
    plants.forEach((plant) => {
      if (!plant.coordinates) return;

      const el = document.createElement("div");
      el.className = "plant-marker";
      el.style.width = "12px";
      el.style.height = "12px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "var(--accent, #4a5944)";
      el.style.border = "2px solid var(--background, #faf9f7)";
      el.style.cursor = "pointer";
      el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.2)";

      const popup = new mapboxgl.Popup({
        offset: 15,
        closeButton: false,
        maxWidth: "240px",
      }).setHTML(`
        <div style="font-family: var(--font-sans, system-ui); padding: 4px;">
          <a href="/plants/${plant.slug}" style="text-decoration: none; color: inherit;">
            <strong style="font-family: var(--font-serif, Georgia); font-size: 14px; display: block; margin-bottom: 4px;">
              ${plant.commonName}
            </strong>
            <span style="font-size: 12px; color: #78716c; font-style: italic;">
              ${plant.latinName}
            </span>
            <span style="font-size: 11px; display: block; margin-top: 6px; color: #78716c;">
              ${plant.region.map((r) => REGION_LABELS[r]).join(", ")}
            </span>
          </a>
        </div>
      `);

      new mapboxgl.Marker(el)
        .setLngLat([plant.coordinates.lng, plant.coordinates.lat])
        .setPopup(popup)
        .addTo(map.current!);
    });
  }, [plants, loaded]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="w-full rounded-sm border border-border"
        style={{ height: "500px" }}
      />
      <p className="text-xs text-muted mt-3">
        Markers indicate approximate regions where plants are traditionally found.
        Click a marker for details.
      </p>
    </div>
  );
}
