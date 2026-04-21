import { createFileRoute, Link } from "@tanstack/react-router";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Zap, Code, Layers } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inicio · Portafolio Frontend" },
      { name: "description", content: "Desarrollador frontend creando interfaces modernas con React, TypeScript y Three.js." },
    ],
  }),
  component: Index,
});

const skills = [
  { icon: Code, label: "React / TypeScript", desc: "Componentes escalables y tipados" },
  { icon: Layers, label: "Three.js / WebGL", desc: "Experiencias 3D inmersivas" },
  { icon: Zap, label: "Performance", desc: "Apps rápidas y optimizadas" },
  { icon: Sparkles, label: "UI / Animations", desc: "Interfaces fluidas y modernas" },
];

function Index() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-5rem)] grid-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-electric-glow">DISPONIBLE PARA PROYECTOS</span>
            </div>

            <div>
              <p className="font-mono text-sm text-muted-foreground mb-3">{'> hola_mundo.tsx'}</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                Construyo
                <br />
                <span className="text-gradient-electric">interfaces</span>
                <br />
                del futuro.
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Desarrollador frontend enfocado en crear experiencias web rápidas, accesibles
              y memorables con <span className="text-electric font-semibold">React</span>,{" "}
              <span className="text-electric font-semibold">TypeScript</span> y{" "}
              <span className="text-electric font-semibold">Three.js</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-electric text-primary-foreground shadow-electric hover:opacity-90 font-semibold">
                <Link to="/proyectos">
                  Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-electric/40 hover:bg-electric/10 hover:border-electric">
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Descargar CV
                </a>
              </Button>
            </div>

            <div className="flex gap-8 pt-4 font-mono text-sm">
              <div><div className="text-2xl font-bold text-electric">5+</div><div className="text-muted-foreground">años</div></div>
              <div><div className="text-2xl font-bold text-electric">40+</div><div className="text-muted-foreground">proyectos</div></div>
              <div><div className="text-2xl font-bold text-electric">∞</div><div className="text-muted-foreground">café</div></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-electric/20 blur-3xl rounded-full" />
            <div className="relative h-full w-full">
              <Scene3D />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="font-mono text-sm text-electric mb-3">// stack</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Tecnologías que <span className="text-gradient-electric">domino</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl glass hover:border-electric transition-all hover:-translate-y-2 duration-300"
              >
                <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-electric/10 mb-4 group-hover:shadow-glow transition-shadow">
                    <s.icon className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
