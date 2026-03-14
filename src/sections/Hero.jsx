"use client";

import { Button } from "@/components/Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
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
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-primary dark:text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Kylo — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/kylofive" },
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
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
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
