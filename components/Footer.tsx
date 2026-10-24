// import Link from "next/link";

// const quickLinks = [
//   "About Us",
//   "Products",
//   "Wholesale",
//   "Quality",
//   "Gallery",
//   "Contact Us",
// ];

// const productLinks = [
//   "Universal Joint Cross",
//   "Yokes",
//   "Gear & Transmission Parts",
//   "Axles & Housings",
//   "Blades & Tillage Parts",
//   "Other Rotavator Parts",
// ];

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-[#0b0c0d]">
//       <div className="mx-auto grid max-w-[1350px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

//         {/* Company */}
//         <div>
//           <div className="flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d6a62d]">
//               <span className="font-black text-white">SS</span>
//             </div>

//             <div className="leading-none">
//               <p className="font-bold text-white">SS</p>
//               <p className="font-black text-white">
//                 BROTHER&apos;S
//               </p>
//               <p className="text-[8px] tracking-[2px] text-[#d6a62d]">
//                 & COMPANY
//               </p>
//             </div>
//           </div>

//           <p className="mt-5 max-w-[280px] text-xs leading-5 text-white/50">
//             Wholesale supplier of premium quality rotavator
//             spare parts and agricultural machinery components.
//           </p>

//           <div className="mt-5 flex gap-2">
//             {["f", "◉", "☎", "✉"].map((icon) => (
//               <div
//                 key={icon}
//                 className="flex h-8 w-8 items-center justify-center rounded-full border border-[#70531c] text-xs text-[#dba72f]"
//               >
//                 {icon}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <FooterColumn title="QUICK LINKS">
//           {quickLinks.map((item) => (
//             <Link
//               key={item}
//               href="#"
//               className="block text-xs text-white/60 transition hover:text-[#dba72f]"
//             >
//               {item}
//             </Link>
//           ))}
//         </FooterColumn>

//         {/* Products */}
//         <FooterColumn title="PRODUCTS">
//           {productLinks.map((item) => (
//             <Link
//               key={item}
//               href="/products"
//               className="block text-xs text-white/60 transition hover:text-[#dba72f]"
//             >
//               {item}
//             </Link>
//           ))}
//         </FooterColumn>

//         {/* Contact */}
//         <div>
//           <h3 className="mb-5 text-xs font-bold text-[#dba72f]">
//             CONTACT US
//           </h3>

//           <div className="space-y-4 text-xs text-white/60">
//             <p>☎ +91 70084 72789</p>

//             <p>✉ info@ssbrotherscompany.com</p>

//             <p>
//               ⌖ Your Address Here
//               <br />
//               City, State - PIN
//             </p>

//             <p>◷ Mon - Sat : 9:00 AM - 6:00 PM</p>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-white/10 py-4 text-center">
//         <p className="text-[10px] text-white/50">
//           © 2024 SS BROTHER&apos;S & COMPANY. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// function FooterColumn({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <h3 className="mb-5 text-xs font-bold text-[#dba72f]">
//         {title}
//       </h3>

//       <div className="space-y-3">{children}</div>
//     </div>
//   );
// }

import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  // { name: "Wholesale", href: "/wholesale" },
  // { name: "Quality", href: "/quality" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  "Universal Joint Cross",
  "Yokes",
  "Gear & Transmission Parts",
  "Axles & Housings",
  "Blades & Tillage Parts",
  // "Other Rotavator Parts",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0d]">
      <div className="mx-auto grid max-w-[1350px] gap-9 px-5 py-10 sm:grid-cols-2 sm:gap-10 sm:py-12 lg:grid-cols-4 lg:px-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#d6a62d]">
              <span className="font-black text-white">SS</span>
            </div>

            <div className="leading-none">
              <p className="text-sm font-bold text-white">SS</p>

              <p className="text-base font-black text-white">BROTHER&apos;S</p>

              <p className="text-[8px] tracking-[2px] text-[#d6a62d]">
                &amp; COMPANY
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-[280px] text-[11px] leading-5 text-white/50 sm:text-xs">
            Wholesale supplier of premium quality rotavator spare parts and
            agricultural machinery components.
          </p>

          <div className="mt-5 flex gap-2">
            {["f", "◉", "☎", "✉"].map((icon) => (
              <div
                key={icon}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#70531c] text-xs text-[#dba72f] transition hover:bg-[#70531c]/20"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <FooterColumn title="QUICK LINKS">
          {quickLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-[11px] text-white/60 transition hover:text-[#dba72f] sm:text-xs"
            >
              {item.name}
            </Link>
          ))}
        </FooterColumn>

        {/* Products */}
        <FooterColumn title="PRODUCTS">
          {productLinks.map((item) => (
            <Link
              key={item}
              href="/products"
              className="block text-[11px] leading-4 text-white/60 transition hover:text-[#dba72f] sm:text-xs"
            >
              {item}
            </Link>
          ))}
        </FooterColumn>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xs font-bold text-[#dba72f]">CONTACT US</h3>

          <div className="space-y-4 text-[11px] leading-5 text-white/60 sm:text-xs">
            <p>☎ +91 70084 72789</p>

            <p className="break-all">✉ info@ssbrotherscompany.com</p>

            <p>
              ⌖ Your Address Here
              <br />
              City, State - PIN
            </p>

            <p>◷ Mon - Sat : 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-5 py-4 text-center">
        <p className="text-[9px] leading-4 text-white/50 sm:text-[10px]">
          © {new Date().getFullYear()} SS BROTHER&apos;S &amp; COMPANY. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold text-[#dba72f]">{title}</h3>

      <div className="space-y-3">{children}</div>
    </div>
  );
}
