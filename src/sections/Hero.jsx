"use client";

import { Button } from "@/components/Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Linkedin,
  Download,
  Code2,
  Cpu,
  Globe,
  Database,
  Brain,
  Layers,
  Cloud,
  Server,
  Terminal,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const highlights = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Python, Java, JavaScript, TypeScript, SQL, Swift, Kotlin, PHP, HTML/CSS.",
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    description: "React, Next.js, SwiftUI, Django, FastAPI, Spring Boot, Node.js, Redux, GraphQL, Jest.",
  },
  {
    icon: Server,
    title: "Platform & DevOps",
    description: "AWS, Docker, Kubernetes, Terraform, Jenkins, Ansible, Git, CI/CD.",
  },
  {
    icon: Brain,
    title: "AI/ML & Databases",
    description: "RAG, LLM Integration, Vector Search, PostgreSQL, MySQL, MongoDB, Snowflake.",
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Swift",
  "Kotlin",
  "PHP",
  "HTML/CSS",
  "React",
  "Next.js",
  "SwiftUI",
  "Django",
  "FastAPI",
  "Spring Boot",
  "Node.js",
  "Webpack",
  "Redux",
  "GraphQL",
  "Jest",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Ansible",
  "Git",
  "CI/CD",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Snowflake",
  "Postman",
  "Linux",
  "Vite",
  "Tailwind CSS",
  "RAG",
  "LLM Integration",
  "Prompt Engineering",
  "Vector Search",
];

export const Hero = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const profileImageSrc = !mounted
    ? "/portfolio-drak.png"
    : currentTheme === "light"
      ? "/portfolio-light.png"
      : "/portfolio-drak.png";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-0 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background dark:from-background/20 dark:via-background/80" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building Technology that Resonates,
                <br className="hidden md:block" />
                <span className="font-serif italic font-normal text-primary dark:text-white">
                  {" "}
                  and some interesting things.
                </span>
              </h1>
              <div className="space-y-4 text-slate-900 dark:text-slate-400 animate-fade-in animation-delay-200">
                <p>
                  I'm Jian Zhang, also known as Kylo.

                </p>
                <p>
                  A Full-Stack Software Engineer dedicated to building scalable, high-performance web applications that leave a lasting impact. With a robust foundation in React, TypeScript, and Next.js, I craft intuitive front-end experiences powered by resilient microservices built with Python (FastAPI) and Java (Spring Boot).
                </p>
                <p>
                  Currently, I’m deep-diving into the world of AI/ML, seeking new ways to integrate generative intelligence into modern web architectures. I thrive at the edge of the Full Stack, where back-end logic meets front-end elegance.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create scalable software that users love and that truly improves lives."
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <AnimatedBorderButton href="/cv.pdf" download="Kylo_CV.pdf">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/jian-zhang-064875186" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image Frame */}
            <div className="relative max-w-md mx-auto">
              {/* Floating Teal Dots */}
              <div className="absolute -left-6 top-1/4 w-2 h-2 rounded-full bg-primary/60 blur-[1px]" />
              <div className="absolute top-1/3 right-8 w-1.5 h-1.5 rounded-full bg-primary/40 blur-[1px]" />
              <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-primary/50 blur-[1px]" />
              <div className="absolute -bottom-4 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/60 blur-[1px]" />

              {/* Background gradient blur */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl animate-pulse" />

              <div className="relative rounded-[2rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/60 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-xl">
                <img
                  src={profileImageSrc}
                  alt="Kylo"
                  className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                />

                {/* Bottom Right Floating Badge */}
                <div className="absolute -bottom-5 -right-5 bg-white dark:bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/80 dark:border-white/10 rounded-full px-5 py-2.5 animate-float flex items-center gap-2.5 backdrop-blur-md">
                  <div className="w-2.5 h-2.5 bg-[#4ADE80] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  <span className="text-sm font-medium text-slate-900 whitespace-nowrap">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in animation-delay-500">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section >
  );
};
