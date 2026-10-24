import Header from "@/components/Header";

import Hero from "@/components/Hero";

import ProductCategories from "@/components/ProductCategories";

import WhyChoose from "@/components/WhyChoose";

import BulkBanner from "@/components/BulkBanner";

import FeaturedProducts from "@/components/FeaturedProducts";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <ProductCategories />

      <WhyChoose />

      <BulkBanner />

      <FeaturedProducts />
      <Footer />
    </main>
  );
}
