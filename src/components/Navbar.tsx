import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Download, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const links = [
    { to: "/" as const, label: "Inicio" },
    { to: "/proyectos" as const, label: "Proyectos" },
    { to: "/contacto" as const, label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-electric blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <Code2 className="relative h-7 w-7 text-electric" />
          </div>
          <span className="font-mono text-sm tracking-widest text-foreground">
            &lt;DEV/&gt;
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-electric" }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-electric transition-colors relative group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-electric group-hover:w-1/2 transition-all" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-electric transition-colors hover:scale-110">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-electric transition-colors hover:scale-110">
            <Linkedin className="h-5 w-5" />
          </a>
          <Button asChild size="sm" className="ml-2 bg-gradient-electric text-primary-foreground hover:opacity-90 shadow-glow font-semibold">
            <a href="/cv.pdf" download>
              <Download className="h-4 w-4 mr-2" /> CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
