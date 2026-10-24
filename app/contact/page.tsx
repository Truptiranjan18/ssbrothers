import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(220,169,47,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-bold tracking-[5px] text-[#dca92f]">
            GET IN TOUCH
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl">
            LET&apos;S START
            <span className="block text-[#dca92f]">
              A CONVERSATION.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            Whether you are looking for product information, wholesale
            quantities or a long-term supply partner, our team is ready to
            help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* LEFT */}
          <div>
            <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
              CONTACT DETAILS
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
              WE&apos;D LOVE
              <br />
              TO HEAR FROM YOU.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Have a question about our products or want to discuss a bulk
              order? Reach out to us using the details below.
            </p>

            <div className="mt-12 space-y-8">
              {/* Address */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] font-bold tracking-[2px] text-[#dca92f]">
                  ADDRESS
                </p>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Your Company Address
                  <br />
                  Your City, State, India
                </p>
              </div>

              {/* Phone */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] font-bold tracking-[2px] text-[#dca92f]">
                  PHONE
                </p>

                <p className="mt-3 text-sm text-white/70">
                  +91 XXXXX XXXXX
                </p>
              </div>

              {/* Email */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] font-bold tracking-[2px] text-[#dca92f]">
                  EMAIL
                </p>

                <p className="mt-3 text-sm text-white/70">
                  info@yourcompany.com
                </p>
              </div>

              {/* Business Hours */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] font-bold tracking-[2px] text-[#dca92f]">
                  BUSINESS HOURS
                </p>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-white/10 bg-[#101213] p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[3px] text-[#dca92f]">
                SEND AN ENQUIRY
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
                Tell Us What You Need
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-bold tracking-[1.5px] text-white/50"
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-white/10 bg-[#08090a] px-4 py-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#dca92f]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-[10px] font-bold tracking-[1.5px] text-white/50"
                  >
                    COMPANY
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-white/10 bg-[#08090a] px-4 py-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#dca92f]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-bold tracking-[1.5px] text-white/50"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-white/10 bg-[#08090a] px-4 py-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#dca92f]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] font-bold tracking-[1.5px] text-white/50"
                  >
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-white/10 bg-[#08090a] px-4 py-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#dca92f]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[10px] font-bold tracking-[1.5px] text-white/50"
                >
                  SUBJECT
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="w-full border border-white/10 bg-[#08090a] px-4 py-4 text-sm text-white outline-none transition focus:border-[#dca92f]"
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  <option value="product">Product Enquiry</option>
                  <option value="wholesale">Wholesale / Bulk Order</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-bold tracking-[1.5px] text-white/50"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none border border-white/10 bg-[#08090a] px-4 py-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#dca92f]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-4 bg-[#dca92f] px-6 py-4 text-xs font-black tracking-wide text-black transition hover:bg-[#efc35c]"
              >
                SEND ENQUIRY
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="border-y border-white/10 bg-[#0d0f10]">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
          <div className="flex min-h-[400px] flex-col justify-center px-5 py-16 lg:px-10">
            <p className="text-xs font-bold tracking-[4px] text-[#dca92f]">
              FIND US
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
              OUR
              <br />
              LOCATION.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Visit our office or get in touch with our team to discuss your
              requirements.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex w-fit items-center gap-3 border border-white/15 px-6 py-3 text-[10px] font-bold tracking-[1.5px] transition hover:border-[#dca92f] hover:text-[#dca92f]"
            >
              GET DIRECTIONS
              <span>→</span>
            </Link>
          </div>

          {/* Map Placeholder */}
          <div className="relative min-h-[400px] overflow-hidden bg-[#151718]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:50px_50px]" />

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dca92f] text-2xl text-black shadow-[0_0_0_12px_rgba(220,169,47,0.12)]">
                ●
              </div>

              <div className="mt-5 bg-[#08090a] px-5 py-3 text-center">
                <p className="text-xs font-black">SS BROTHER&apos;S</p>
                <p className="mt-1 text-[9px] text-white/40">
                  OUR OFFICE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-[1400px] bg-[#dca92f] px-7 py-14 text-black sm:px-12 lg:px-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[4px] text-black/60">
                READY TO WORK TOGETHER?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
                Let&apos;s build something great.
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-4 bg-black px-8 py-4 text-xs font-black text-white transition hover:bg-[#151515]"
            >
              VIEW PRODUCTS
              <span className="text-[#dca92f]">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}