import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Footer() {
  useGSAP(() => {
    gsap.from("#footer", {
      bottom: -200,
      duration: 1.5,
      ease: "easeinout",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      }
    })
  })
  return (
    <footer className="bg-slate-900 text-white py-12 rounded-t-xl relative" id="footer">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">Mechanical Designer</h3>
              <p className="text-slate-400">
                Specialized in CAD design and mechanical engineering solutions
                using AutoCAD, SolidWorks, and CATIA.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Connect</h4>
              <div className="flex gap-3">
                <a target="_blank" href="https://www.linkedin.com/in/shashank-yadav-639b60416/">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-transparent border-slate-700 hover:bg-slate-800 hover:border-slate-600"
                  >
                    <FaLinkedin className="h-5 w-5 text-white" />
                  </Button>
                </a>
                <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=yshashank283@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-transparent border-slate-700 hover:bg-slate-800 hover:border-slate-600"
                  >
                    <FiMail className="h-5 w-5 text-white" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2026 Mechanical Designer Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
