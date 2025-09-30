export default function Location() {
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Location</h2>
        <p className="mb-6">District X, Ulaanbaatar, Mongolia</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
}
