
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import AppContextProvider from "./context/AppContextProvider";
import ModelViewer from "./components/modelViewer";
import { useEffect, useState } from "react";
import { MechanicalLoader } from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <MechanicalLoader />;
  }
  return (
    <div className="size-full">
      <AppContextProvider>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
        <ModelViewer />
      </AppContextProvider>
    </div>
  );
}