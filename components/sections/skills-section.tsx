import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages</h3>
          <div className="space-y-2">
            <SkillBar name="Go" />
            <SkillBar name="Javascript/Typescript" />
            <SkillBar name="Python" />
            <SkillBar name="Java" />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Tools & Frameworks</h3>
          <div className="space-y-2">
            <SkillBar name="Git" />
            <SkillBar name="Docker" />
            <SkillBar name="Kubernetes" />
            <SkillBar name="PostgreSQL" />
            <SkillBar name="MongoDB" />
            <SkillBar name="Redis" />
            <SkillBar name="Kafka" />
            <SkillBar name="RabbitMQ" />
            <SkillBar name="CI/CD" />
            <SkillBar name="NginX" />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Cloud Platforms</h3>
          <div className="space-y-2">
            <SkillBar name="Amazon Web Services" />
            <SkillBar name="Cloud Native Deployment" />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Specialty Areas</h3>
          <div className="space-y-2">
            <SkillBar name="Backend Engineering" />
            <SkillBar name="Game Development" />
            <SkillBar name="DevOps" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name }: { name: string; }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
      </div>
    </div>
  )
}

