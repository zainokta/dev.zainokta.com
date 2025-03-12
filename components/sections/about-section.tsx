import { AsciiArt } from "@/components/ascii-art"
export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <div className="text-center text-xs text-muted-foreground mt-2">
            Gusti Zainokta Ginanto Bukian
            <br />
            <span className="text-primary/60">Software Engineer</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            I'm a <strong>Software Engineer</strong> with a strong foundation in backend engineering
          </p>

          <p>
            I specialize in designing scalable microservices and cloud-native solutions using technologies like Golang, Docker, Kubernetes, and AWS.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                My experience spans impactful roles, such as customizing backend services for game platforms at AccelByte, mentoring team members, and architecting key systems at eFishery, which supported over 50,000 verified customers.
              </p>

              <p>
                I have a proven track record of leading teams, optimizing operations, and driving innovation across industries like IoT and e-commerce.
              </p>

              <p>
                Thinking about it now, it's interesting how my problem-solving and optimization mindset may have influenced my career path—perhaps that's what drew me to backend engineering, where I focus on building scalable, efficient, and reliable systems!
              </p>

              <p>
                Outside of my professional life, I enjoy gaming, especially Monster Hunter, Elden Ring, Palworld, Dota 2, and Counter-Strike.
              </p>

              <p>
                Whether it's hunting massive creatures, building and exploring, or competing in fast-paced matches, I love the challenge and strategy each game offers. 🎮
              </p>

            </div>
          </div>

          <p>
            I'm passionate about building high-performance backend systems, optimizing scalability, and ensuring reliability to support seamless user experiences and efficient data processing.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">📌 Location:</span> Central Java, Indonesia
              </li>
              <li>
                <span className="text-muted-foreground">🎓 Education:</span> B.A.Sc. in Game Technology, Politeknik Elektronika Negeri Surabaya
              </li>
              <li>
                <span className="text-muted-foreground">🖥️ Specialty:</span> Software Engineering, Game Development
              </li>
              <li>
                <span className="text-muted-foreground">🤖 Tech Stack:</span> Golang, PostgreSQL, MongoDB, Docker, Kubernetes, Amazon Web Services (AWS), Redis, Kafka
              </li>
              <li>
                <span className="text-muted-foreground">🎮 Favorite Games:</span> Monster Hunter, Elden Ring, Dota 2, Counter Strike
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

