import { Button } from "./ui/button";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { downloadResume } from "../_utils/downloadResume.ts";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroSection() {

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
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 rounded-b-lg">
      <div className="absolute inset-0 bg-grid-slate-500 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] -z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full z-5 w-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="relative bottom-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-6 top-10 flex items-center justify-center">
            <img src="/oLogo.png" alt="logo" className="size-[300px]  hover:drop-shadow-lg sm:block object-cover aspect-square [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />
          </div>

          <h1 ref={textRef} style={{ fontFamily: "'Black Ops One', system-ui" }} className="text-shadow-md text-shadow-black relative z-8 mb-6 text-xl sm:text-2xl md:text-4xl text-slate-100">

          </h1>

          <p className="text-md sm:text-xl md:text-2xl relative z-7 text-shadow-md text-shadow-black mb-8 max-w-2xl mx-auto text-slate-100">
            Specialized in 2D and 3D CAD design with expertise in AutoCAD, SolidWorks, and CATIA.
            Creating innovative mechanical designs that bring concepts to reality.
          </p>

          <div className="flex relative z-6 flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View Projects
              <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              ref={cvRef}
              onClick={() => downloadResume()}
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
