"use client";
import { ProjectCard } from "../components/ProjectCard"
import { useState } from "react"
import FilterButtons from "../components/Filter buttons"
import  projects  from "../../data/projects.json"


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <FilterButtons selectedCategory={selectedCategory} onSelectedCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

