import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:zainokta@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            zainokta@gmail.com
          </a>
          <a href="tel:6283856444498" className="flex items-center text-sm hover:text-primary transition-colors">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            +62-838-5644-4498
          </a>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Central Java, Indonesia
          </div>
          <a
            href="https://www.linkedin.com/in/gusti-zainokta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            linkedin.com/in/gusti-zainokta
          </a>
          <a
            href="https://github.com/zainokta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/zainokta
          </a>
        </div>
      </div>
    </div>
  )
}

