import { useEffect } from "react";
import {
  ArrowDown,
  Users,
  TrendingDown,
  Scale,
  GraduationCap,
  BookOpen,
  Scissors,
  MessagesSquare,
  PlayCircle,
  BarChart3,
  Download,
  ArrowRight,
  Send,
  Handshake,
  HeartHandshake,
  FileText,
  Mail,
  Facebook,
  Instagram,
  MapPin,
  Sparkles,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StatCounter } from "@/components/site/StatCounter";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-workshop.jpg";
import illustration from "@/assets/illustration-women.png";
import mapImg from "@/assets/queretaro-map.png";

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-60 animate-blob ${className}`}
    />
  );
}

export default function App() {
  useReveal();

  useEffect(() => {
    document.title = "MenstruAcción Querétaro";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center isolate"
      >
        <img
          src={heroImg}
          alt="Mujeres en taller comunitario de salud menstrual"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1600}
          height={1024}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.42 0.11 295 / .92) 0%, oklch(0.42 0.11 295 / .75) 40%, oklch(0.42 0.11 295 / .35) 100%)",
          }}
        />
        <Blob className="-z-10 size-[420px] left-[-80px] top-1/3 bg-[var(--lilac)]" />
        <Blob className="-z-10 size-[300px] right-[-60px] bottom-10 bg-[var(--rose)]" />

        <div className="mx-auto max-w-[1200px] px-6 w-full pt-24 pb-16">
          <div className="max-w-2xl text-primary-foreground reveal">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium tracking-wide">
              <Sparkles className="size-3.5" /> Premio Eugenio Garza Sada 2023
            </span>
            <h1 className="mt-6 font-display font-bold text-4xl md:text-6xl leading-[1.05] text-balance">
              Por más menstruaciones <em className="not-italic text-accent">dignas</em>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl">
              Nuestro objetivo es que todas las mujeres y personas menstruantes puedan
              acceder a una menstruación digna.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#nosotras"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/80 px-6 py-3 font-semibold hover:bg-white hover:text-primary transition"
              >
                Conócenos
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center rounded-2xl bg-accent text-foreground px-6 py-3 font-semibold hover:bg-white transition soft-shadow"
              >
                Solicita apoyo
              </a>
            </div>
          </div>
        </div>

        <a
          href="#problema"
          aria-label="Bajar"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/90 animate-bounce-slow"
        >
          <ArrowDown />
        </a>
      </section>

      {/* PROBLEMA */}
      <Section id="problema" className="relative bg-muted">
        <Blob className="size-[300px] -top-10 right-10 bg-[var(--rose)]" />
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">El Problema</span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            La realidad de la pobreza menstrual
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, num: <StatCounter value={1200000} />, text: "mujeres en Querétaro, el 51.2% de la población" },
            { icon: TrendingDown, num: <StatCounter value={29} suffix="%" />, text: "de ellas vive en situación de pobreza" },
            { icon: Scale, num: "Toallas o comida", text: "Miles de mujeres deben elegir entre productos de higiene o alimentación" },
            { icon: GraduationCap, num: "Ausentismo escolar", text: "Muchas jóvenes faltan a clases durante su periodo menstrual" },
          ].map((c, i) => {
            const Icon = c.icon;
            const isText = typeof c.num === "string";
            return (
              <div
                key={i}
                className="reveal glass rounded-2xl p-6 soft-shadow flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Icon className="size-6" strokeWidth={1.5} />
                </div>
                <div
                  className={`mt-5 font-display font-bold text-primary ${
                    isText ? "text-2xl" : "text-4xl md:text-5xl"
                  }`}
                >
                  {c.num}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-12 max-w-3xl mx-auto text-center text-muted-foreground reveal">
          La pobreza menstrual es un problema sistémico que afecta la educación, la salud y la
          dignidad de las mujeres y personas menstruantes. Hablar de menstruación es hablar de
          derechos humanos.
        </p>
      </Section>

      {/* NOSOTRAS */}
      <Section id="nosotras" className="relative bg-background">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Sobre Nosotras</span>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
              Una colectiva que <span className="text-primary">transforma</span> realidades.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Nos consolidamos en 2020 como grupo estudiantil en el Tec de Monterrey campus
              Querétaro, surgiendo de los grupos <strong>Gender Watch</strong> y{" "}
              <strong>Girl Up</strong>. Participamos en Actuatec y comenzamos llevando productos
              de higiene a comunidades de la sierra queretana.
            </p>
            <p className="mt-4 text-muted-foreground">
              Hoy somos un equipo de <strong>6 personas con estructura horizontal</strong>, más{" "}
              <strong>5 talleristas egresadas de la UAQ</strong>, trabajando para que la
              menstruación deje de ser un obstáculo.
            </p>
          </div>
          <div className="relative reveal">
            <Blob className="size-[300px] -top-6 -left-6 bg-[var(--lilac)]" />
            <div className="relative rounded-3xl bg-muted p-8 soft-shadow">
              <img
                src={illustration}
                alt="Ilustración de mujeres y elementos menstruales"
                className="w-full h-auto"
                loading="lazy"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 reveal">
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-center">
            Nuestra trayectoria
          </h3>
          <div className="relative mt-12 overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max px-2">
              {[
                ["2020", "Consolidación como colectiva"],
                ["2021", "Primeros voluntariados en la sierra"],
                ["2022", "Reforma a la Ley 7 del IQM aprobada"],
                ["2023", "Premio Eugenio Garza Sada"],
                ["2024", "Documental \"Más allá del mes\""],
                ["2025", "Colaboración con la Anáhuac"],
                ["2026", "Nuevas iniciativas legislativas"],
              ].map(([year, label], i) => (
                <div key={year} className="w-56 text-center">
                  <div className="relative">
                    <div className="size-5 rounded-full bg-primary mx-auto soft-shadow ring-8 ring-accent/30" />
                    {i < 6 && (
                      <svg
                        className="absolute top-2 left-1/2 w-[224px] h-8 text-secondary"
                        viewBox="0 0 224 32"
                        fill="none"
                      >
                        <path
                          d="M0 16 Q56 -10 112 16 T224 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 6"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="mt-4 font-display font-bold text-primary text-xl">{year}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* IMPACTO */}
      <Section id="impacto" className="gradient-soft">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Nuestro Impacto</span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            El impacto que hemos generado
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { num: <><span className="text-accent">+</span><StatCounter value={1400} /></>, label: "personas impactadas" },
            { num: <StatCounter value={18} />, label: "municipios atendidos" },
            { num: <><span className="text-accent">+</span><StatCounter value={60} /></>, label: "talleres y pláticas" },
            { num: <StatCounter value={1} />, label: "reforma de ley aprobada" },
            { num: <StatCounter value={1} />, label: "documental producido" },
          ].map((s, i) => (
            <div
              key={i}
              className="reveal text-center rounded-3xl bg-card p-6 soft-shadow border border-border/60"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="font-display font-bold text-primary text-3xl md:text-4xl">
                {s.num}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal relative">
            <img
              src={mapImg}
              alt="Mapa ilustrado de Querétaro con municipios atendidos"
              className="w-full h-auto"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="reveal">
            <h3 className="font-display font-semibold text-2xl md:text-3xl">
              Presentes en 18 municipios
            </h3>
            <p className="mt-4 text-muted-foreground">
              Llegamos hasta donde más se necesita: desde la zona metropolitana hasta las
              comunidades de la sierra queretana.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {[
                "San Juan del Río",
                "Huimilpan",
                "Tequisquiapan",
                "Pinal de Amoles",
                "Amealco",
                "Zona Metropolitana",
              ].map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm">
                  <MapPin className="size-4 text-accent" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TALLERES */}
      <Section id="talleres" className="bg-background">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Educación</span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            Nuestros talleres
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {[
            {
              icon: BookOpen,
              title: "Educación menstrual",
              text: "Anatomía, productos de gestión menstrual, autonomía corporal y políticas públicas. Conocimiento para decidir libremente sobre nuestro cuerpo.",
            },
            {
              icon: Scissors,
              title: "Taller de toallas de tela",
              text: "Enseñamos a elaborar productos reutilizables como alternativa accesible, sustentable y digna.",
            },
            {
              icon: MessagesSquare,
              title: "Pláticas de concientización",
              text: "Espacios seguros donde mujeres comparten experiencias, rompen tabúes y construyen comunidad.",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="reveal flex flex-col md:flex-row gap-6 items-start rounded-3xl bg-card border border-border/60 p-6 md:p-8 hover:border-accent transition soft-shadow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="size-16 rounded-2xl gradient-deep grid place-items-center text-primary-foreground shrink-0">
                  <Icon className="size-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-primary">{c.title}</h3>
                  <p className="mt-2 text-muted-foreground">{c.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toolkit callout */}
        <div className="reveal mt-12 rounded-3xl bg-accent/60 p-8 md:p-10 relative overflow-hidden">
          <Blob className="size-[260px] -top-10 -right-10 bg-[var(--lilac)] opacity-50" />
          <div className="relative max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase">
              Toolkit
            </span>
            <h3 className="mt-3 font-display font-semibold text-2xl md:text-3xl">
              Replica MenstruAcción en tu comunidad
            </h3>
            <p className="mt-4 text-foreground/80">
              Programa que comienza con una sesión de difusión seguida de capacitaciones por
              Zoom para que personas en otros estados puedan replicar nuestras actividades en
              sus comunidades.
            </p>
            <a
              href="#productos"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-foreground transition"
            >
              Solicita un taller para tu comunidad
            </a>
          </div>
        </div>
      </Section>

      {/* APRENDE CON NOSOTRAS */}
      <Section id="aprende" className="bg-background relative overflow-hidden">
        <Blob className="size-[360px] -top-20 -left-20 bg-[var(--lilac)] opacity-30" />
        <Blob className="size-[300px] bottom-0 -right-10 bg-[var(--rose)] opacity-30" />

        <div className="text-center max-w-2xl mx-auto reveal relative">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Recursos
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            Aprende con Nosotras
          </h2>
          <p className="mt-5 text-muted-foreground text-balance">
            Accede a nuestros cursos y materiales educativos sobre salud menstrual desde
            cualquier lugar.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              tag: "Curso",
              icon: GraduationCap,
              title: "Educación Menstrual Básica",
              text: "Conoce tu cuerpo, los productos de gestión menstrual y cómo vivir tu ciclo de forma plena.",
              format: "4 sesiones por Zoom",
              gradient: "from-[var(--deep)] to-[var(--lilac)]",
            },
            {
              tag: "Guía",
              icon: Scissors,
              title: "Elabora tu Toalla de Tela",
              text: "Aprende paso a paso a crear tus propios productos de higiene reutilizables.",
              format: "PDF descargable",
              gradient: "from-[var(--lilac)] to-[var(--rose)]",
            },
            {
              tag: "Video",
              icon: PlayCircle,
              title: "Más Allá del Mes",
              text: "Nuestro documental que visibiliza la realidad de la pobreza menstrual en comunidades de Querétaro.",
              format: "Documental completo",
              gradient: "from-[var(--rose)] to-[var(--deep)]",
            },
            {
              tag: "Infografía",
              icon: BarChart3,
              title: "Pobreza Menstrual en Datos",
              text: "Conoce las cifras y la realidad que enfrentan miles de mujeres en México.",
              format: "Imagen descargable",
              gradient: "from-[var(--deep)] to-[var(--rose)]",
            },
            {
              tag: "Curso",
              icon: GraduationCap,
              title: "Autonomía Corporal",
              text: "Un espacio seguro para aprender sobre tu cuerpo, tus derechos y cómo ejercerlos.",
              format: "3 sesiones por Zoom",
              gradient: "from-[var(--lilac)] to-[var(--deep)]",
            },
            {
              tag: "Guía",
              icon: Download,
              title: "Toolkit MenstruAcción",
              text: "Todo lo que necesitas para replicar nuestras actividades en tu comunidad.",
              format: "Kit digital descargable",
              gradient: "from-[var(--rose)] to-[var(--lilac)]",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={i}
                className="reveal group flex flex-col rounded-3xl bg-card border border-border/60 overflow-hidden hover:border-accent hover:-translate-y-1 transition-all duration-300 soft-shadow"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className={`relative h-44 bg-gradient-to-br ${c.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[var(--lilac)]/30 mix-blend-soft-light" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Icon
                      className="size-16 text-white/90 group-hover:scale-110 transition-transform duration-500"
                      strokeWidth={1.2}
                    />
                  </div>
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-primary">
                    {c.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display font-semibold text-lg text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.text}</p>
                  <p className="mt-4 text-xs font-medium text-foreground/70 flex items-center gap-2">
                    <span className="inline-block size-1.5 rounded-full bg-accent" />
                    {c.format}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition self-start"
                  >
                    Ver más
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="reveal relative mt-14 rounded-3xl p-8 md:p-12 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(120deg, color-mix(in oklab, var(--lilac) 70%, white), color-mix(in oklab, var(--rose) 75%, white))",
          }}
        >
          <Blob className="size-[260px] -top-12 -right-12 bg-white opacity-40" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-primary text-balance">
                ¿Quieres que llevemos un taller a tu escuela o comunidad?
              </h3>
              <p className="mt-3 text-foreground/75">
                Diseñamos experiencias educativas a la medida para escuelas, colectivos y
                organizaciones en todo México.
              </p>
            </div>
            <a
              href="#productos"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-foreground transition"
            >
              Solicita un taller
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Section>

      <Section id="productos" className="bg-muted">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Solicita Productos</span>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
              ¿Tu comunidad necesita productos de higiene menstrual?
            </h2>
            <p className="mt-6 text-muted-foreground">
              Contamos con insumos como toallas y tampones, y buscamos hacerlos llegar a quien
              más los necesita. Cuéntanos sobre tu comunidad y nos pondremos en contacto.
            </p>
            <div className="mt-8 rounded-2xl bg-card p-6 border border-border/60 soft-shadow">
              <p className="font-display italic text-primary">
                "Cada mujer merece vivir su menstruación con dignidad, no con vergüenza."
              </p>
            </div>
          </div>

          <FormCard onSubmit={(e) => e.preventDefault()} title="Cuéntanos">
            <Field label="Nombre completo"><input className={inputCls} placeholder="Tu nombre" /></Field>
            <Field label="Comunidad, municipio y estado"><input className={inputCls} placeholder="Ej. Pinal de Amoles, Querétaro" /></Field>
            <Field label="Correo o teléfono"><input className={inputCls} placeholder="contacto@ejemplo.mx" /></Field>
            <Field label="Mujeres beneficiadas (aprox.)"><input type="number" className={inputCls} placeholder="50" /></Field>
            <Field label="Mensaje"><textarea rows={4} className={inputCls} placeholder="Describe la necesidad..." /></Field>
            <SubmitBtn>Enviar solicitud</SubmitBtn>
          </FormCard>
        </div>
      </Section>

      {/* ALIANZAS */}
      <Section id="alianzas" className="bg-background">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Alianzas</span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            Trabajemos juntas
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nos aliamos con organizaciones de salud sexual, derechos de las mujeres,
            educación, fundaciones, instituciones y gobierno.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Tec de Monterrey", "FEMSA", "Universidad Anáhuac", "SEJUVE"].map((p) => (
            <div
              key={p}
              className="rounded-2xl bg-muted p-6 grid place-items-center text-center font-display font-semibold text-muted-foreground hover:text-primary hover:bg-accent/30 transition grayscale hover:grayscale-0 cursor-default"
            >
              <Handshake className="size-6 mb-2" strokeWidth={1.5} />
              {p}
            </div>
          ))}
        </div>

        <div className="reveal mt-14 max-w-2xl mx-auto">
          <FormCard onSubmit={(e) => e.preventDefault()} title="Propón una alianza">
            <Field label="Nombre de la organización"><input className={inputCls} /></Field>
            <Field label="Tipo de organización">
              <select className={inputCls}>
                <option>Fundación</option>
                <option>Institución educativa</option>
                <option>Gobierno</option>
                <option>Empresa</option>
                <option>Otra</option>
              </select>
            </Field>
            <Field label="Propuesta de colaboración"><textarea rows={4} className={inputCls} /></Field>
            <Field label="Contacto"><input className={inputCls} /></Field>
            <SubmitBtn>Proponer alianza</SubmitBtn>
          </FormCard>
        </div>
      </Section>

      {/* ÚNETE */}
      <section id="unete" className="relative py-24 md:py-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-deep" />
        <Blob className="-z-10 size-[400px] -left-20 top-10 bg-white/10" />
        <Blob className="-z-10 size-[300px] right-0 bottom-0 bg-[var(--rose)]/30" />

        <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Únete</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl text-balance">
              No necesitas estar en Querétaro para hacer la diferencia.
            </h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Buscamos personas en todo el país que quieran ser voluntarias, talleristas o
              apoyar desde la investigación y la difusión.
            </p>
            <div className="mt-8 flex items-center gap-3 text-primary-foreground/70">
              <HeartHandshake className="size-5 text-accent" />
              <span className="text-sm">Toda contribución cuenta.</span>
            </div>
          </div>

          <FormCard
            dark
            onSubmit={(e) => e.preventDefault()}
            title="Quiero ser parte"
          >
            <Field dark label="Nombre completo"><input className={darkInput} /></Field>
            <Field dark label="Estado donde vives"><input className={darkInput} /></Field>
            <Field dark label="Universidad o institución (opcional)"><input className={darkInput} /></Field>
            <Field dark label="Área de interés">
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {["Dar talleres", "Investigación", "Difusión en redes", "Logística"].map((o) => (
                  <label key={o} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 cursor-pointer hover:bg-white/15">
                    <input type="checkbox" className="accent-[var(--rose)]" />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </div>
            </Field>
            <Field dark label="Disponibilidad">
              <select className={darkInput}>
                <option>Unas horas al mes</option>
                <option>Un día a la semana</option>
                <option>Fines de semana</option>
                <option>Tiempo completo</option>
              </select>
            </Field>
            <Field dark label="Mensaje o motivación"><textarea rows={3} className={darkInput} /></Field>
            <button className="mt-2 w-full rounded-2xl bg-accent text-foreground py-3 font-semibold hover:bg-white transition">
              Quiero unirme
            </button>
          </FormCard>
        </div>
      </section>

      {/* INICIATIVA DE LEY */}
      <Section id="ley" className="bg-background">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Iniciativa de Ley</span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            Cambiando las leyes, cambiando vidas
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <ol className="relative border-l-2 border-dashed border-secondary ml-4 space-y-10">
            {[
              ["2021", "Envío de propuesta a través de la Legislatura Juvenil de SEJUVE"],
              ["2022 · Ene–Abr", "Trabajo con las legisladoras Ana Paola López Birlain y Maricruz Arellano Dorado para pulir la iniciativa"],
              ["2022 · Abril", "Foro con rueda de prensa para socializar la iniciativa"],
              ["2022 · Mayo", "Aprobación de la reforma a la Ley 7, fracción 30, del Instituto Queretano de las Mujeres"],
              ["2022 →", "Desarrollo de un paquete legislativo de perspectiva menstrual"],
              ["2025", "Colaboración con la Sociedad de Alumnos de Leyes de la Universidad Anáhuac"],
              ["2026", "Nuevas iniciativas en proceso de aprobación"],
            ].map(([year, text], i) => (
              <li key={i} className="reveal pl-8 relative" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="absolute -left-[18px] top-0 size-9 rounded-full bg-accent text-foreground grid place-items-center ring-4 ring-background">
                  <FileText className="size-4" />
                </span>
                <div className="font-display font-bold text-primary">{year}</div>
                <p className="text-muted-foreground mt-1">{text}</p>
              </li>
            ))}
          </ol>

          <blockquote className="reveal mt-14 rounded-3xl bg-muted p-8 md:p-10 relative">
            <Quote className="absolute -top-5 left-8 size-10 text-accent" />
            <p className="font-display italic text-xl md:text-2xl text-primary leading-relaxed">
              "Es un paso muy importante como colectiva, como estado y como estudiantes."
            </p>
          </blockquote>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" className="bg-muted">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Contacto</span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-balance">
            Acércate a nosotras
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            { icon: Mail, title: "Correo", value: "menstruaccionqro@gmail.com", href: "mailto:menstruaccionqro@gmail.com" },
            { icon: Facebook, title: "Facebook", value: "MenstruAcción Querétaro", href: "#" },
            { icon: Instagram, title: "Instagram", value: "@menstruaccionqro · 1,336 seguidores", href: "#" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={i}
                href={c.href}
                className="reveal rounded-2xl bg-card p-6 border border-border/60 soft-shadow hover:border-accent transition group"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-accent group-hover:text-foreground transition">
                  <Icon className="size-5" />
                </div>
                <div className="mt-4 font-display font-semibold text-primary">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1 break-all">{c.value}</div>
              </a>
            );
          })}
        </div>

        <div className="reveal mt-12 max-w-2xl mx-auto">
          <FormCard onSubmit={(e) => e.preventDefault()} title="Escríbenos">
            <Field label="Nombre"><input className={inputCls} /></Field>
            <Field label="Correo"><input className={inputCls} /></Field>
            <Field label="Asunto"><input className={inputCls} /></Field>
            <Field label="Mensaje"><textarea rows={4} className={inputCls} /></Field>
            <SubmitBtn>Enviar mensaje</SubmitBtn>
          </FormCard>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

/* ---------- form helpers ---------- */
const inputCls =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
const darkInput =
  "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition";

function Field({
  label,
  children,
  dark,
}: {
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <label className="block">
      <span className={`text-xs font-semibold ${dark ? "text-primary-foreground/80" : "text-foreground/70"} mb-1.5 block`}>
        {label}
      </span>
      {children}
    </label>
  );
}

function FormCard({
  title,
  children,
  onSubmit,
  dark,
}: {
  title: string;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler;
  dark?: boolean;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl p-6 md:p-8 space-y-4 ${
        dark ? "glass-dark soft-shadow" : "bg-card border border-border/60 soft-shadow"
      }`}
    >
      <h3 className={`font-display font-semibold text-xl ${dark ? "text-primary-foreground" : "text-primary"}`}>
        {title}
      </h3>
      {children}
    </form>
  );
}

function SubmitBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-foreground transition w-full sm:w-auto">
      <Send className="size-4" /> {children}
    </button>
  );
}
