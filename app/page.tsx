"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/plants?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/plants");
    }
  };

  return (
    <div className="container">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        {/* Logo / Title */}
        <h1 className="text-5xl md:text-7xl font-serif mb-3 tracking-tight">
          Nabat
        </h1>
        <p className="text-muted mb-10">
          Moroccan Ethnobotanical Reference
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="w-full max-w-xl mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants by name, use, or region..."
            className="search-input text-center text-lg"
            autoFocus
          />
        </form>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <Link href="/plants" className="tag hover:opacity-70 transition-opacity">
            All Plants
          </Link>
          <Link href="/plants?category=culinary" className="tag hover:opacity-70 transition-opacity">
            Culinary
          </Link>
          <Link href="/plants?category=aromatic" className="tag hover:opacity-70 transition-opacity">
            Aromatic
          </Link>
          <Link href="/plants?category=digestive" className="tag hover:opacity-70 transition-opacity">
            Digestive
          </Link>
          <Link href="/plants?category=skin" className="tag hover:opacity-70 transition-opacity">
            Skin & Hair
          </Link>
          <Link href="/map" className="tag hover:opacity-70 transition-opacity">
            Map
          </Link>
        </div>

        {/* Subtle disclaimer */}
        <p className="text-xs text-muted max-w-md opacity-60">
          Ethnobotanical information only. Not medical advice.
        </p>
      </div>
    </div>
  );
}
