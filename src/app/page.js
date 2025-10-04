// src/pages/index.jsx
import Header from "@/app/components/Header";
import { Introductions } from "@/app/components/Introductions";
import { Socials } from "@/app/components/Socials";

export default function Home() {
  return (
    <main>
      <Header />
      <Socials />
      <Introductions />
    </main>
  );
}
