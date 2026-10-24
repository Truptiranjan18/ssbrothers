// "use client";

// import Link from "next/link";

// const stats = [
//   { value: "25+", label: "Years of Experience" },
//   { value: "50+", label: "Products" },
//   { value: "20+", label: "Countries Served" },
//   { value: "100%", label: "Quality Focused" },
// ];

// const values = [
//   {
//     number: "01",
//     title: "QUALITY FIRST",
//     text: "We maintain strict quality standards throughout sourcing, manufacturing, inspection and delivery.",
//   },
//   {
//     number: "02",
//     title: "TRUSTED PARTNERSHIP",
//     text: "Our long-term relationships with customers and suppliers are built on transparency and consistency.",
//   },
//   {
//     number: "03",
//     title: "CONTINUOUS IMPROVEMENT",
//     text: "We continuously improve our products, processes and service to meet changing market requirements.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[#08090a] text-white">
//       {/* Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,169,47,0.16),transparent_35%)]" />

//         <div className="mx-auto grid min-h-[620px] max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
//           <div>
//             <p className="mb-5 text-xs font-bold tracking-[4px] text-[#dca92f]">
//               ABOUT SS BROTHER&apos;S
//             </p>

//             <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
//               BUILT ON
//               <span className="block text-[#dca92f]">QUALITY.</span>
//               DRIVEN BY
//               <span className="block">TRUST.</span>
//             </h1>

//             <p className="mt-8 max-w-xl text-base leading-8 text-white/60">
//               SS Brother&apos;s & Company is committed to delivering reliable
//               products and dependable service to customers across domestic and
//               international markets.
//             </p>

//             <Link
//               href="/contact"
//               className="mt-9 inline-flex items-center gap-4 bg-[#dca92f] px-7 py-4 text-xs font-black tracking-wide text-black transition hover:bg-[#efc35c]"
//             >
//               WORK WITH US
//               <span className="text-lg">→</span>
//             </Link>
//           </div>

//           {/* Visual */}
//           <div className="relative">
//             <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-[#111315]">
//               <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#181a1c,#08090a)]">
//                 <div className="text-center">
//                   <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#dca92f]">
//                     <span className="text-5xl font-black">SS</span>
//                   </div>

//                   <p className="mt-7 text-xs font-bold tracking-[5px] text-[#dca92f]">
//                     EST. 2000
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-5 -left-5 bg-[#dca92f] px-6 py-5 text-black">
//               <p className="text-3xl font-black">25+</p>
//               <p className="text-[10px] font-bold tracking-[2px]">
//                 YEARS OF EXCELLENCE
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="border-y border-white/10 bg-[#0d0f10]">
//         <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat) => (
//             <div
//               key={stat.label}
//               className="border-r border-white/10 px-6 py-10 last:border-r-0"
//             >
//               <p className="text-4xl font-black text-[#dca92f]">
//                 {stat.value}
//               </p>

//               <p className="mt-2 text-[10px] font-bold tracking-[2px] text-white/50">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Story */}
//       <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
//         <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
//           <div>
//             <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
//               OUR STORY
//             </p>

//             <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
//               EXPERIENCE
//               <br />
//               THAT MAKES
//               <br />
//               A DIFFERENCE.
//             </h2>
//           </div>

//           <div className="max-w-3xl">
//             <p className="text-xl leading-9 text-white/80">
//               From our beginnings to where we are today, our focus has remained
//               simple — provide dependable products, maintain consistent
//               quality, and create long-term relationships with our customers.
//             </p>

//             <p className="mt-7 leading-8 text-white/50">
//               Our team combines industry knowledge, careful sourcing and
//               rigorous quality control to ensure that every product meets the
//               expectations of our customers. We believe that a successful
//               business is not only measured by what it sells, but by the trust
//               it builds.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="bg-[#dca92f] text-black">
//         <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
//           <div className="mb-14">
//             <p className="text-xs font-black tracking-[4px]">
//               WHAT WE STAND FOR
//             </p>

//             <h2 className="mt-4 text-4xl font-black sm:text-5xl">
//               OUR CORE VALUES
//             </h2>
//           </div>

//           <div className="grid gap-px bg-black/20 lg:grid-cols-3">
//             {values.map((value) => (
//               <div
//                 key={value.number}
//                 className="bg-[#dca92f] p-8 lg:p-10"
//               >
//                 <span className="text-sm font-black opacity-50">
//                   {value.number}
//                 </span>

//                 <h3 className="mt-12 text-xl font-black">
//                   {value.title}
//                 </h3>

//                 <p className="mt-5 text-sm leading-7 text-black/65">
//                   {value.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-5 py-24 lg:px-10">
//         <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 border border-white/10 bg-[#101213] p-8 sm:p-12 lg:flex-row lg:items-center">
//           <div>
//             <p className="text-xs font-bold tracking-[3px] text-[#dca92f]">
//               LET&apos;S BUILD TOGETHER
//             </p>

//             <h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl">
//               Looking for a reliable long-term supplier?
//             </h2>
//           </div>

//           <Link
//             href="/contact"
//             className="shrink-0 bg-[#dca92f] px-8 py-4 text-xs font-black text-black transition hover:bg-[#efc35c]"
//           >
//             CONTACT US →
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }



import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <Header />

      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
            ABOUT SS BROTHER&apos;S
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none sm:text-6xl lg:text-8xl">
            BUILT ON
            <span className="text-[#dca92f]"> QUALITY.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We are committed to providing quality products, reliable service,
            and long-term value to our customers.
          </p>
        </div>
      </section>

      {/* Add your About sections here */}

      <Footer />
    </main>
  );
}
