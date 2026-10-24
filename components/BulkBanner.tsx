// import Link from "next/link";
 
// export default function BulkBanner() {
//   return (
//     <section className="px-5 py-5 lg:px-10">
//       <div className="relative mx-auto flex max-w-[1350px] flex-col overflow-hidden rounded border border-[#604918] bg-[#17140d] md:flex-row">
 
//         {/* GOLD BACKGROUND GLOW */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(206,154,39,0.15),transparent_35%)]" />
 
//         {/* IMAGE */}
//         <div className="relative h-[190px] w-full md:h-auto md:w-[30%]">
//           <img
//             src="/images/bulk-box.png"
//             alt="Bulk rotavator parts"
//             className="h-full w-full object-cover"
//           />
//         </div>
 
//         {/* TEXT */}
//         <div className="relative flex flex-1 flex-col justify-center px-7 py-8">
 
//           <h2 className="text-2xl font-black uppercase text-white">
//             BUY IN BULK.{" "}
//             <span className="text-[#dca52e]">
//               SAVE MORE.
//             </span>
//           </h2>
 
//           <p className="mt-2 max-w-[420px] text-xs leading-5 text-white/60">
//             Looking for rotavator spare parts in bulk?
//             Send us your requirements and get the best
//             wholesale price.
//           </p>
 
//         </div>
 
//         {/* BENEFITS */}
//         <div className="relative flex items-center gap-6 border-t border-[#604918] px-6 py-6 md:border-l md:border-t-0">
 
//           <SmallBenefit
//             icon="▣"
//             text="BIG STOCK"
//           />
 
//           <SmallBenefit
//             icon="♧"
//             text="WHOLESALE PRICING"
//           />
 
//           <SmallBenefit
//             icon="▱"
//             text="TIMELY DELIVERY"
//           />
 
//         </div>
 
//         {/* BUTTON */}
//         <div className="relative flex items-center px-6 pb-6 md:pb-0">
//           <Link
//             href="/contact"
//             className="w-full rounded bg-gradient-to-r from-[#dfa932] to-[#f1c25b] px-6 py-3 text-center text-xs font-bold text-black md:w-auto"
//           >
//             REQUEST WHOLESALE QUOTE →
//           </Link>
//         </div>
 
//       </div>
//     </section>
//   );
// }
 
// function SmallBenefit({
//   icon,
//   text,
// }: {
//   icon: string;
//   text: string;
// }) {
//   return (
//     <div className="text-center">
 
//       <div className="text-xl text-[#dba72f]">
//         {icon}
//       </div>
 
//       <p className="mt-1 max-w-[70px] text-[8px] font-bold text-white">
//         {text}
//       </p>
 
//     </div>
//   );
// }




import Link from "next/link";

export default function BulkBanner() {
  return (
    <section className="px-4 py-5 sm:px-5 lg:px-10">
      <div className="relative mx-auto flex max-w-[1350px] flex-col overflow-hidden rounded border border-[#604918] bg-[#17140d] md:flex-row">
        {/* GOLD BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(206,154,39,0.15),transparent_35%)]" />

        {/* IMAGE */}
        <div className="relative h-[180px] w-full sm:h-[220px] md:h-auto md:w-[28%] md:shrink-0">
          <img
            src="/images/bulk-box.jpg"
            alt="Bulk rotavator parts"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#17140d]/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#17140d]/40" />
        </div>

        {/* TEXT */}
        <div className="relative flex flex-1 flex-col justify-center px-5 py-7 sm:px-7 sm:py-8">
          <h2 className="text-xl font-black uppercase leading-tight text-white sm:text-2xl">
            BUY IN BULK.{" "}
            <span className="text-[#dca52e]">
              SAVE MORE.
            </span>
          </h2>

          <p className="mt-2 max-w-[420px] text-[11px] leading-5 text-white/60 sm:text-xs">
            Looking for rotavator spare parts in bulk?
            Send us your requirements and get the best
            wholesale price.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="relative grid grid-cols-3 gap-2 border-t border-[#604918] px-4 py-5 sm:gap-5 sm:px-6 md:flex md:items-center md:gap-6 md:border-l md:border-t-0">
          <SmallBenefit
            icon="▣"
            text="BIG STOCK"
          />

          <SmallBenefit
            icon="♧"
            text="WHOLESALE PRICING"
          />

          <SmallBenefit
            icon="▱"
            text="TIMELY DELIVERY"
          />
        </div>

        {/* BUTTON */}
        <div className="relative flex items-center px-5 pb-6 sm:px-6 md:pb-0">
          <Link
            href="/contact"
            className="w-full rounded bg-gradient-to-r from-[#dfa932] to-[#f1c25b] px-5 py-3 text-center text-[10px] font-bold text-black transition hover:brightness-110 sm:px-6 sm:text-xs md:w-auto md:whitespace-nowrap"
          >
            REQUEST WHOLESALE QUOTE →
          </Link>
        </div>
      </div>
    </section>
  );
}

function SmallBenefit({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-lg text-[#dba72f] sm:text-xl">
        {icon}
      </div>

      <p className="mt-1 max-w-[80px] text-[8px] font-bold leading-3 text-white sm:max-w-[90px]">
        {text}
      </p>
    </div>
  );
}