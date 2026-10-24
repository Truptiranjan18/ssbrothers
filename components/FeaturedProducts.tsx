import Link from "next/link";
import { products } from "@/data/products";
 


export default function FeaturedProducts() {
  return (
    <section className="bg-[#090a0b] px-4 py-10 sm:px-5 sm:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1350px]">
        {/* Section Title */}
        <div className="mb-7 text-center sm:mb-8">
          <h2 className="text-xl font-bold uppercase text-white sm:text-3xl">
            FEATURED PRODUCTS
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-16 bg-[#d5a02d] sm:w-20" />
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-md border border-white/5 bg-[#151719] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-[#bd8b26]/50 sm:p-3"
            >
              {/* Product Image */}
              <div className="flex h-[115px] items-center justify-center sm:h-[135px] lg:h-[145px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-3 line-clamp-2 text-center text-[10px] font-bold leading-4 text-white sm:text-[11px]">
                {product.name}
              </h3>

              {/* Description */}
              <p className="mt-2 line-clamp-3 text-center text-[9px] leading-4 text-white/50">
                {product.description}
              </p>

              {/* Quote */}
              <div className="mt-3 text-center">
                <Link
                  href="/contact"
                  className="text-[9px] font-bold uppercase text-[#e1ad38] transition hover:text-white"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}