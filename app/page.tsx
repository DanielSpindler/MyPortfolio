import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div
              className="flex flex-col items-center justify-center overflow-hidden ">
              <div
                  className="hidden h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
              <Particles
                  className="absolute inset-0 -z-10 animate-fade-in"
                  quantity={100}
              />
              <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-slate-50 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                  Portfolio Page
              </h1>
              <div
                  className="hidden h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
          </div>
      </div>

  );

}
