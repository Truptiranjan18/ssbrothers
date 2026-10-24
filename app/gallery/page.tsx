import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galleryItems = [
  {
    title: "Our Products",
    category: "PRODUCTS",
    image: "/gallery/gallery-1.jpg",
    size: "large",
  },
  {
    title: "Quality & Selection",
    category: "QUALITY",
    image: "/gallery/gallery-2.jpg",
    size: "normal",
  },
  {
    title: "Our Facility",
    category: "FACILITY",
    image: "/gallery/gallery-3.jpg",
    size: "normal",
  },
  {
    title: "Production",
    category: "PROCESS",
    image: "/gallery/gallery-4.jpg",
    size: "tall",
  },
  {
    title: "Premium Range",
    category: "PRODUCTS",
    image: "/gallery/gallery-5.jpg",
    size: "normal",
  },
  {
    title: "Our Team",
    category: "COMPANY",
    image: "/gallery/gallery-6.jpg",
    size: "large",
  },
  {
    title: "Packaging",
    category: "PROCESS",
    image: "/gallery/gallery-7.jpg",
    size: "normal",
  },
  {
    title: "Behind The Scenes",
    category: "FACILITY",
    image: "/gallery/gallery-8.jpg",
    size: "normal",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(220,169,47,0.15),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-[1400px] items-center px-5 py-24 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-bold tracking-[5px] text-[#dca92f]">
              OUR GALLERY
            </p>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
              SEE THE
              <span className="block text-[#dca92f]">DIFFERENCE.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                Take a closer look at our products, facilities, processes and
                the people behind SS Brother&apos;s.
              </p>

              <div className="hidden h-px w-20 bg-[#dca92f] sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY INTRO
      ====================================================== */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
              INSIDE SS BROTHER&apos;S
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              A Closer Look
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/40 sm:text-right">
            From our products to our processes, every detail reflects our
            commitment to quality and reliability.
          </p>
        </div>
      </section>

      {/* =====================================================
          MASONRY GALLERY
      ====================================================== */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 lg:px-10">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => {
            const sizeClass =
              item.size === "large"
                ? "sm:col-span-2 sm:row-span-2"
                : item.size === "tall"
                  ? "sm:row-span-2"
                  : "";

            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden border border-white/10 bg-[#111315] ${sizeClass}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                {/* Gold hover effect */}
                <div className="absolute inset-0 border-2 border-transparent transition duration-500 group-hover:border-[#dca92f]/70" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-xs font-black tracking-[2px] text-white/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category */}
                <span className="absolute right-5 top-5 bg-[#dca92f] px-3 py-2 text-[9px] font-black tracking-[1.5px] text-black">
                  {item.category}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
                  <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                    <h3 className="text-xl font-black uppercase sm:text-2xl">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-3 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span className="h-px w-8 bg-[#dca92f]" />

                      <span className="text-[9px] font-bold tracking-[2px] text-white/60">
                        VIEW IMAGE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          FEATURE STRIP
      ====================================================== */}
      <section className="border-y border-white/10 bg-[#0d0f10]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl font-black text-[#dca92f]">01</p>
            <p className="mt-3 text-xs font-bold tracking-[2px]">
              QUALITY PRODUCTS
            </p>
          </div>

          <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl font-black text-[#dca92f]">02</p>
            <p className="mt-3 text-xs font-bold tracking-[2px]">
              MODERN PROCESS
            </p>
          </div>

          <div className="border-r-0 border-white/10 p-8 lg:border-r">
            <p className="text-3xl font-black text-[#dca92f]">03</p>
            <p className="mt-3 text-xs font-bold tracking-[2px]">
              RELIABLE SERVICE
            </p>
          </div>

          <div className="p-8">
            <p className="text-3xl font-black text-[#dca92f]">04</p>
            <p className="mt-3 text-xs font-bold tracking-[2px]">
              LONG-TERM TRUST
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-5 py-24 lg:px-10">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden border border-[#dca92f]/30 bg-[#101213]">
          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[60px] border-[#dca92f]/5" />

          <div className="relative px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
              WANT TO KNOW MORE?
            </p>

            <div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build a
                <span className="text-[#dca92f]"> lasting partnership.</span>
              </h2>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-4 bg-[#dca92f] px-8 py-4 text-xs font-black text-black transition hover:bg-[#efc35c]"
              >
                CONTACT US
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
