import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { href: "#problema", label: "El Problema" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#impacto", label: "Impacto" },
  { href: "#talleres", label: "Talleres" },
  { href: "#productos", label: "Productos" },
  { href: "#alianzas", label: "Alianzas" },
  { href: "#ley", label: "Iniciativa" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass soft-shadow" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-primary">
          <span className="size-9 rounded-full gradient-deep grid place-items-center text-primary-foreground">
            <Heart className="size-4" fill="currentColor" />
          </span>
          <span className="text-base">MenstruAcción <span className="text-accent">Qro</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#unete"
            className="inline-flex items-center rounded-2xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-foreground transition-colors"
          >
            Únete
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${open ? "visible" : "invisible"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background p-6 shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-bold text-primary">Menú</span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar"><X /></button>
          </div>
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2 border-b border-border"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#unete"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-2xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              Únete
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
