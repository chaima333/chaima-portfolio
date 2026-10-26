import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Mail,
  Menu,
  Server,
  Sparkles,
  X,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
} from "react-icons/fa";
import { useState } from "react";
import "./App.css";

const experienceProjects = [
  {
    number: "01",
    name: "ReactBuilder",
    type: "PFE · SAAS PLATFORM · FULL STACK",
    description:
      "A multi-tenant SaaS website builder featuring a drag-and-drop page creation engine, AI-assisted content generation, dynamic CMS, forms management, role-based authentication, versioning, and static website export.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AI Integration",
    ],
    link: "https://github.com/chaima333/reactbuilder",
  },
  {
    number: "02",
    name: "VSIA Services",
    type: "FULL STACK PLATFORM · AI · RAG",
    description:
      "Full-stack business platform with multilingual UI, REST APIs, secure authentication, PostgreSQL data management, and diagnostic tools. Features an OpenAI AI chatbot built with RAG architecture using ChromaDB for PDF/DOCX document ingestion and semantic retrieval.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "OpenAI",
      "ChromaDB",
      "Docker",
      "JWT",
    ],
    link: "https://vsia-frontend.vercel.app/",
  },
];

const freelanceProjects = [
  {
    number: "01",
    name: "Zahra Collection",
    type: "FREELANCE · E-COMMERCE · FULL STACK",
    description:
      "Full-stack e-commerce application developed for a fashion brand, featuring a dynamic product catalog, color and size variants, stock management, persistent cart, complete checkout and order workflows, and a secure admin back-office.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://zahra-collection-one.vercel.app/",
  },
];

const academicProjects = [
  {
    number: "01",
    name: "E-Learning Platform",
    type: "ACADEMIC PROJECT · FULL STACK",
    description:
      "Comprehensive e-learning application designed to streamline educational content delivery, user dynamic dashboards, interactive modules, and progress tracking workflows.",
    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    link: "https://github.com/chaima333/Elearning1",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3 / Tailwind",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth",
      "System Architecture",
    ],
  },
  {
    icon: Database,
    title: "Databases & ORM",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Sequelize",
      "Supabase",
    ],
  },
  {
    icon: Globe,
    title: "Dev Tools & Cloud",
    items: [
      "Git & GitHub",
      "Vite",
      "Docker",
      "ChromaDB (RAG)",
      "Vercel",
    ],
  },
];

type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  link: string;
};

function ProjectList({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <article
          className="project-card"
          key={`${project.number}-${project.name}`}
        >
          <div className="project-header">
            <span className="project-number">
              {project.number}
            </span>

            <span className="project-type">
              {project.type}
            </span>
          </div>

          <div className="project-body">
            <h3 className="project-title">
              {project.name}
            </h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.stack.map((technology) => (
                <span
                  className="tag"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="project-action">
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name}`}
              >
                <span>View Project</span>
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <span className="project-link project-link-disabled">
                <span>In Progress</span>
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = () =>
    setMenuOpen(false);

  return (
    <div className="app-container">
      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          CK<span className="brand-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <nav
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
          >
            Experience
          </a>

          <a
            href="#freelance"
            onClick={closeMenu}
          >
            Freelance
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
            className="nav-cta"
            href="/Chaima_Kaboudi_CV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            View CV
            <ExternalLink size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section
          className="hero section-wrap"
          id="home"
        >
          <div className="hero-copy">
            <div className="availability-badge">
              <span className="status-dot" />
              <span className="badge-text">
                OPEN FOR NEW OPPORTUNITIES
              </span>
            </div>

            <p className="eyebrow">
              <Sparkles
                size={14}
                className="eyebrow-icon"
              />
              HELLO, I'M CHAIMA KABOUDI
            </p>

            <h1 className="hero-title">
              Crafting Scalable <br />
              <span className="gradient-text">
                Web Experiences
              </span>
              .
            </h1>

            <p className="hero-description">
              Software Engineer & Full Stack
              Developer specializing in SaaS
              architectures, intelligent AI
              integration, and robust full-stack
              solutions.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#experience"
              >
                Explore Work
                <ArrowDown size={18} />
              </a>

              <a
                className="button button-secondary"
                href="/Chaima_Kaboudi_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV
                <ExternalLink size={17} />
              </a>

              <a
                className="button button-secondary"
                href="#contact"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/chaima333"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/chaima-kaboudi-b79782302/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Chaima Kaboudi Profile Visual"
          >
            <div className="glow-backdrop" />
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-photo-card">
              <img
                src="/chaima-profile.png"
                alt="Chaima Kaboudi - Full Stack Engineer"
                className="profile-photo"
              />

              <div className="card-overlay" />
            </div>

            <div className="floating-tag tag-top">
              <Code2 size={16} />
              <span>Software Engineer</span>
            </div>

            <div className="floating-tag tag-bottom">
              <Globe size={16} />
              <span>
                Full Stack Developer
              </span>
            </div>
          </div>
        </section>

        <section
          className="about section-wrap section-block"
          id="about"
        >
          <div className="section-heading">
            <p className="eyebrow">
              01 — ABOUT ME
            </p>

            <h2>
              Engineering with passion.
              <br />
              <span className="gradient-text">
                Building for impact.
              </span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-card highlight-card">
              <p className="about-lead">
                I bridge technical precision
                with intuitive digital design to
                create web products that solve
                complex real-world challenges.
              </p>
            </div>

            <div className="about-card details-card">
              <p>
                Software Engineer from{" "}
                <strong>
                  EPI Digital School
                </strong>{" "}
                in Sousse, Tunisia. I focus on
                developing enterprise-level
                applications, integrating AI
                workflows, and optimizing modern
                web systems.
              </p>

              <p>
                My experience spans SaaS
                architectures, client-focused
                freelance projects, and advanced
                AI implementations using RAG
                architectures and vector
                databases.
              </p>

              <a
                className="text-link"
                href="#contact"
              >
                Let's discuss opportunities
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="projects section-wrap section-block"
          id="experience"
        >
          <div className="section-heading">
            <p className="eyebrow">
              02 — PROFESSIONAL EXPERIENCE
            </p>

            <h2>
              Real-World SaaS &{" "}
              <span className="gradient-text">
                Platforms
              </span>
            </h2>

            <p className="section-subtitle">
              Key projects focused on SaaS
              architecture, multi-tenancy, and AI
              integration.
            </p>
          </div>

          <ProjectList
            projects={experienceProjects}
          />
        </section>

        <section
          className="projects section-wrap section-block"
          id="freelance"
        >
          <div className="section-heading">
            <p className="eyebrow">
              03 — FREELANCE WORK
            </p>

            <h2>
              Delivering Value to{" "}
              <span className="gradient-text">
                Businesses
              </span>
            </h2>

            <p className="section-subtitle">
              Custom digital storefronts and
              tailored web solutions for brands.
            </p>
          </div>

          <ProjectList
            projects={freelanceProjects}
          />
        </section>

        <section
          className="projects section-wrap section-block"
          id="projects"
        >
          <div className="section-heading">
            <p className="eyebrow">
              04 — ACADEMIC PROJECTS
            </p>

            <h2>
              Continuous Learning &{" "}
              <span className="gradient-text">
                Innovation
              </span>
            </h2>

            <p className="section-subtitle">
              Architectural projects developed
              during software engineering
              studies.
            </p>
          </div>

          <ProjectList
            projects={academicProjects}
          />
        </section>

        <section
          className="skills section-block"
          id="skills"
        >
          <div className="section-wrap">
            <div className="section-heading center">
              <p className="eyebrow">
                05 — TECHNICAL SKILLS
              </p>

              <h2>
                My Tech{" "}
                <span className="gradient-text">
                  Toolkit
                </span>
              </h2>

              <p className="section-subtitle">
                Core technologies and frameworks
                I use daily to build
                production-grade web systems.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map(
                (skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <article
                      className="skill-card"
                      key={skill.title}
                    >
                      <div className="skill-card-top">
                        <div className="icon-wrapper">
                          <Icon size={24} />
                        </div>

                        <span className="skill-number">
                          0{index + 1}
                        </span>
                      </div>

                      <h3>{skill.title}</h3>

                      <ul className="skill-list">
                        {skill.items.map(
                          (item) => (
                            <li key={item}>
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </article>
                  );
                }
              )}
            </div>
          </div>
        </section>

        <section
          className="contact section-block"
          id="contact"
        >
          <div className="section-wrap contact-inner">
            <div className="contact-badge">
              <Sparkles size={16} />
              HAVE A PROJECT OR POSITION IN
              MIND?
            </div>

            <h2>
              Let's create something
              <br />
              <span className="gradient-text">
                extraordinary together.
              </span>
            </h2>

            <p className="contact-desc">
              Whether you're looking for a
              dedicated Full Stack Engineer, a
              technical co-builder, or have an
              exciting project—feel free to drop
              a message!
            </p>

            <a
              className="button button-cta"
              href="mailto:kaboudichaima123@gmail.com"
            >
              <Mail size={20} />

              <span>
                kaboudichaima123@gmail.com
              </span>

              <ArrowUpRight size={20} />
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/chaima333"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
                <ExternalLink size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/chaima-kaboudi-b79782302/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a
          className="brand"
          href="#home"
        >
          CK<span className="brand-dot">.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Chaima
          Kaboudi. All rights reserved.
        </p>

        <a
          href="#home"
          className="back-top"
        >
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}