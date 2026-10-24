// import Link from "next/link";
 
// const categories = [
//   {
//     title: "UNIVERSAL",
//     subtitle: "JOINT CROSS",
//     image: "/images/joint-cross.png",
//   },
//   {
//     title: "YOKES",
//     subtitle: "",
//     image: "/images/yoke.png",
//   },
//   {
//     title: "GEAR &",
//     subtitle: "TRANSMISSION PARTS",
//     image: "/images/gear.png",
//   },
//   {
//     title: "AXLES &",
//     subtitle: "HOUSINGS",
//     image: "/images/housing.png",
//   },
//   {
//     title: "BLADES &",
//     subtitle: "TILLAGE PARTS",
//     image: "/images/blade.png",
//   },
//   {
//     title: "OTHER ROTAVATOR",
//     subtitle: "PARTS",
//     image: "/images/axle.png",
//   },
// ];
 
// export default function ProductCategories() {
//   return (
//     <section className="bg-[#090a0b] px-5 py-12 lg:px-10">
//       <div className="mx-auto max-w-[1350px]">
        
//         <SectionTitle title="OUR PRODUCT CATEGORIES" />
 
//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//           {categories.map((category) => (
//             <Link
//               href="/products"
//               key={category.title}
//               className="group relative flex min-h-[170px] flex-col items-center justify-between overflow-hidden rounded-md border border-white/5 bg-[#151719] px-3 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#c7982c]/50"
//             >
//               {/* Image */}
//               <div className="flex h-[105px] w-full items-center justify-center">
//                 <img
//                   src={category.image}
//                   alt={`${category.title} ${category.subtitle}`}
//                   className="max-h-full max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-105"
//                 />
//               </div>
 
//               {/* Text */}
//               <div className="text-center">
//                 <h3 className="text-[11px] font-bold leading-4 text-white">
//                   {category.title}
//                   {category.subtitle && (
//                     <>
//                       <br />
//                       {category.subtitle}
//                     </>
//                   )}
//                 </h3>
 
//                 <div className="mx-auto mt-2 h-[2px] w-7 bg-[#d5a02d]" />
//               </div>
//             </Link>
//           ))}
//         </div>
 
//         <div className="mt-8 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-5 rounded border border-[#a87920] px-7 py-3 text-[11px] font-bold text-white transition hover:bg-[#c28d25] hover:text-black"
//           >
//             VIEW ALL PRODUCTS
//             <span className="text-[#e0ad3b]">→</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
 
// function SectionTitle({ title }: { title: string }) {
//   return (
//     <div className="mb-8 text-center">
//       <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
//         {title}
//       </h2>
 
//       <div className="mx-auto mt-3 flex items-center justify-center gap-2">
//         <span className="h-[1px] w-10 bg-[#d7a32f]" />
//         <span className="h-2 w-2 rotate-45 border border-[#d7a32f]" />
//         <span className="h-[1px] w-10 bg-[#d7a32f]" />
//       </div>
//     </div>
//   );
// }


import Link from "next/link";

const categories = [
  {
    title: "UNIVERSAL",
    subtitle: "JOINT CROSS",
    image: "/images/joint-cross.jpg",
  },
  {
    title: "YOKES",
    subtitle: "",
    image: "/images/yoke.jpg",
  },
  {
    title: "GEAR &",
    subtitle: "TRANSMISSION PARTS",
    image: "/images/gear.jpg",
  },
  {
    title: "AXLES &",
    subtitle: "HOUSINGS",
    image: "/images/housing.jpg",
  },
  {
    title: "BLADES &",
    subtitle: "TILLAGE PARTS",
    image: "/images/blade.jpg",
  },
  {
    title: "OTHER ROTAVATOR",
    subtitle: "PARTS",
    image: "/images/axle.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-[#090a0b] px-4 py-12 sm:px-5 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1350px]">
        <SectionTitle title="OUR PRODUCT CATEGORIES" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="group relative flex min-h-[160px] flex-col items-center justify-between overflow-hidden rounded-md border border-white/5 bg-[#151719] px-2 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#c7982c]/50 sm:min-h-[175px] sm:px-3 lg:min-h-[185px]"
            >
              {/* Image */}
              <div className="flex h-[95px] w-full items-center justify-center sm:h-[105px]">
                <img
                  src={category.image}
                  alt={`${category.title} ${category.subtitle}`.trim()}
                  className="max-h-full max-w-[90%] object-contain drop-shadow-xl transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="text-[10px] font-bold leading-4 text-white sm:text-[11px]">
                  {category.title}

                  {category.subtitle && (
                    <>
                      <br />
                      {category.subtitle}
                    </>
                  )}
                </h3>

                <div className="mx-auto mt-2 h-[2px] w-7 bg-[#d5a02d]" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-4 rounded border border-[#a87920] px-6 py-3 text-[10px] font-bold text-white transition hover:bg-[#c28d25] hover:text-black sm:gap-5 sm:px-7 sm:text-[11px]"
          >
            VIEW ALL PRODUCTS
            <span className="text-[#e0ad3b]">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-7 text-center sm:mb-8">
      <h2 className="text-xl font-bold uppercase tracking-wide text-white sm:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-3 flex items-center justify-center gap-2">
        <span className="h-[1px] w-8 bg-[#d7a32f] sm:w-10" />

        <span className="h-2 w-2 rotate-45 border border-[#d7a32f]" />

        <span className="h-[1px] w-8 bg-[#d7a32f] sm:w-10" />
      </div>
    </div>
  );
}