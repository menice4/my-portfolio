import Image from "next/image"
import Link from "next/link"
import { SkillIcon } from "./components/SkillIcon"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Ashton Bailey</h1>
        <p className="text-xl text-gray-600">Full-Stack Developer | Game Developer | 3D Artist</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-gray-700 flex-1">
            I&apos;m a versatile developer with experience in web development, game development, and 3D modeling. My passion
            lies in creating immersive experiences and pushing the boundaries of technology.
          </p>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Coding setup"
            width={400}
            height={300}
            className="rounded-lg shadow-lg flex-1"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillIcon name="JavaScript" icon="js" />
          <SkillIcon name="TypeScript" icon="ts" />
          <SkillIcon name="React" icon="react" />
          <SkillIcon name="Next.js" icon="nextjs" />
          <SkillIcon name="HTML5" icon="html" />
          <SkillIcon name="Unreal Engine" icon="unreal" />
          <SkillIcon name="Blender" icon="blender" />
          <SkillIcon name="VR/AR" icon="vr" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/projects/web" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Web Development"
                width={500}
                height={300}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">Web Development</h3>
              </div>
            </div>
          </Link>
          <Link href="/projects/game" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Game Development"
                width={500}
                height={300}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">Game Development</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="text-center">
        <Link
          href="/projects"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          View All Projects
        </Link>
      </section>
    </div>
  )
}

