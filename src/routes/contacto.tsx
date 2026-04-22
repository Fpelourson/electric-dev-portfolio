import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import emailjs from "@emailjs/browser";
import ogImage from "@/assets/og-image-removebg-preview.png";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    links: [
      {
        rel:"icon",
        href: ogImage
      },
    ],
    meta: [
      { title: "Contacto · Federico Pelourson" },
      { name: "description", content: "Hablemos sobre tu próximo proyecto frontend." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Reemplaza estos valores con los de tu cuenta de EmailJS
    const SERVICE_ID = "service_kob7qv9";
    const TEMPLATE_ID = "template_z07baob";
    const PUBLIC_KEY = "dX9pBOkpjvNZ8xN7c";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)
      .then(() => {
        toast.success("¡Mensaje enviado! Te contactaré pronto.");
        (e.target as HTMLFormElement).reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen px-6 py-16">
      <Toaster />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hagamos algo <span className="text-gradient-electric">increíble</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            ¿Tienes una idea? Escríbeme y conversemos sobre cómo darle vida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "fede_pelourson@hotmail.com", href: "mailto:fede_pelourson@hotmail.com" },
              { icon: Github, label: "GitHub", value: "@Fpelourson", href: "https://github.com/Fpelourson" },
              { icon: Linkedin, label: "LinkedIn", value: "federico-pelourson", href: "https://linkedin.com/in/federico-pelourson" },
              { icon: MapPin, label: "Ubicación", value: "Remoto · Europa" },
            ].map((c) => {
              const Inner = (
                <div className="flex items-start gap-4 p-5 rounded-xl glass hover:border-electric transition-all group">
                  <div className="p-3 rounded-lg bg-electric/10 group-hover:shadow-glow transition-shadow">
                    <c.icon className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    <div className="text-foreground font-medium mt-0.5">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block">{Inner}</a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 p-8 rounded-2xl glass space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Nombre</label>
                <Input name="user_name" required placeholder="Tu nombre" className="bg-surface border-border focus-visible:border-electric" />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                <Input name="user_email" required type="email" placeholder="tu@email.com" className="bg-surface border-border focus-visible:border-electric" />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Asunto</label>
              <Input name="subject" required placeholder="Sobre qué quieres hablar" className="bg-surface border-border focus-visible:border-electric" />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Mensaje</label>
              <Textarea name="message" required rows={6} placeholder="Cuéntame sobre tu proyecto..." className="bg-surface border-border focus-visible:border-electric resize-none" />
            </div>
            <Button type="submit" size="lg" disabled={sending} className="w-full bg-gradient-electric text-primary-foreground shadow-electric hover:opacity-90 font-semibold">
              {sending ? "Enviando..." : <>Enviar mensaje <Send className="ml-2 h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
