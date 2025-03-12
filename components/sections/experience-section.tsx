import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Backend Engineer</h3>
            <p className="text-xs text-muted-foreground">
              AccelByte, Remote | August 2023 - Present
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              Designing and implementing highly scalable services for 100k users in AWS Cloud.
            </li>
            <li>
              Owned multiple services as a product, collaborating with cross-functional teams (UI/UX, Frontend, QA, PM) and teammates across time zones.
            </li>
            <li>
              Improving custom service performance by adding cache mechanism to reduce query cost in AWS RDS by 75%.
            </li>
            <li>
              Implemented tracing and observability in some services improving monitoring, debugging, and performance analysis. Increased trace coverage to 100% of requests, and also improving issue diagnosis speed.
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Bootcamp Backend Engineer Mentor</h3>
            <p className="text-xs text-muted-foreground">Dibimbing.id, Remote (Freelance) | September 2024 - Present</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Freelance mentor at Dibimbing.id, guiding students through Golang from fundamentals to building full applications in an online bootcamp setting.</li>
            <li>Mentored students in a bootcamp, teaching Golang, databases (SQL & NoSQL), and deployment through interactive, hands-on sessions to enhance practical understanding and real-world application.</li>
            <li>Achieved 5/5 performance from the students review for the sessions conducted in the bootcamp.</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Backend Engineer</h3>
            <p className="text-xs text-muted-foreground">eFishery, Remote | April 2021 - August 2023</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Architecting microservice backend services with Golang to acquire, grow, and verify customers from 0 to more than 50000</li>
            <li>
              Migrated Backend Service from Node.js(express.js)-CouchDB to Go-PostgreSQL stack, reducing it's response time by 85% and improving reliability by reducing incidents and downtime by 94%
            </li>
            <li>
              Developed a Pond Monitoring Feature used by 5,000+ farmers to optimize farming efficiency, in collaboration with an aquaculture expert.
            </li>
            <li>
              Interview candidates and onboard them to the company when they join by scheduling 1-on-1 sessions every week to learn about their probation problem.
            </li>
            <li>
              Become a mentor to 2 subordinates and grow them until they level up in their career path (increased responsibility, and ability to get in context easily for the company product).
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Backend Engineer Mentor Kampus Merdeka</h3>
            <p className="text-xs text-muted-foreground">Dibimbing.id, Remote (Part Time) | August 2022 - December 2022</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>A policy issued by the Ministry of Education and Culture by giving students the right to take courses outside the study program for 1 semester and activities outside the university for 2 semesters. Ruangguru is one of the Independent Learning organizers</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Sakoo</h3>
            <p className="text-xs text-muted-foreground">
              Backend Engineer | April 2020 - April 2021
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              Successfully aggregate most of biggest marketplace in Indonesia into one platform by using RabbitMQ and background service to sync the product catalogue, transaction, and SKUs with 99.99% success rate of synchronization.
            </li>
            <li>Integrating the service with Telkom's internal payment gateway (Finpay) for the application payment and transaction.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

