import { Button } from "./ui/button";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { downloadResume } from "../_utils/downloadResume.ts";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroSection({ setHeroVideoLoaded }: { setHeroVideoLoaded: (value: boolean) => void }) {

  const containerRef = useRef<HTMLDivElement>(null);
  const charRef = useRef<HTMLImageElement>(null);
  const cvRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      gsap.to(charRef.current, {
        left: "1200px",
        opacity: 0,
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    gsap.to(cvRef.current, {
      scale: 1.08,
      rotation: 2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  })


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const text = "Transforming Ideas into Precision Engineering Solutions";
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect((): (() => void) | void => {
    const element = textRef.current;

    if (!element) return;

    let index = 0;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.5,
    });

    tl.call(() => {
      index = 0;
      element.textContent = "";
    });

    for (let i = 0; i <= text.length; i++) {
      tl.call(() => {
        element.textContent = text.slice(0, index);
        index++;
      }, [], i * 0.07);
    }

    tl.to({}, { duration: 1.5 });

    for (let i = text.length; i >= 0; i--) {
      tl.call(() => {
        element.textContent = text.slice(0, index);
        index--;
      }, [], `+=0.04`);
    }

    return () => tl.kill();
  }, []);

  return (
    <section ref={containerRef} className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F8FAFC] rounded-b-lg">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full z-5 w-full object-cover"
        preload="auto"
        onCanPlayThrough={() => setHeroVideoLoaded(true)}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="relative group bottom-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-6 top-10 flex items-center justify-center">
            <img src="/oLogo.png" alt="logo" className="size-[300px] hidden md:block hover:drop-shadow-lg sm:block object-cover aspect-square [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />
            <img src="/heroAvatar.png" alt="avatar" className="size-[150px] relative -top-15 bg-zinc-800/50 rounded-full md:hidden backdrop-blur-xl objet-cover border-4 border-slate-100 " />
            <div
              className="
              md:hidden
      absolute
      bottom-full
      left-1/2
      -translate-x-1/2
      -translate-y-[50px]
      mb-4

      opacity-0
      invisible
      scale-95

      group-hover:opacity-100
      group-hover:visible
      group-hover:scale-100

      transition-all
      duration-300
      ease-out

      whitespace-nowrap

      bg-neutral-900
      text-white
      text-sm
      font-medium

      px-4
      py-2

      rounded-2xl
      shadow-xl
      border
      border-neutral-700
    "
            >
              Hii! 👋 I'm Shashank, its great to meet you.

              {/* Bubble Tail */}
              <div
                className="
        absolute
        left-1/2
        -translate-x-1/2
        top-full

        w-4
        h-4

        bg-neutral-900
        border-r
        border-b
        border-neutral-700

        rotate-45
        -mt-2
      "
              />
            </div>
          </div>

          <h1 ref={textRef} style={{ fontFamily: "'Black Ops One', system-ui" }} className="text-shadow-md text-shadow-black relative z-8 mb-6 text-xl sm:text-2xl md:text-4xl text-slate-100">

          </h1>

          <p className="text-md sm:text-xl md:text-2xl relative z-7 text-shadow-md text-shadow-black mb-8 max-w-2xl mx-auto text-slate-100">
            Specialized in 2D and 3D CAD design with expertise in AutoCAD, SolidWorks, and CATIA.
            Creating innovative mechanical designs that bring concepts to reality.
          </p>

          <div className="flex relative z-20 flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative z-20"
            >
              View Projects
              <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="button cursor-pointer relative z-20"
              ref={cvRef}
              onClick={downloadResume}
            >
              <FiDownload className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

        </div>

      </div>
      <img ref={charRef} src="/char.png" alt="person" className="absolute z-4 xl:z-6  bottom-5 right-[-220px] drop-shadow-xl drop-shadow-black h-[800px]" />
      <div className="absolute bottom-0 z-8 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#F8FAFC]"></div>
    </section>
  );
}
