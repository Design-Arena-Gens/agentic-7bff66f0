"use client";

import { useState } from "react";

const categories = [
  "All",
  "DALL·E",
  "Midjourney",
  "ChatGPT",
  "GPT-4",
  "Stable Diffusion",
  "Leonardo AI",
];

export default function CategoryFilter() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              selected === category
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
