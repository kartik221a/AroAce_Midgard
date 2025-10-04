// src/components/Socials.jsx
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandWhatsapp,
  IconBrandTelegram,
} from "@tabler/icons-react";

import ColourfulText from "@/components/ui/colourful-text";

export function Socials() {
  const links = [
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://chat.whatsapp.com/LjctzYVfkGq9xeACkohMlX",
    },
    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://t.me/elysianaroace",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span className="text-2xl">
        <ColourfulText text="Socials" />
      </span>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
