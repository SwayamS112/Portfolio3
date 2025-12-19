import { useState } from "react";
import PortfolioTabs from "../components/PortfolioTabs";
import ProjectCard from "../components/ProjectCard";
import CertificateGrid from "../components/CertificateGrid";
import TechStackGrid from "../components/TechStackGrid";
import projects from "../data/projects";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portfolio" className="min-h-screen px-6 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center
          bg-gradient-to-r from-purple-400 to-indigo-400
          bg-clip-text text-transparent">
          Portfolio Showcase
        </h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technologies.
        </p>

        {/* Tabs */}
        <PortfolioTabs active={activeTab} setActive={setActiveTab} />

        {/* Content */}
        <div className="mt-16">
          {activeTab === "projects" && (
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {activeTab === "certificates" && <CertificateGrid />}
          {activeTab === "tech" && <TechStackGrid />}
        </div>
      </div>
    </section>
  );
}
