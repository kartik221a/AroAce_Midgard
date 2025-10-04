// src/pages/admin.jsx
"use client";
import { useState } from "react";
import IntroCard from  "../components/IntroCard";
import SearchFilter from "../components/SearchFilter";
import adminData from "../data/adminIntroduction.json";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function AdminPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  // Get unique countries and genders from JSON dynamically
  const countries = Array.from(
    new Set(
      Object.values(adminData)
        .map((i) => i.aboutMe?.country)
        .filter(Boolean)
    )
  );

  const genders = Array.from(
    new Set(
      Object.values(adminData)
        .map((i) => i.aboutMe?.gender)
        .filter(Boolean)
    )
  );

  // Filter data based on search, country, and gender
  const filtered = Object.entries(adminData).filter(([id, intro]) => {
    const matchesSearch = intro.aboutMe?.name
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchesCountry = country ? intro.aboutMe?.country === country : true;
    const matchesGender = gender ? intro.aboutMe?.gender === gender : true;

    return matchesSearch && matchesCountry && matchesGender;
  });

  return (
    <BackgroundGradientAnimation>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Introductions</h1>

        <SearchFilter
          onSearchChange={setSearch}
          onCountryChange={setCountry}
          onGenderChange={setGender}
          countries={countries}
          genders={genders}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filtered.map(([id, intro]) => (
            <IntroCard key={id} id={id} data={intro} type="admin" />
          ))}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
