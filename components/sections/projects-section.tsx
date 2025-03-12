import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">eFarm By eFishery</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Farmer      |---->|     eFarm      |---->| Pond Data      |
  |             |     |                |     | Record         |
  +-------------+     +----------------+     +----------------+
                             |                      |
                             v                      |
                      +--------------+              |
                      | Database     |<-------------+
                      |              |
                      +--------------+
                             |
                             v
                      +---------------+
                      | AI/ML         |
                      |               |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Designed and implemented backend services for eFarm, a platform by eFishery, enabling fish and shrimp farmers to monitor and optimize their operations through tools for feed management, production planning, and market connections.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Golang, PostgreSQL, Redis, Docker
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Chat Service</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+      +----------------+
  | User        |---->| Chat Service   |---->| Centrifugo     | ---->|  Recipient(s)  |
  |             |     |                |     |                |      |                |
  +-------------+     +----------------+     +----------------+      +----------------+
                              |
                              v
                       +-----------------+
                       | Database (Mongo)|
                       |                 |
                       +-----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Creating a highly scalable chat service in Golang using Centrifugo and Database to store the user message history and chat room list.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Golang, Docker, Github Action, Centrifugo, Redis
          </p>
        </div>
      </div>
    </div>
  )
}

