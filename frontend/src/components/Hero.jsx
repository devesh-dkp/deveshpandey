import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const profileUrl =
    "https://github.com/devesh-dkp/devesh/blob/main/images/profile.jpg?raw=true";

  return (
    <section className="relative bg-slate-50 overflow-hidden">
      {/* Subtle structured background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Devesh Kumar Pandey
          </h1>

          {/* <h2 className="mt-4 text-xl md:text-2xl text-indigo-700 font-medium">
            Quantitative analysis and structured decision-making
          </h2> */}

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            I work at the intersection of mathematics, computing, and management,
            applying analytical rigor to complex, real-world problems. My focus
            is on modeling under uncertainty, working with imperfect data, and
            translating insights into practical recommendations that support
            informed decisions.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition"
            >
              View Projects
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-left md:justify-center">
          <div className="relative h-80 rounded-2xl to-slate-200 overflow-hidden">

            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-slate-300" />
            )}

            <img
              src={profileUrl}
              alt="Devesh Kumar Pandey"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
