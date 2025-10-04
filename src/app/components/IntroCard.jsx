// src/components/IntroCard.jsx
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";

export default function IntroCard({ id, data, type }) {
  // Safely get likes as a string
  const likesText =
    data.traits && Array.isArray(data.traits.likes) && data.traits.likes.length
      ? data.traits.likes.join(", ")
      : "No likes listed";

  // Safely get gender
  const genderText = data.aboutMe.gender || "Unknown";

  return (
    <Link href={`/${type === "admin" ? "admin" : "members"}/${id}`}>
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          {/* Title: NAME (from COUNTRY) */}
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {data.aboutMe.name} (from {data.aboutMe.country})
          </h1>

          {/* Likes */}
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            Likes: {likesText}
          </p>

          {/* Gender button */}
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            {genderText}
          </button>

          {/* Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </Link>
  );
}
