import Head from "next/head";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>EO Guesthouse – Cozy stay in Ulaanbaatar</title>
        <meta
          name="description"
          content="Comfortable rooms, friendly staff, and great location in Ulaanbaatar. Perfect for travelers."
        />
        <meta property="og:title" content="EO Guesthouse" />
        <meta property="og:description" content="Cozy stay in Ulaanbaatar" />
        <meta property="og:image" content="/images/hero.jpg" />
      </Head>

      <main className="bg-white text-gray-800">
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
