import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function HomeHeroSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mt-40 lg:mt-32 2xl:mt-36">
      <div className="flex flex-col gap-6">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Introducing Music Features
          </span>
        </AnimatedGradientText>

        <h1 className="text-balance bg-gradient-to-br from-black from-10% to-black/60 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-7xl">
          Beautifully designed music player and playlists
        </h1>

        <p className="max-w-[64rem] text-balance text-lg tracking-tight text-gray-500 md:text-xl">
          30+ curated playlists and exclusive tracks from emerging artists. Save
          hours of searching, create your perfect playlist, and discover new
          music.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900">
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-5 py-1 text-sm font-medium text-slate-900 dark:text-white underline underline-offset-1 backdrop-blur-3xl">
              Browse Songs
            </span>
          </button>

          <Link href="#featured-player">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Start Listening
              </span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
          <div className="flex -space-x-2 mr-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                className="w-8 h-8 rounded-full border-2 border-gray-900"
                src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                width={32}
                height={32}
                alt="User"
              />
            ))}
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-foreground">5.0</span>
          </div>
          <span className="mx-2 hidden md:block">•</span>
          <span className="text-foreground">
            1,000+ music lovers enjoying our playlists
          </span>
        </div>

        <div className="flex justify-center space-x-4">
          <Image
            src="/assets/svgs/react-icon.svg"
            alt="React"
            className="h-8"
            width={32}
            height={32}
          />
          <Image
            src="/assets/svgs/tailwind-css-icon.svg"
            alt="Tailwind CSS"
            className="h-8"
            width={32}
            height={32}
          />
          <Image
            src="/assets/svgs/framer-motion-icon.svg"
            alt="Framer Motion"
            className="h-8"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  );
}
