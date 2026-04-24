import { Outlet, Link, createRootRoute, HeadContent, ScrollRestoration, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import "../styles.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-electric">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-gradient-electric px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "description", content: "Portafolio de desarrollador frontend especializado en React, TypeScript y animaciones modernas." },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <ScrollRestoration />
      <HeadContent />
      <Scripts />
    </>
  );
}
