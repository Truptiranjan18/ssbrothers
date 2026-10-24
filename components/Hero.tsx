


// import Link from "next/link";



// export default function Hero() {

//   return (

//     <section className="relative min-h-[500px] overflow-hidden bg-[#08090a]">

//       

//       {/* Background */}

//       <div className="absolute inset-0">

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(170,120,25,0.12),transparent_35%)]" />



//         <div

//           className="absolute inset-y-0 right-0 w-full bg-cover bg-center opacity-70 lg:w-[65%]"

//           style={{

//             backgroundImage: "url('/images/hero-parts.png')",

//           }}

//         />



//         <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/90 to-transparent" />

//       </div>



//       {/* Content */}

//       <div className="relative mx-auto flex min-h-[500px] max-w-[1400px] items-center px-5 py-16 lg:px-10">

//         <div className="max-w-[620px]">

//           

//           <p className="mb-2 text-sm font-semibold tracking-wide text-[#c99727]">

//             WHOLESALE SUPPLIER OF

//           </p>



//           <h1 className="font-[Impact,sans-serif] text-5xl uppercase leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-[70px]">

//             Rotavator

//             <br />



//             <span className="text-[#e3ad38]">

//               Spare Parts

//             </span>

//           </h1>



//           <p className="mt-5 max-w-[470px] text-sm leading-6 text-white/70 sm:text-base">

//             Premium quality components for rotavator

//             <br className="hidden sm:block" />

//             and agricultural machinery.

//           </p>



//           {/* Features */}

//           <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">

//             <Feature text="PREMIUM QUALITY" icon="✓" />

//             <Feature text="BULK SUPPLY" icon="▦" />

//             <Feature text="COMPETITIVE PRICING" icon="◇" />

//           </div>



//           {/* Buttons */}

//           <div className="mt-8 flex flex-wrap gap-4">

//             <Link

//               href="/products"

//               className="rounded bg-gradient-to-r from-[#e0aa32] to-[#f1c45d] px-6 py-3 text-xs font-bold text-black shadow-lg shadow-yellow-900/20"

//             >

//               VIEW PRODUCTS

//               <span className="ml-5">→</span>

//             </Link>



//             <Link

//               href="/wholesale"

//               className="rounded border border-[#a77b20] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#a77b20]/10"

//             >

//               GET WHOLESALE QUOTE

//               <span className="ml-5 text-[#e2ad38]">→</span>

//             </Link>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }



// function Feature({

//   text,

//   icon,

// }: {

//   text: string;

//   icon: string;

// }) {

//   return (

//     <div className="flex items-center gap-2">

//       <span className="flex h-7 w-7 items-center justify-center rounded border border-[#d29e2d] text-[#e2ad38]">

//         {icon}

//       </span>



//       <span className="text-[10px] font-bold text-white/80">

//         {text}

//       </span>

//     </div>

//   );

// }


import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#08090a]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(170,120,25,0.12),transparent_35%)]" />

        {/* Hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-50 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[65%] lg:opacity-70"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090a]/90 via-[#08090a]/70 to-[#08090a] lg:bg-gradient-to-r lg:from-[#08090a] lg:via-[#08090a]/90 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[500px] max-w-[1400px] items-center px-5 py-16 sm:py-20 lg:px-10">
        <div className="w-full max-w-[620px]">
          <p className="mb-2 text-xs font-semibold tracking-wide text-[#c99727] sm:text-sm">
            WHOLESALE SUPPLIER OF
          </p>

          <h1 className="font-[Impact,sans-serif] text-5xl uppercase leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-[70px]">
            Rotavator
            <br />

            <span className="text-[#e3ad38]">
              Spare Parts
            </span>
          </h1>

          <p className="mt-5 max-w-[470px] text-sm leading-6 text-white/70 sm:text-base">
            Premium quality components for rotavator
            <br className="hidden sm:block" />
            and agricultural machinery.
          </p>

          {/* Features */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-4 sm:gap-x-7">
            <Feature text="PREMIUM QUALITY" icon="✓" />
            <Feature text="BULK SUPPLY" icon="▦" />
            <Feature text="COMPETITIVE PRICING" icon="◇" />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded bg-gradient-to-r from-[#e0aa32] to-[#f1c45d] px-6 py-3 text-xs font-bold text-black shadow-lg shadow-yellow-900/20 transition hover:brightness-110"
            >
              VIEW PRODUCTS
              <span className="ml-5">→</span>
            </Link>

            <Link
              href="/wholesale"
              className="inline-flex items-center justify-center rounded border border-[#a77b20] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#a77b20]/10"
            >
              GET WHOLESALE QUOTE
              <span className="ml-5 text-[#e2ad38]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  text,
  icon,
}: {
  text: string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[#d29e2d] text-[#e2ad38]">
        {icon}
      </span>

      <span className="text-[10px] font-bold text-white/80">
        {text}
      </span>
    </div>
  );
}