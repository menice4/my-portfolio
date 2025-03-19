import Image from "next/image"

import { notFound } from "next/navigation"
import projects from "../../../data/projects.json"


interface ProjectPageProps {
  params: Promise<{ id: string }>;
}


export default async function Project({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-4">Category: {project.category}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} - Image`}
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Project Description:</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>
    </div>
  )
}

