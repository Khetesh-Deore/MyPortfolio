import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Trophy,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  Download,
  FileCode,
} from "lucide-react";
import {
  profile,
  education,
  skills,
  experience,
  projects,
  achievements,
  certifications,
  leadership,
} from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SectionTitle({
  icon: Icon,
  kicker,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  title: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mb-12 flex flex-col items-start gap-3"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-mono uppercase tracking-widest text-accent">
        <Icon className="h-3.5 w-3.5" />
        {kicker}
      </div>
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </motion.div>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [active, setActive] = useState("home");

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Awards" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handler = () => {
      for (const s of nav) {
        const el = document.getElementById(s.id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActive(s.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Hidden SEO text — readable by crawlers, invisible to users */}
      <div className="sr-only" aria-hidden="true">
        <h1>Khetesh Deore — Official Portfolio</h1>
        <p>
          Khetesh Deore, also known as Khetesh Samadhan Deore, is an AI and Full Stack Developer
          from Nashik, Maharashtra, India. He is a third-year B.Tech Computer Engineering student
          with Honours in Quantum Computing at K.K. Wagh Institute of Engineering Education and
          Research (KKWIEER), Nashik. Khetesh Deore is a Software Engineer Intern at XMEGA Technologies,
          Smart India Hackathon 2024 Finalist, Innovera National Hackathon 2025 Winner (1st Place),
          AI Innovation Sprint 2026 2nd Place, E-Cell IIT Bombay NEC 2025 Zonal Finalist (Top 500
          of 15,000+ teams), and Google Student Ambassador. He specialises in MERN stack, React.js,
          Node.js, Python, TypeScript, Machine Learning, Blockchain, Solidity, and system design.
          Contact Khetesh Deore at khetesh.works@gmail.com. GitHub: github.com/Khetesh-Deore.
          LinkedIn: linkedin.com/in/khetesh-deore. Portfolio: kheteshdeore.me.
        </p>
      </div>

      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-hero"
      />

      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />

      {/* Navbar */}
      <header className="fixed left-1/2 top-4 z-50 w-[min(94%,1100px)] -translate-x-1/2">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#home" className="font-mono text-sm font-bold tracking-wider">
            <span className="text-gradient">KHETESH</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    active === n.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-105"
            >
              <Download className="h-3 w-3" /> Resume
            </a>
            <a
              href={profile.emailUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-hero px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105"
            >
              Hire Me <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main>
      <section
        id="home"
        aria-label="Hero — Khetesh Deore, AI & Full Stack Developer"
        className="relative flex min-h-screen items-center px-6 pt-32 sm:px-10"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
              Available for opportunities
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hello, I'm{" "}
              <span className="text-gradient">Khetesh Deore</span>
              <br />
              <span className="text-foreground/80">a Professional</span>{" "}
              <span className="text-gradient">{profile.role}</span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-105"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a
                href={profile.emailUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Github, href: profile.links.github },
                { icon: Linkedin, href: profile.links.linkedin },
                { icon: Code2, href: profile.links.leetcode },
                { icon: FileCode, href: profile.links.codeforces },
                { icon: Mail, href: profile.emailUrl },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* code card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-hero opacity-30 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-card">
              <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  developer.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-muted-foreground">
{`const khetesh = {
  name: "${profile.name}",
  role: "${profile.role}",
  location: "${profile.location}",
  stack: ["MERN", "AI/ML", "Blockchain"],
  cgpa: 8.84,
  passion: () => "build > talk",
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" aria-label="About Khetesh Deore" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle icon={Sparkles} kicker="Who I Am" title="About Me" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid gap-8 lg:grid-cols-3"
          >
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card-gradient p-8 shadow-card">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.summary}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { v: "8.84", l: "CGPA" },
                  { v: "9+", l: "Projects" },
                  { v: "7+", l: "Awards" },
                  { v: "3+", l: "Hackathons" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-border bg-background/40 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-gradient">{s.v}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent">
                <GraduationCap className="h-4 w-4" /> Education
              </h3>
              {education.map((e) => (
                <div
                  key={e.school}
                  className="rounded-xl border border-border bg-card/50 p-4"
                >
                  <div className="text-sm font-semibold">{e.school}</div>
                  <div className="text-xs text-muted-foreground">{e.degree}</div>
                  <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-accent">
                    <span>{e.period}</span>
                    <span>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" aria-label="Work Experience" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle icon={Briefcase} kicker="Career" title="Experience" />
          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card-gradient p-6 shadow-card transition-all hover:border-primary/50 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">{exp.role}</h3>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {exp.company} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" aria-label="Projects by Khetesh Deore" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle icon={Code2} kicker="Selected Work" title="Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, idx) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card-gradient p-6 shadow-card transition-all hover:border-primary/60 hover:shadow-neon"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-hero opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {p.tag}
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span>{p.role}</span>
                  <span>{p.period}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" aria-label="Skills and Tech Stack" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle icon={Sparkles} kicker="Toolkit" title="Skills & Stack" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([cat, list]) => (
              <motion.div
                key={cat}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card-gradient p-5 shadow-card"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {cat}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" aria-label="Achievements and Awards" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle icon={Trophy} kicker="Recognition" title="Achievements" />
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 rounded-2xl border border-border bg-card-gradient p-5 shadow-card transition-all hover:border-primary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-hero text-primary-foreground shadow-neon">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Leadership */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent">
                <Award className="h-4 w-4" /> Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((c) => (
                  <a
                    key={c.title}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/50"
                  >
                    <div>
                      <div className="text-sm font-semibold">{c.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {c.issuer}
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-accent">
                      {c.date}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent">
                <Users className="h-4 w-4" /> Leadership
              </h3>
              <div className="space-y-3">
                {leadership.map((l) => (
                  <div
                    key={l.role + l.org}
                    className="rounded-xl border border-border bg-card/50 p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-semibold">{l.role}</div>
                        <div className="text-xs text-primary">{l.org}</div>
                      </div>
                      <span className="font-mono text-[11px] text-accent">
                        {l.period}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {l.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-label="Contact Khetesh Deore" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-border bg-card-gradient p-10 text-center shadow-card sm:p-16"
          >
            <div className="absolute inset-0 -z-10 opacity-40 [background:var(--gradient-glow)]" />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
              <Mail className="h-3 w-3" /> Let's Connect
            </div>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Let's <span className="text-gradient">build</span> something great.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to internships, collaborations and freelance work. Drop a
              message — I usually respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.emailUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-105"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {profile.phone}
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {profile.location}
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center font-mono text-xs text-muted-foreground sm:px-10">
        © {new Date().getFullYear()} {profile.name} 
      </footer>
    </div>
  );
}
