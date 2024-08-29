"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import ShinyButton from "../magicui/shiny-button";

const Navbar = () => {
  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 py-5 z-20 block lg:hidden border-b-[0.5px] supports-backdrop-blur:bg-background/90 backdrop-blur-lg`}
      >
        <div className="px-10">
          <div className="flex flex-row justify-between items-center">
            <h1>This is logo</h1>
          </div>
        </div>
      </nav>

      <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:block border-b-[0.5px] supports-backdrop-blur:bg-background/90 backdrop-blur-lg">
        <div className={`mx-auto py-2`}>
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-2">
              <h1 className="text-2xl font-bold ">AP-Music</h1>
              <MenuList />
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                  className="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3 hidden whitespace-pre md:flex group relative w-full gap-1 overflow-hidden text-sm font-medium tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                  href="/pricing"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
                  Creator Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
              {/* <motion.div>
          <Logo withText={!isFloating} />
        </motion.div>
        <motion.div>
          <LandingNavigationMenu />
        </motion.div>
        <motion.div>
          <LandingUserData isFloating={isFloating} />
        </motion.div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const MenuList = () => {
  return (
    <div className="flex flex-row space-x-4 text-sm">
      <a
        className="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
        href="/"
      >
        Home
      </a>
      <a
        className="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
        href="/#featured-player"
      >
        Start Listening
      </a>
      <a
        className="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
        href="/#featured-player"
      >
        Top Track
      </a>
      <a
        className="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
        href="/#featured-player"
      >
        Artist
      </a>
    </div>
  );
};
