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
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header/>

      <main className="bg-white text-gray-800 ">
        <Hero />
       <div className="mx-10">
         <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <Faq />
        <Contact />
       </div>
        <Footer />
      </main>
    </>
  );
}
