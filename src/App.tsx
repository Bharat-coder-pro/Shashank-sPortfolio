
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import AppContextProvider from "./context/AppContextProvider";
import ModelViewer from "./components/modelViewer";

export default function App() {
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