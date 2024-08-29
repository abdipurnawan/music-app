import FeaturedPlayerSection from "./featured-player";
import HomeHeroSection from "./hero";
import TopTracksSection from "./top-tract";

export default function HomePage() {
  return (
    <div className="relative bg-blend-hard-light text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-72 left-1/2 transform -translate-x-1/2">
        <div
          className="hidden dark:block w-[100vw] h-[500px] bg-gradient-to-b from-purple-600/50 via-purple-400/30 to-transparent rounded-b-full blur-[100px] opacity-60 animate-pulse"
          style={{
            transform: "perspective(1000px) rotateX(60deg)",
            boxShadow: "0 0 40px 10px rgba(168, 85, 247, 0.3)",
          }}
        />
      </div>
      <div>
      <HomeHeroSection />
      <FeaturedPlayerSection />
      <TopTracksSection />
      
      </div>
      

    </div>
  )
}