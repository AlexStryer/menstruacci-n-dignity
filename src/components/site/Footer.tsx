import { Facebook, Instagram, Mail } from "lucide-react";

const cols = [
  {
    title: "Explora",
    links: [
      ["#problema", "El Problema"],
      ["#nosotras", "Nosotras"],
      ["#impacto", "Impacto"],
      ["#talleres", "Talleres"],
    ],
  },
  {
    title: "Participa",
    links: [
      ["#productos", "Solicita productos"],
      ["#alianzas", "Alianzas"],
      ["#unete", "Únete"],
      ["#ley", "Iniciativa de ley"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display font-bold text-xl">MenstruAcción <span className="text-accent">Qro</span></div>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
            Colectiva por la dignidad menstrual en Querétaro y México.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {c.links.map(([href, label]) => (
                <li key={href}><a href={href} className="hover:text-accent">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-display font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-3">
            <a href="mailto:menstruaccionqro@gmail.com" aria-label="Correo" className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-foreground transition"><Mail className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-foreground transition"><Facebook className="size-4" /></a>
            <a href="#" aria-label="Instagram" className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-foreground transition"><Instagram className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 text-xs text-primary-foreground/60 text-center">
          MenstruAcción Querétaro © 2026. Por más menstruaciones dignas.
        </div>
      </div>
    </footer>
  );
}
