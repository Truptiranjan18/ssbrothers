// "use client";



// import { useState } from "react";

// import Link from "next/link";



// const navItems = [

//   { name: "HOME", href: "/" },

//   { name: "ABOUT US", href: "/about" },

//   { name: "PRODUCTS", href: "/products" },

//   { name: "WHOLESALE", href: "/wholesale" },

//   { name: "QUALITY", href: "/quality" },

//   { name: "GALLERY", href: "/gallery" },

//   { name: "CONTACT", href: "/contact" },

// ];



// export default function Header() {

//   const [open, setOpen] = useState(false);



//   return (

//     <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090a]/95 backdrop-blur">

//       <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-10">

//         

//         {/* Logo */}

//         <Link href="/" className="flex items-center gap-3">

//           <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d6a62d] bg-[#111]">

//             <span className="text-xl font-black text-white">SS</span>

//           </div>



//           <div className="hidden leading-none sm:block">

//             <p className="text-sm font-bold text-white">SS</p>

//             <p className="text-lg font-black text-white">

//               BROTHER&apos;S

//             </p>

//             <p className="text-[9px] font-semibold tracking-[2px] text-[#d6a62d]">

//               & COMPANY

//             </p>

//           </div>

//         </Link>



//         {/* Desktop Navigation */}

//         <nav className="hidden items-center gap-7 lg:flex">

//           {navItems.map((item, index) => (

//             <Link

//               key={item.name}

//               href={item.href}

//               className={`group relative py-7 text-[11px] font-semibold tracking-wide transition ${

//                 index === 0

//                   ? "text-[#e2ad38]"

//                   : "text-white/80 hover:text-[#e2ad38]"

//               }`}

//             >

//               {item.name}



//               {index === 0 && (

//                 <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#dca92f]" />

//               )}

//             </Link>

//           ))}

//         </nav>



//         {/* Quote Button */}

//         <Link

//           href="/contact"

//           className="hidden items-center gap-3 rounded bg-gradient-to-r from-[#e2ad3a] to-[#f0c45e] px-5 py-3 text-[11px] font-bold text-black transition hover:brightness-110 lg:flex"

//         >

//           GET A QUOTE

//           <span>→</span>

//         </Link>



//         {/* Mobile Button */}

//         <button

//           onClick={() => setOpen(!open)}

//           className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"

//         >

//           <span className="h-[2px] w-6 bg-[#dca92f]" />

//           <span className="h-[2px] w-6 bg-[#dca92f]" />

//           <span className="h-[2px] w-6 bg-[#dca92f]" />

//         </button>

//       </div>



//       {/* Mobile Menu */}

//       {open && (

//         <div className="border-t border-white/10 bg-[#0a0b0c] px-5 py-5 lg:hidden">

//           <nav className="flex flex-col">

//             {navItems.map((item) => (

//               <Link

//                 key={item.name}

//                 href={item.href}

//                 onClick={() => setOpen(false)}

//                 className="border-b border-white/10 py-4 text-sm text-white hover:text-[#dca92f]"

//               >

//                 {item.name}

//               </Link>

//             ))}



//             <Link

//               href="/contact"

//               className="mt-5 rounded bg-[#e1ae3a] px-5 py-3 text-center text-sm font-bold text-black"

//             >

//               GET A QUOTE →

//             </Link>

//           </nav>

//         </div>

//       )}

//     </header>

//   );

// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "PRODUCTS", href: "/products" },
  // { name: "WHOLESALE", href: "/wholesale" },
  // { name: "QUALITY", href: "/#quality" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-80 border-b border-white/10 bg-[#08090a]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        {/* <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#d6a62d] bg-[#111]" style={{
            backgroundImage: "url('/images/logo.jpg')",
          }}>
            <span className="text-xl font-black text-white">SS</span>
          </div>

          <div className="hidden leading-none sm:block">
            <p className="text-sm font-bold text-white">SS</p>

            <p className="text-lg font-black text-white">
              BROTHER&apos;S
            </p>

            <p className="text-[9px] font-semibold tracking-[2px] text-[#d6a62d]">
              &amp; COMPANY
            </p>
          </div>
        </Link> */}




<Link href="/" className="flex items-center">
  <div className="relative h-16 w-32 overflow-hidden">
    <Image
      src="/images/logo.jpg"
      alt="SS Brother's & Company"
      fill
      priority
      className="object-contain"
    />
  </div>
</Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative py-7 text-[11px] font-semibold tracking-wide transition ${
                index === 0
                  ? "text-[#e2ad38]"
                  : "text-white/80 hover:text-[#e2ad38]"
              }`}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#dca92f]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Quote Button */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded bg-gradient-to-r from-[#e2ad3a] to-[#f0c45e] px-5 py-3 text-[11px] font-bold text-black transition hover:brightness-110 lg:flex"
        >
          GET A QUOTE
          <span>→</span>
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="h-[2px] w-6 bg-[#dca92f]" />
          <span className="h-[2px] w-6 bg-[#dca92f]" />
          <span className="h-[2px] w-6 bg-[#dca92f]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0a0b0c] px-5 py-5 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm text-white transition hover:text-[#dca92f]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded bg-[#e1ae3a] px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-[#efc35c]"
            >
              GET A QUOTE →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}