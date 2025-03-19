import Image from "next/image"

interface SkillIconProps {
  name: string
  icon: string
}

export function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={`/icons/${icon}.svg`} alt={name} width={48} height={48} className="mb-2" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

