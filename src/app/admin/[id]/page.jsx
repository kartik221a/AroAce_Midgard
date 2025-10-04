"use client";

import adminData from "@/app/data/adminIntroduction.json";
import { Vortex } from "@/components/ui/vortex";
import { SparklesCore } from "@/components/ui/sparkles";

export default function AdminDetailPage({ params }) {
  const admin = adminData[params.id];
  if (!admin) return <p>Admin not found</p>;

  const { aboutMe, traits, favourites, inPartner, moreInfo } = admin;

  const likesText = traits?.likes?.length ? traits.likes.join(", ") : "No likes listed";
  const dislikesText = traits?.dislikes?.length ? traits.dislikes.join(", ") : "No dislikes listed";
  const personalityText = traits?.personality || "No personality info";

  const partnerLikesText = inPartner?.likes?.length ? inPartner.likes.join(", ") : "N/A";
  const partnerDislikesText = inPartner?.dislikes?.length ? inPartner.dislikes.join(", ") : "N/A";
  const partnerPersonalityText = inPartner?.personality || "N/A";

  const extraInfo = moreInfo?.extra || "No additional info";

  return (
    <div className="w-full">
      <Vortex backgroundColor="black" particleCount={1000} rangeY={2000} baseHue={999}>
        <div className="w-full max-w-5xl mx-auto space-y-6 relative z-10 p-6">
          {/* NAME */}
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-5xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
              {aboutMe?.name || "Unknown"}
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>

          {/* About Me */}
          <section className="bg-black/50 backdrop-blur-sm text-gray-200 rounded-lg p-4 shadow-md border border-white/10">
            <p><strong>Age:</strong> {aboutMe?.age || "Unknown"}</p>
            <p><strong>Gender:</strong> {aboutMe?.gender || "Unknown"}</p>
            <p><strong>Pronouns:</strong> {aboutMe?.pronouns || "Unknown"}</p>
            <p><strong>Sexuality:</strong> {aboutMe?.sexuality || "Unknown"}</p>
            <p><strong>Country:</strong> {aboutMe?.country || "Unknown"}</p>
          </section>

          {/* Traits */}
          <section className="bg-black/50 backdrop-blur-sm text-gray-200 rounded-lg p-4 shadow-md border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Traits</h2>
            <p><strong>Likes:</strong> {likesText}</p>
            <p><strong>Dislikes:</strong> {dislikesText}</p>
            <p><strong>Personality:</strong> {personalityText}</p>
          </section>

          {/* Favourites */}
          <section className="bg-black/50 backdrop-blur-sm text-gray-200 rounded-lg p-4 shadow-md border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Favourites</h2>
            <p><strong>Colour:</strong> {favourites?.colour || "N/A"}</p>
            <p><strong>Song/Artist:</strong> {favourites?.songArtist || "N/A"}</p>
            <p><strong>Food:</strong> {favourites?.food || "N/A"}</p>
            <p><strong>Activity:</strong> {favourites?.activity || "N/A"}</p>
          </section>

          {/* Partner Preferences */}
          <section className="bg-black/50 backdrop-blur-sm text-gray-200 rounded-lg p-4 shadow-md border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Looking For In Partner</h2>
            <p><strong>Age:</strong> {inPartner?.age || "N/A"}</p>
            <p><strong>Gender:</strong> {inPartner?.gender || "N/A"}</p>
            <p><strong>Pronouns:</strong> {inPartner?.pronouns || "N/A"}</p>
            <p><strong>Country:</strong> {inPartner?.country || "N/A"}</p>
            <p><strong>Likes:</strong> {partnerLikesText}</p>
            <p><strong>Dislikes:</strong> {partnerDislikesText}</p>
            <p><strong>Personality:</strong> {partnerPersonalityText}</p>
          </section>

          {/* More Info */}
          <section className="bg-black/50 backdrop-blur-sm text-gray-200 rounded-lg p-4 shadow-md border border-white/10">
            <h2 className="text-xl font-semibold mb-2">More About Me</h2>
            <p>{extraInfo}</p>
          </section>
        </div>
      </Vortex>

      <Vortex backgroundColor="black" particleCount={1000} rangeY={2000} baseHue={999} />
    </div>
  );
}
