import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  category: string
  tech: string[]
  description: string
  image: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-2">Category: {project.category}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <div key={tech}>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {tech}
              </span>
            </div>
            
          ))}
        </div>
        <p className="text-gray-700 text-sm mt-2">{project.description}</p>
      </div>
    </Link>
  )
}

