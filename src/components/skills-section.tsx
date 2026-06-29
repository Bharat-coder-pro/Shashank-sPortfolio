import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { FiBox, FiSettings, FiFileText } from "react-icons/fi";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SkillsSection() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const tsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".skills", {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      }
    })
  })

  useGSAP(() => {
    gsap.from(tsRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.8)",
      scrollTrigger: {
        trigger: tsRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      }
    })
  })

  const skillCategories = [
    {
      id: 1,
      title: "CAD Software",
      icon: FiBox,
      description: "Expert proficiency in industry-standard design tools",
      skills: [
        { name: "AutoCAD", level: "Expert" },
        { name: "SolidWorks", level: "Expert" },
        { name: "CATIA V5/V6", level: "Advanced" },
        { name: "Fusion 360", level: "Intermediate" },
      ]
    },
    {
      id: 2,
      title: "Design Specialties",
      icon: FiBox,
      description: "Comprehensive mechanical design capabilities",
      skills: [
        { name: "3D Modeling", level: "Expert" },
        { name: "2D Drafting", level: "Expert" },
        { name: "Assembly Design", level: "Advanced" },
        { name: "Surface Modeling", level: "Advanced" },
      ]
    },
    {
      id: 3,
      title: "Engineering Analysis",
      icon: FiSettings,
      description: "Technical analysis and validation expertise",
      skills: [
        { name: "FEA Simulation", level: "Intermediate" },
        { name: "Tolerance Analysis", level: "Advanced" },
        { name: "DFM/DFA", level: "Advanced" },
        { name: "Material Selection", level: "Expert" },
      ]
    },
    {
      id: 4,
      title: "Documentation",
      icon: FiFileText,
      description: "Professional technical documentation skills",
      skills: [
        { name: "Technical Drawings", level: "Expert" },
        { name: "GD&T", level: "Advanced" },
        { name: "BOM Creation", level: "Expert" },
        { name: "Standards (ASME/ISO)", level: "Advanced" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Advanced":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      default:
        return "bg-slate-100 text-slate-700 hover:bg-slate-100";
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={tsRef} className="text-center mb-12">
            <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl">Technical Skills</h2>
            <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive expertise across mechanical design tools, methodologies, and industry standards
            </p>
          </div>

          <div ref={sectionRef} className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="skills hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className={getLevelColor(skill.level)}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-lg">
            <h3 className="text-xl mb-4">Additional Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Reverse Engineering",
                "Product Development",
                "Prototyping",
                "Sheet Metal Design",
                "Plastic Part Design",
                "Jigs & Fixtures",
                "Tool Design",
                "3D Printing",
                "CNC Programming",
                "Project Management"
              ].map((skill, index) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
