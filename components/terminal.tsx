"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { TerminalIcon, User, Briefcase, Code, Mail, GraduationCap, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ImageAsciiLogo } from "@/components/image-ascii-logo"

type Command = {
  input: string
  output: React.ReactNode
  timestamp: Date
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<Command[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Use useCallback to memoize the scrollToBottom function
  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    inputRef.current?.focus()

    const handleClick = () => {
      inputRef.current?.focus()
    }

    document.addEventListener("click", handleClick)

    setCommandHistory([
      {
        input: "welcome",
        output: (
          <div className="space-y-2">
            <ImageAsciiLogo />
            <p className="font-mono text-white">
              Welcome to Zainokta's portfolio! Type <code>help</code> to see available commands.
            </p>
          </div>
        ),
        timestamp: new Date(),
      },
    ])

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [commandHistory, currentSection, scrollToBottom])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    let output: React.ReactNode

    switch (command) {
      case "help":
        output = (
          <div className="space-y-2 text-white">
            <p className="font-bold">Available commands:</p>
            <ul className="space-y-1">
              <li>
                <span className="text-white font-bold">about</span> - Learn about myself
              </li>
              <li>
                <span className="text-white font-bold">education</span> - View educational background
              </li>
              <li>
                <span className="text-white font-bold">skills</span> - See technical skills
              </li>
              <li>
                <span className="text-white font-bold">experience</span> - View work experience
              </li>
              <li>
                <span className="text-white font-bold">projects</span> - View projects
              </li>
              <li>
                <span className="text-white font-bold">contact</span> - Get contact information
              </li>
              <li>
                <span className="text-white font-bold">clear</span> - Clear the terminal
              </li>
              <li>
                <span className="text-white font-bold">help</span> - Show this help message
              </li>
              <li>
                <span className="text-white font-bold">scan</span> - Run a security scan
              </li>
            </ul>
          </div>
        )
        setCurrentSection(null)
        break

      case "about":
        output = <AboutSection />
        setCurrentSection("about")
        break

      case "education":
        output = <EducationSection />
        setCurrentSection("education")
        break

      case "skills":
        output = <SkillsSection />
        setCurrentSection("skills")
        break

      case "experience":
        output = <ExperienceSection />
        setCurrentSection("experience")
        break

      case "projects":
        output = <ProjectsSection />
        setCurrentSection("projects")
        break

      case "contact":
        output = <ContactSection />
        setCurrentSection("contact")
        break

      case "clear":
        setCommandHistory([])
        setCurrentSection(null)
        setInput("")
        return

      case "scan":
        output = (
          <div className="space-y-2 text-white">
            <p>Running security scan...</p>
            <pre className="text-xs my-2 text-white/70">
              {`
[+] Scanning system for vulnerabilities...
[+] Checking for open ports...
[+] Analyzing network traffic...
[+] Inspecting file integrity...
[+] Scanning for malware signatures...
[+] Checking for suspicious processes...
[+] Checking for suspicious processes...
`}
            </pre>
            <p className="text-green-500">Scan complete! No threats detected. System secure.</p>
          </div>
        )
        setCurrentSection(null)
        break

      default:
        output = (
          <p className="text-white">
            Command not found: {command}. Type <span className="text-white font-bold">help</span> to see available
            commands.
          </p>
        )
        setCurrentSection(null)
    }

    // Add command to history
    setCommandHistory((prev) => [
      ...prev,
      {
        input: command,
        output,
        timestamp: new Date(),
      },
    ])

    // Reset input and history index
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle up/down arrows for command history navigation
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-black border border-white/30 rounded-t-md p-2 flex items-center">
        <TerminalIcon className="h-4 w-4 text-white mr-2" />
        <span className="text-sm font-mono text-white">
          zainokta@server ~ {currentSection ? `/${currentSection}` : ""}
        </span>
      </div>

      <div ref={terminalRef} className="flex-1 bg-black border-x border-white/30 p-4 overflow-y-auto font-mono text-sm">
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center text-white/70">
              <span className="text-white mr-2">$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="mt-1 ml-4">{cmd.output}</div>
          </div>
        ))}
      </div>

      <div className="bg-black border border-white/30 rounded-b-md p-2">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-white mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none font-mono text-white"
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>

      <nav className="mt-4 flex flex-wrap justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("about")
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <User className="h-3 w-3 mr-1" />
          About
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("education")
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <GraduationCap className="h-3 w-3 mr-1" />
          Education
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("skills")
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Shield className="h-3 w-3 mr-1" />
          Skills
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("experience")
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Briefcase className="h-3 w-3 mr-1" />
          Experience
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("projects")
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Code className="h-3 w-3 mr-1" />
          Projects
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("contact")
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Mail className="h-3 w-3 mr-1" />
          Contact
        </Button>
      </nav>
    </div>
  )
}

