import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor } from "lucide-react";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    links: [
      {
        rel:"icon",
        href: "/og-image-removebg-preview.png"
      },
    ],
    meta: [
      { title: "Proyectos · Federico Pelourson" },
      { name: "description", content: "Selección de proyectos de desarrollo frontend con React, TypeScript y más." },
    ],
  }),
  component: Proyectos,
});

const projects = [
  {
    title: "Dessert store",
    desc: "Frontend de tienda de postres con contador y carrito de compras.",
    tags: ["React", "Typescript", "Tailwind css", "Zustand"],
    color: "from-blue-500 to-cyan-400",
    image: "/active-states.jpg",
    demoUrl: "https://product-list-with-cart-dessert.netlify.app/",
    repoUrl: "https://github.com/Fpelourson/Product-list-with-cart",
  },
  {
    title: "Newsletter-Sing-Up",
    desc: "Logeo con requerimientos de email validos.",
    tags: ["React", "Typescript", "Tailwind css", "Github"],
    color: "from-blue-500 to-cyan-400",
    image: "/desktop-design.jpg",
    demoUrl: "https://newsletter-sing.netlify.app/",
    repoUrl: "https://github.com/Fpelourson/Newsletter-Sing-Up",
  },
  {
    title: "Saber es clave",
    desc: "Juego de preguntas y respuestas con un orden random y utilizando el localstorage.",
    tags: ["Javascript", "CSS", "html"],
    color: "from-cyan-500 to-blue-500",
    image: "/saber.png",
    demoUrl: "https://saber-es-clave.netlify.app/",
    repoUrl: "https://github.com/Fpelourson/Coderhouse",
  },
  {
    title: "Clon Spotify",
    desc: "Practica de diseño con la pagina oficial de spotify 2024.",
    tags: ["html", "CSS", "Javascript"],
    color: "from-indigo-500 to-blue-400",
    image: "/spotify.png",
    demoUrl: "https://spotify-clon-byfederico.netlify.app/",
    repoUrl: "https://github.com/Fpelourson/Clon-Spotify",
  },
  
  // {
  //   title: "App de Música",
  //   desc: "Reproductor con visualizador de audio 3D y recomendaciones IA.",
  //   tags: ["React", "Web Audio", "Three.js"],
  //   color: "from-blue-500 to-purple-500",
  //   image: "/music.png",
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
  // {
  //   title: "Editor Visual",
  //   desc: "Constructor drag & drop para landing pages con render server-side.",
  //   tags: ["React", "DnD Kit", "Vite"],
  //   color: "from-sky-500 to-blue-600",
  //   image: "/editor.png",
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Proyectos <span className="text-gradient-electric">recientes</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Una selección de trabajos donde combino diseño, código y experiencias interactivas.
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
                {p.image && (
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div
                  className="absolute right-6 top-6 h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 animate-float flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Monitor className="text-white/40 w-12 h-12" />
                </div>
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
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-electric transition-colors">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-electric transition-colors">
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
