import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos · Portafolio Frontend" },
      { name: "description", content: "Selección de proyectos de desarrollo frontend con React, Three.js y más." },
    ],
  }),
  component: Proyectos,
});

const projects = [
  {
    title: "Dashboard Analytics 3D",
    desc: "Plataforma de analítica con visualizaciones interactivas en tiempo real y gráficos 3D.",
    tags: ["React", "Three.js", "D3", "WebGL"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "E-commerce Premium",
    desc: "Tienda online con experiencia de producto en 3D, checkout optimizado y PWA.",
    tags: ["Next.js", "Stripe", "GSAP", "Tailwind"],
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Portal Inmobiliario",
    desc: "Tours virtuales con WebGL, mapas interactivos y búsqueda avanzada por filtros.",
    tags: ["React", "Mapbox", "Three.js"],
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "Plataforma SaaS",
    desc: "App de gestión empresarial multi-tenant con dashboards personalizables.",
    tags: ["TypeScript", "tRPC", "Prisma"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "App de Música",
    desc: "Reproductor con visualizador de audio 3D y recomendaciones IA.",
    tags: ["React", "Web Audio", "Three.js"],
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Editor Visual",
    desc: "Constructor drag & drop para landing pages con render server-side.",
    tags: ["React", "DnD Kit", "Vite"],
    color: "from-sky-500 to-blue-600",
  },
];

function Proyectos() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-electric mb-3">// portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Proyectos <span className="text-gradient-electric">recientes</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Una selección de trabajos donde combino diseño, código y un toque de magia 3D.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden glass hover:border-electric transition-all duration-500 hover:-translate-y-2"
              style={{ perspective: "1000px" }}
            >
              <div className={`relative h-52 bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div
                  className="absolute right-6 top-6 h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 animate-float"
                  style={{ transformStyle: "preserve-3d" }}
                />
                <div
                  className="absolute right-12 bottom-8 h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:-rotate-12 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-electric transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-electric/10 text-electric border border-electric/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 border-t border-border">
                  <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-electric transition-colors">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-electric transition-colors">
                    <Github className="h-4 w-4" /> Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
