import Image from "next/image";
import {
  Warehouse,
  BookOpen,
  Users,
  MapPin,
  Radio,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  RotateCw,
  ClipboardList,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────────── NAV ───────────────────────────── */

function Nav() {
  const links = [
    "Preservation",
    "Books",
    "Consulting",
    "The Campus",
    "Garagecast",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/images/ocd-logo.png"
            alt="OCD Auto Storage"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="font-body text-sm text-text-primary transition-colors hover:text-gold"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:bg-gold-light lg:inline-block"
        >
          Inquire
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg">
      {/* Hero background image */}
      <Image
        src="/images/facility-hero.jpg"
        alt="OCD Auto Storage facility"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-32 text-center">
        <p className="mb-6 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Automotive Preservation Specialist
        </p>

        <h1 className="mx-auto max-w-4xl font-heading text-5xl font-light leading-[1.1] text-text-primary md:text-7xl lg:text-[96px]">
          The Science of Keeping What Matters
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
          Corey Lancaster wrote the definitive guide to automotive preservation.
          Then he built a facility around it. If you&apos;re serious about your
          collection, you&apos;ve found the right place.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#preservation"
            className="inline-block bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:bg-gold-light"
          >
            Explore Preservation
          </a>
          <a
            href="#books"
            className="inline-block border border-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:scale-[1.02] hover:border-gold-light hover:text-gold-light"
          >
            Browse the Books
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-muted">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

/* ───────────────────────── AUTHORITY ───────────────────────── */

function Authority() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 lg:grid-cols-[1fr_400px]">
        <div>
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
            The Authority
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-normal leading-snug text-text-primary md:text-5xl">
            There are facilities that store cars. And then there is OCD.
          </h2>
          <div className="mt-8 space-y-6 font-body text-base leading-relaxed text-text-secondary md:text-lg">
            <p>
              Corey Lancaster is a Virginia-based automotive preservation
              specialist, published author, and the founder of Obsessive Cars and
              Drivers. His two books &mdash; Preserve the Drive and Drivable Art
              &mdash; have established him as the definitive authority on the
              science and art of collector car preservation. His methodology
              doesn&apos;t start with a building. It starts with understanding
              what makes a vehicle collectible in the first place, and what
              silent forces work against it when owners aren&apos;t looking.
            </p>
            <p>
              OCD exists because no facility Corey encountered operated at the
              standard his cars deserved. So he built one that did.
            </p>
          </div>
        </div>

        {/* Facility photo */}
        <div className="relative hidden h-[500px] overflow-hidden border border-border lg:block">
          <Image
            src="/images/facility-01.jpg"
            alt="OCD Auto Storage — climate-controlled facility interior"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FACILITY GALLERY ─────────────────── */

function FacilityGallery() {
  const shots = [
    { src: "/images/facility-01.jpg", alt: "OCD Auto Storage — climate-controlled bay" },
    { src: "/images/facility-02.jpg", alt: "OCD Auto Storage — storage facility detail" },
    { src: "/images/facility-03.jpg", alt: "OCD Auto Storage — preservation environment" },
  ];

  return (
    <section className="bg-bg py-4">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {shots.map((shot) => (
            <div key={shot.src} className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              {/* Edge fade — softens hard crop edges into the dark background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.55) 100%),
                    linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.45) 100%)
                  `
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FIVE WAYS / SERVICES ─────────────────── */

const services = [
  {
    icon: Warehouse,
    title: "Preservation & Storage",
    description:
      "Virginia's only facility built on a published preservation methodology. Starting at $450/month.",
    cta: "Learn More",
  },
  {
    icon: BookOpen,
    title: "The Books",
    description:
      "Preserve the Drive and Drivable Art — the collector's handbook for protecting value, understanding provenance, and making informed decisions.",
    cta: "See the Books",
  },
  {
    icon: Users,
    title: "Consulting",
    description:
      "Remote preservation planning, pre-purchase evaluation, auction preparation, and collection strategy — available to collectors anywhere.",
    cta: "Work with Corey",
  },
  {
    icon: MapPin,
    title: "The Campus",
    description:
      "A private automotive campus is underway. A sovereign social club, membership model, and curated experiences. Currently invitation-adjacent.",
    cta: "Learn About the Vision",
  },
  {
    icon: Radio,
    title: "Garagecast.tv",
    description:
      "A community of serious collectors, enthusiasts, and preservation-minded owners. Join the conversation.",
    cta: "Visit Garagecast.tv",
  },
];

function Services() {
  return (
    <section id="preservation" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
          How We Work Together
        </p>
        <h2 className="max-w-2xl font-heading text-3xl font-normal leading-snug text-text-primary md:text-5xl">
          Five Paths to Preservation
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-border bg-surface p-8 transition-colors hover:border-gold"
            >
              <s.icon className="mb-6 text-gold" size={32} strokeWidth={1.5} />
              <h3 className="mb-3 font-body text-lg font-medium text-text-primary">
                {s.title}
              </h3>
              <p className="mb-6 font-body text-sm leading-relaxed text-text-secondary">
                {s.description}
              </p>
              <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-gold transition-colors group-hover:text-gold-light">
                {s.cta} <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── METHODOLOGY ──────────────────────── */

const protocols = [
  {
    icon: Thermometer,
    title: "Full Climate Control",
    desc: "Year-round temperature stability — continuous, not seasonal",
  },
  {
    icon: Droplets,
    title: "Precision Humidity Management",
    desc: "Continuous monitoring prevents corrosion before it starts",
  },
  {
    icon: Wind,
    title: "Advanced Air Purification",
    desc: "Filtered air eliminates airborne contaminants on paint and trim",
  },
  {
    icon: Zap,
    title: "Battery Tender Conditioning",
    desc: "Smart charging maintains battery health throughout storage",
  },
  {
    icon: RotateCw,
    title: "Tire Savers",
    desc: "Flat-spotting is preventable. Every vehicle, every time.",
  },
  {
    icon: ClipboardList,
    title: "Full Documentation",
    desc: "Every protocol logged — supports provenance and resale value",
  },
];

function Methodology() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
          The Difference
        </p>
        <h2 className="max-w-3xl font-heading text-3xl font-normal leading-snug text-text-primary md:text-5xl">
          Most storage facilities rent space. OCD practices preservation.
        </h2>

        <div className="mt-8 max-w-3xl space-y-6 font-body text-base leading-relaxed text-text-secondary md:text-lg">
          <p>
            The distinction matters because a collector car that sits is a
            collector car that deteriorates. Flat-spotted tires. Drained
            batteries. Corrosion behind the chrome. Interior cracking from
            thermal stress. Paint oxidation from contaminated air. These
            aren&apos;t freak events &mdash; they&apos;re the predictable
            outcome of passive storage.
          </p>
          <p>
            Preserve the Drive documents the science behind why this happens and
            the protocols that prevent it. Every procedure at OCD&apos;s facility
            &mdash; from continuous humidity monitoring to battery conditioning
            to weekly engine cycling &mdash; traces back to the methodology in
            that book. This is not a garage with better lighting. It is a
            controlled environment built on published science.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((p) => (
            <div key={p.title} className="flex gap-4 p-4">
              <p.icon
                className="mt-0.5 shrink-0 text-gold"
                size={24}
                strokeWidth={1.5}
              />
              <div>
                <h3 className="mb-1 font-body text-sm font-medium text-text-primary">
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── THE BOOKS ───────────────────────── */

type Book = {
  title: string;
  badge: string | null;
  subtitle: string;
  cta: string;
  disabled: boolean;
  image: string | null;
};

const books: Book[] = [
  {
    title: "Carologist Beyond Enthusiast",
    badge: "Pre-Release",
    subtitle: "A Carologist's Dream: Building an Empire via Ten World's Firsts",
    cta: "Coming Soon",
    disabled: false,
    image:"/images/carologist.jpg",
  },
  {
    title: "Preserve the Drive",
    badge: "Bestseller",
    subtitle: "A Collector's Guide to Automotive Storage, Risk, and Legacy",
    cta: "Buy on Amazon",
    disabled: false,
    image: "/images/book-preserve-the-drive.jpg",
  },
  {
    title: "Drivable Art",
    badge: null,
    subtitle:
      "How to Turn Collector Cars into Cash Flow, Tax Shields, and Long-Term Wealth",
    cta: "Buy on Amazon",
    disabled: false,
    image: "/images/book-drivable-art.jpg",
  },
];

function Books() {
  return (
    <section id="books" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
          The Library
        </p>
        <h2 className="font-heading text-3xl font-normal leading-snug text-text-primary md:text-5xl">
          The Collector&apos;s Handbook
        </h2>
        <p className="mt-4 font-body text-base text-text-secondary md:text-lg">
          Before you store it, drive it, buy it, or sell it &mdash; read this.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="group border border-border bg-surface transition-colors hover:border-gold"
            >
              {/* Book cover — real image or placeholder */}
              <div className="relative aspect-[2/3] overflow-hidden">
                {book.image ? (
                  <Image
                    src={book.image}
                    alt={`${book.title} — by Corey Lancaster`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className="flex h-full items-end p-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
                    }}
                  >
                    <h3 className="font-heading text-2xl font-normal leading-tight text-gold">
                      {book.title}
                    </h3>
                  </div>
                )}
                {book.badge && (
                  <span className="absolute top-4 left-4 bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
                    {book.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-normal text-text-primary">
                  {book.title}
                </h3>
                <p className="mb-6 font-body text-sm leading-relaxed text-text-secondary">
                  {book.subtitle}
                </p>
                {book.disabled ? (
                  <span className="inline-block px-6 py-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
                    {book.cta}
                  </span>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:bg-gold-light"
                  >
                    {book.cta} <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── TESTIMONIALS ──────────────────────── */

// Testimonials — awaiting real client content from Corey
const testimonials = [
  {
    name: "Client Name",
    location: "Virginia",
    quote:
      "Placeholder testimonial text. This will be replaced with an actual client testimonial once provided.",
  },
  {
    name: "Client Name",
    location: "Maryland",
    quote:
      "Placeholder testimonial text. This will be replaced with an actual client testimonial once provided.",
  },
  {
    name: "Client Name",
    location: "Washington, D.C.",
    quote:
      "Placeholder testimonial text. This will be replaced with an actual client testimonial once provided.",
  },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
          What Collectors Say
        </p>
        <h2 className="font-heading text-3xl font-normal leading-snug text-text-primary md:text-5xl">
          From the People Who Know
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-border bg-bg p-8 transition-colors hover:border-gold"
            >
              <p className="mb-8 font-body text-base italic leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-body text-sm font-medium text-text-primary">
                  [{t.name}]
                </p>
                <p className="font-body text-xs text-text-muted">
                  [{t.location}]
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── CONTACT / LOCATION CTA ──────────────── */

function Contact() {
  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Let&apos;s Talk
        </p>
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-normal leading-snug text-text-primary md:text-5xl">
          Ready to talk about your collection?
        </h2>
        <p className="mt-6 font-body text-base text-text-secondary">
          OCD Auto Storage &nbsp;|&nbsp; Virginia &nbsp;|&nbsp;
          info@ocdautostorage.com &nbsp;|&nbsp; concierge@ocdautomotive.com
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="mailto:info@ocdautostorage.com"
            className="inline-block bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:bg-gold-light"
          >
            Inquire About Availability
          </a>
          <a
            href="mailto:concierge@ocdautomotive.com"
            className="inline-flex items-center gap-1.5 font-body text-sm text-gold transition-colors hover:text-gold-light"
          >
            Or reach out directly <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  const mainLinks = [
    "Preservation",
    "Books",
    "Consulting",
    "The Campus",
    "Garagecast",
    "Blog",
    "Contact",
  ];
  const bottomLinks = ["About", "Privacy Policy", "Accessibility Statement"];

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <Image
              src="/images/ocd-logo.png"
              alt="OCD Auto Storage"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-3 font-body text-sm text-text-secondary">
              The Science of Keeping What Matters
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {mainLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="font-body text-sm text-text-secondary transition-colors hover:text-gold"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-text-muted transition-colors hover:text-text-secondary"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-text-muted">
            &copy; 2026 OCD Auto Storage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Authority />
      <FacilityGallery />
      <Services />
      <Methodology />
      <Books />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
