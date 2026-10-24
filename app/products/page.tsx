import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const categories = [
  "ALL PRODUCTS",
  "CATEGORY ONE",
  "CATEGORY TWO",
  "CATEGORY THREE",
];

const products = [
  {
    name: "Premium Product One",
    category: "CATEGORY ONE",
    description:
      "High-quality product designed for reliable performance and consistent results.",
    image: "/products/product-1.jpg",
  },
  {
    name: "Premium Product Two",
    category: "CATEGORY ONE",
    description:
      "Carefully selected and processed to meet demanding quality standards.",
    image: "/products/product-2.jpg",
  },
  {
    name: "Premium Product Three",
    category: "CATEGORY TWO",
    description:
      "A dependable solution for customers looking for quality and value.",
    image: "/products/product-3.jpg",
  },
  {
    name: "Premium Product Four",
    category: "CATEGORY TWO",
    description:
      "Premium-grade product suitable for domestic and international markets.",
    image: "/products/product-4.jpg",
  },
  {
    name: "Premium Product Five",
    category: "CATEGORY THREE",
    description:
      "Consistent quality, excellent presentation and reliable supply.",
    image: "/products/product-5.jpg",
  },
  {
    name: "Premium Product Six",
    category: "CATEGORY THREE",
    description:
      "Produced with attention to detail and a strong focus on quality.",
    image: "/products/product-6.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(220,169,47,0.14),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1400px] flex-col justify-center px-5 py-24 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[5px] text-[#dca92f]">
              OUR PRODUCTS
            </p>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              QUALITY
              <span className="block text-[#dca92f]">YOU CAN</span>
              TRUST.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Explore our range of carefully selected products, developed with a
              focus on quality, consistency and dependable supply.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 text-xs font-bold tracking-[2px] text-white/40">
            <div>
              <span className="block text-3xl font-black text-white">50+</span>
              PRODUCTS
            </div>

            <div>
              <span className="block text-3xl font-black text-white">25+</span>
              YEARS EXPERIENCE
            </div>

            <div>
              <span className="block text-3xl font-black text-white">20+</span>
              MARKETS
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}
      <section className="border-b border-white/10 bg-[#0d0f10]">
        <div className="mx-auto max-w-[1400px] overflow-x-auto px-5 lg:px-10">
          <div className="flex min-w-max items-center gap-2 py-5">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`px-5 py-3 text-[10px] font-black tracking-[1.5px] transition ${
                  index === 0
                    ? "bg-[#dca92f] text-black"
                    : "border border-white/10 text-white/55 hover:border-[#dca92f] hover:text-[#dca92f]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
              PRODUCT COLLECTION
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Explore Our Range
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40 sm:text-right">
            Quality products backed by reliable service and consistent supply.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Link
              href={`/products/${index + 1}`}
              key={product.name}
              className="group block overflow-hidden border border-white/10 bg-[#101213] transition duration-300 hover:-translate-y-1 hover:border-[#dca92f]/50"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#17191a]">
                {/* <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                /> */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 bg-[#dca92f] px-3 py-2 text-[9px] font-black tracking-[1px] text-black">
                  {product.category}
                </span>

                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 text-lg text-white backdrop-blur transition group-hover:border-[#dca92f] group-hover:bg-[#dca92f] group-hover:text-black">
                  →
                </span>
              </div>

              {/* Product Information */}
              <div className="p-6">
                <p className="mb-2 text-[9px] font-bold tracking-[2px] text-[#dca92f]">
                  PRODUCT {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-black uppercase">{product.name}</h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[10px] font-bold tracking-[1.5px] text-white/40">
                    VIEW DETAILS
                  </span>

                  <span className="text-[#dca92f] transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHOLESALE CTA
      ====================================================== */}
      <section className="px-5 pb-24 lg:px-10">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden bg-[#dca92f] px-7 py-14 text-black sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-black/5" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[4px] text-black/60">
                BULK & WHOLESALE ORDERS
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">
                Need larger quantities?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/65">
                Speak with our team about wholesale pricing, bulk orders and
                long-term supply requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-4 bg-black px-7 py-4 text-xs font-black text-white transition hover:bg-[#151515]"
            >
              GET A QUOTE
              <span className="text-lg text-[#dca92f]">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
