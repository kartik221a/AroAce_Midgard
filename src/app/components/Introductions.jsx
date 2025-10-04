// src/components/Introductions.jsx
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";

export function Introductions() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-row gap-25 justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        {/* Admins */}
        <Link href="/admin" passHref className="cursor-pointer block">
          <CometCard>
            <div
              type="button"
              className="my-10 flex w-80 flex-col items-stretch rounded-2xl 
                         bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 
                         overflow-hidden md:my-20 transition hover:scale-105"
              aria-label="View invite F7RA"
            >
              {/* Image Section */}
              <div className="relative aspect-[3/4] w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-t-2xl object-cover opacity-75"
                  alt="Invite background"
                  src="/images/admins-introduction.png"
                />
              </div>

              {/* Text Section */}
              <div className="flex items-center justify-between p-4 font-mono text-white">
                <div className="text-sm font-semibold">Admins Introduction</div>
                <div className="text-xs text-gray-300 opacity-70">🫂🫂🫂🫂</div>
              </div>
            </div>
          </CometCard>
        </Link>

        {/* Members */}
        <Link href="/members" passHref className="cursor-pointer block">
          <CometCard>
            <div
              type="button"
              className="my-10 flex w-80 flex-col items-stretch rounded-2xl 
                         bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 
                         overflow-hidden md:my-20 transition hover:scale-105"
              aria-label="View invite F7RA"
            >
              {/* Image Section */}
              <div className="relative aspect-[3/4] w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-t-2xl object-cover opacity-75"
                  alt="Invite background"
                  src="/images/members-introduction.png"
                />
              </div>

              {/* Text Section */}
              <div className="flex items-center justify-between p-4 font-mono text-white">
                <div className="text-sm font-semibold">Members Introduction</div>
                <div className="text-xs text-gray-300 opacity-70">👨‍👨‍👦‍👦⭐❤️👨‍👨‍👦‍👦</div>
              </div>
            </div>
          </CometCard>
        </Link>
      </Vortex>
    </div>
  );
}
