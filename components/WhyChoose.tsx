// const benefits = [
//   {
//     icon: "♙",
//     title: "WHOLESALE SPECIALIST",
//     description:
//       "We serve dealers, distributors, retailers and agricultural machinery businesses.",
//   },
//   {
//     icon: "✓",
//     title: "PREMIUM QUALITY",
//     description:
//       "Quality checked components for reliable performance and longer life.",
//   },
//   {
//     icon: "▣",
//     title: "BULK SUPPLY",
//     description:
//       "Large stock availability and timely bulk supply.",
//   },
//   {
//     icon: "▦",
//     title: "WIDE PRODUCT RANGE",
//     description:
//       "All essential rotavator spare parts available under one roof.",
//   },
//   {
//     icon: "◇",
//     title: "COMPETITIVE PRICING",
//     description:
//       "Best wholesale pricing for bulk requirements.",
//   },
//   {
//     icon: "◌",
//     title: "RELIABLE SUPPORT",
//     description:
//       "Quick response and dedicated support for all enquiries.",
//   },
// ];
 
// export default function WhyChoose() {
//   return (
//     <section className="overflow-hidden border-y border-white/5 bg-[#0c0d0e]">
//       <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
 
//         {/* LEFT IMAGE */}
//         <div className="relative min-h-[380px] overflow-hidden">
//           <img
//             src="/images/why-choose.jpg"
//             alt="Rotavator spare parts"
//             className="absolute inset-0 h-full w-full object-cover"
//           />
 
//           {/* Dark gradient */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0c0d0e]" />
//         </div>
 
//         {/* RIGHT CONTENT */}
//         <div className="px-6 py-12 lg:px-10">
 
//           <p className="text-sm font-semibold text-[#d4a02d]">
//             WHY CHOOSE
//           </p>
 
//           <h2 className="mt-1 text-3xl font-black uppercase text-white">
//             SS BROTHER&apos;S & COMPANY?
//           </h2>
 
//           <div className="mt-3 h-[2px] w-12 bg-[#d5a02d]" />
 
//           {/* Benefits */}
//           <div className="mt-8 grid gap-7 sm:grid-cols-2">
//             {benefits.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex gap-4"
//               >
//                 {/* Icon */}
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-xl text-[#d8a42e]">
//                   {item.icon}
//                 </div>
 
//                 {/* Text */}
//                 <div>
//                   <h3 className="text-xs font-bold text-white">
//                     {item.title}
//                   </h3>
 
//                   <p className="mt-1 text-[10px] leading-5 text-white/50">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
 
//         </div>
//       </div>
//     </section>
//   );
// }



const benefits = [
  {
    icon: "♙",
    title: "WHOLESALE SPECIALIST",
    description:
      "We serve dealers, distributors, retailers and agricultural machinery businesses.",
  },
  {
    icon: "✓",
    title: "PREMIUM QUALITY",
    description:
      "Quality checked components for reliable performance and longer life.",
  },
  {
    icon: "▣",
    title: "BULK SUPPLY",
    description:
      "Large stock availability and timely bulk supply.",
  },
  {
    icon: "▦",
    title: "WIDE PRODUCT RANGE",
    description:
      "All essential rotavator spare parts available under one roof.",
  },
  {
    icon: "◇",
    title: "COMPETITIVE PRICING",
    description:
      "Best wholesale pricing for bulk requirements.",
  },
  {
    icon: "◌",
    title: "RELIABLE SUPPORT",
    description:
      "Quick response and dedicated support for all enquiries.",
  },
];

export default function WhyChoose() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-[#0c0d0e]">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative h-[280px] overflow-hidden sm:h-[350px] lg:h-auto lg:min-h-[500px]">
          <img
            src="/images/whychoose.jpg"
            alt="Rotavator spare parts"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0d0e] lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c0d0e]" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <p className="text-xs font-semibold text-[#d4a02d] sm:text-sm">
            WHY CHOOSE
          </p>

          <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            SS BROTHER&apos;S &amp; COMPANY?
          </h2>

          <div className="mt-3 h-[2px] w-12 bg-[#d5a02d]" />

          {/* Benefits */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-7">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 sm:gap-4"
              >
                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-lg text-[#d8a42e] sm:h-10 sm:w-10 sm:text-xl">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-[11px] font-bold leading-4 text-white sm:text-xs">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-5 text-white/50 sm:text-[11px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}