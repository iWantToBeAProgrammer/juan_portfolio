import Button from "./common/Button";
import "../index.css";
import { useEffect } from "react";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      id="hero"
      className="hero min-h-screen flex flex-col justify-center bg-gradient-to-b from-base-100 from-40%  via-primary/20 via-60% border-b border-white/40 to-transparent overflow-hidden"
    >
      <div className="hero-content text-center h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-josefin font-extrabold text-white leading-tight">
            {" "}
            I'm Juan Stevenson
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-josefin font-extrabold mt-2">
            <div className="inline-block bg-base-300/40 backdrop-blur-2xl drop-shadow-2xl drop-shadow-primary/20 border border-white/30  sm:pt-4 px-2 sm:px-3 rounded-xl sm:rounded-2xl me-2 sm:me-4">
              <span className="bg-gradient-to-r from-primary to-secondary pt-1 sm:pt-3 bg-clip-text text-transparent">
                Full Stack
              </span>
            </div>
            <span className="block sm:inline mt-2 sm:mt-0">Developer</span>
          </h2>
          <p className="py-4 sm:py-6 max-w-xl mx-auto text-base sm:text-lg font-josefin px-4">
            I design and build beautiful, responsive, and user-friendly websites
            and applications.
          </p>
        </div>
      </div>
      <div className="hero-bottom w-full flex-1 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Desktop Layout (lg and up) */}
          <div className="hidden lg:flex items-start justify-between">
            {/* Left Card */}
            <div
              data-aos="fade-left"
              className="animate-float left-card card shadow-2xl w-80 xl:w-96 px-2 rounded-2xl border border-white/30 mt-12 xl:mt-24 -rotate-6 lg:-rotate-10"
            >
              <div className="card-body flex flex-col justify-center items-center text-center p-4 xl:p-6">
                <h2 className="card-title font-semibold text-white text-lg xl:text-xl">
                  🚀 Passionate about building
                </h2>
                <p className="text-base-content text-sm xl:text-base">
                  Creating scalable and efficient web applications from scratch.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div
              className="relative w-fit mx-auto max-w-sm xl:max-w-xl"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="absolute inset-8 xl:inset-16 bg-radial from-secondary via-accent to-transparent rounded-full blur-2xl opacity-30 z-0 h-full w-full"></div>
              <img
                src="/assets/images/hero.webp"
                alt="profile"
                className="relative z-10 rounded-xl w-full h-auto"
              />
              <div className="hero-button absolute bottom-0 z-30 flex justify-center w-full mb-6 xl:mb-12">
                <Button
                  onClick={() => (window.location.href = "#projects")}
                  text={"My Projects"}
                />
              </div>
            </div>

            {/* Right Card */}
            <div
              data-aos="fade-right"
              className="animate-float self-center right-card card shadow-2xl w-80 xl:w-96 px-2 rounded-2xl border border-white/30 mt-12 xl:mt-24 rotate-6 lg:rotate-10"
            >
              <div className="card-body flex flex-col justify-center items-center text-center p-4 xl:p-6">
                <h2 className="card-title font-semibold text-white text-lg xl:text-xl">
                  💡 Innovative problem solver
                </h2>
                <p className="text-base-content text-sm xl:text-base">
                  Loves turning complex problems into simple, beautiful code.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout (below lg) */}
          <div className="lg:hidden">
            {/* Center Image */}
            <div
              className="relative w-fit mx-auto max-w-xs sm:max-w-sm md:max-w-md mb-8"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="absolute inset-4 sm:inset-8 bg-radial from-secondary via-accent to-transparent rounded-full blur-2xl opacity-30 z-0 h-full w-full"></div>
              <img
                src="/assets/images/hero.webp"
                alt="profile"
                className="relative z-10 rounded-xl w-full h-auto"
              />
              <div className="hero-button absolute bottom-0 z-30 flex justify-center w-full mb-4 sm:mb-6">
                <Button
                  onClick={() => (window.location.href = "#projects")}
                  text={"My Projects"}
                />
              </div>
            </div>

            {/* Cards Stack - Mobile/Tablet */}
            <div className="space-y-6 sm:space-y-8 max-w-md mx-auto">
              {/* First Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="animate-float card shadow-2xl rounded-2xl border border-white/30 -rotate-2 sm:-rotate-3"
              >
                <div className="card-body flex flex-col justify-center items-center text-center p-4 sm:p-6">
                  <h2 className="card-title font-semibold text-white text-lg sm:text-xl">
                    🚀 Passionate about building
                  </h2>
                  <p className="text-base-content text-sm sm:text-base">
                    Creating scalable and efficient web applications from
                    scratch.
                  </p>
                </div>
              </div>

              {/* Second Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="animate-float card shadow-2xl rounded-2xl border border-white/30 rotate-2 sm:rotate-3"
              >
                <div className="card-body flex flex-col justify-center items-center text-center p-4 sm:p-6">
                  <h2 className="card-title font-semibold text-white text-lg sm:text-xl">
                    💡 Innovative problem solver
                  </h2>
                  <p className="text-base-content text-sm sm:text-base">
                    Loves turning complex problems into simple, beautiful code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
