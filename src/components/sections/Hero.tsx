export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] rounded-b-3xl flex items-center justify-center text-center text-white overflow-hidden
                 bg-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-down">EO Guesthouse</h1>
        <p className="mt-4 text-lg md:text-2xl" data-aos="fade-up">Cozy stay in Ulaanbaatar</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="tel:+97699000000" className="bg-black hover:bg-[#11dbce] hover:text-black px-5 py-3 rounded-lg font-semibold">Call Now</a>
          <a href="https://maps.google.com/?q=Ulaanbaatar" target="_blank"
             className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
