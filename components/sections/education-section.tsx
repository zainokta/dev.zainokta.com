import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Politeknik Elektronika Negeri Surabaya, Surabaya, Indonesia</h3>
          <p className="text-sm">B.A.Sc in Game Technology | GPA: 3.49</p>
          <p className="text-xs text-muted-foreground">2016 - 2020</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Final Project:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Project Management Tool To Optimize Git Flow Implementation in Scrum Game Development</li>
            </ul>
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Game Design Document</li>
              <li>Human Computer Interaction</li>
              <li>Computer Graphics</li>
              <li>3D Design and Game Implementation</li>
              <li>Game Multiplayer</li>
              <li>Backend for Game</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

