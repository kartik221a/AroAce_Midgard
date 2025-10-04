// src/app/components/Hero.jsx
import { WavyBackground } from "@/components/ui/wavy-background";
import ColourfulText from "@/components/ui/colourful-text";

export default function Header() {
  return (
    <section className="relative">
      <WavyBackground
        className="max-w-4xl mx-auto pb-40"
      >
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to the <ColourfulText text="Aro/Ace" /> Community!
        </p>
        <div className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          <div>Discover members who share your interests and values.</div>
          <div>Search by name, filter by country, and find your perfect match.</div>
          <div>Join the conversation, make new friends, and grow your network.</div>
          <div>Every introduction is a story—let’s explore them all!</div>
        </div>
      </WavyBackground>
    </section>
  );
}
