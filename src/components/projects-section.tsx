import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FiExternalLink } from "react-icons/fi";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function ProjectsSection() {

  const { setShowModel } = useContext(AppContext);
  const pRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(pRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.8)",
      scrollTrigger: {
        trigger: pRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      }
    })
  })

  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Precision Automotive Component Design",
      description: "Designed complex automotive transmission components with tight tolerances, optimizing for manufacturability and cost reduction.",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZW5naW5lZXJpbmclMjBwYXJ0c3xlbnwxfHx8fDE3ODI0MDYyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      software: ["SolidWorks", "AutoCAD"],
      category: "Automotive"
    },
    {
      title: "Industrial Machinery Assembly",
      description: "Created detailed 3D assemblies for packaging machinery, including motion simulation and interference detection for 200+ components.",
      image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZGVzaWdufGVufDF8fHx8MTc4MjQwNjIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      software: ["CATIA", "SolidWorks"],
      category: "Industrial"
    },
    {
      title: "3D CAD Modeling & Surface Design",
      description: "Developed ergonomic consumer product housings using advanced surface modeling techniques and design validation through FEA.",
      image: "https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMENBRCUyMG1vZGVsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzgyNDA2MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      software: ["CATIA", "Fusion 360"],
      category: "Product Design"
    },
    {
      title: "Technical Drawing & Documentation",
      description: "Produced comprehensive manufacturing drawings with GD&T specifications for aerospace components, ensuring compliance with AS9100 standards.",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBkZXNpZ24lMjBibHVlcHJpbnR8ZW58MXx8fHwxNzgyNDA2MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      software: ["AutoCAD", "SolidWorks"],
      category: "Aerospace"
    },
    {
      title: "Precision Component Manufacturing",
      description: "Designed custom tooling and fixtures for high-volume production, reducing cycle time by 30% while maintaining quality standards.",
      image: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzgyNDA2MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      software: ["SolidWorks", "AutoCAD"],
      category: "Manufacturing"
    },
    {
      title: "Engineering Workspace Setup",
      description: "Streamlined CAD workflow by implementing standardized templates, libraries, and best practices across multi-platform design environment.",
      image: "https://images.unsplash.com/photo-1764737734436-7eb904d3a4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBkcmF3aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MjQwNjIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      software: ["AutoCAD", "CATIA", "SolidWorks"],
      category: "Process Improvement"
    }
  ];

  return (
    <section id="projects" className="mt-10 relative bg-slate-50">
      <div className="container mx-auto px-4">
        <div id={"carousel"} className="max-w-6xl py-10 overflow-hidden mx-auto relative">
          <div className="absolute left-0 top-0 h-full w-10 md:w-20 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-10 md:w-20 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent pointer-events-none z-10" />
          <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0} className="rounded-full bg-primary-100 text-black  flex items-center justify-center cursor-pointer absolute z-10 -translate-y-1/2 top-[60%] left-[20px]"><FaChevronCircleLeft className="cursor-pointer text-3xl" /></button>
          <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === projects.length - 2} className="rounded-full bg-primary-100 text-black  flex items-center justify-center cursor-pointer z-10 absolute -translate-y-1/2 top-[60%] right-[20px]"><FaChevronCircleRight className="cursor-pointer text-3xl" /></button>
          <div ref={pRef} className="title text-center mb-12">
            <h2 className="mb-4 text-xl md:text-3xl">Featured Projects</h2>
            <p className="text-md md:text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of diverse mechanical design projects across multiple industries
            </p>
          </div>

          <div id={"track"} style={{
            transform: `translateX(-${currentIndex * 300}px)`
          }} className="flex relative gap-6 trasition-all duration-600 ease-in-out">

            {projects.map((project, index) => (
              <Card key={index} className="relative hover:bottom-[10px] hover:scale-1.2 overflow-hidden hover:shadow-xl min-w-[300px] transition-shadow flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-md md:text-lg">{project.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.software.map((sw, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {sw}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setShowModel(true)} variant="secondary" className="w-[80%] mx-auto group">
                    View Model
                    <FiExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
