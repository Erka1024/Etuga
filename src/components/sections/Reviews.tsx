const reviews = [
  { name: "Anna (DE)", text: "Very cozy and clean place!" },
  { name: "John (US)", text: "Great location and friendly staff." },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">Guest Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <blockquote
            key={r.name}
            className="bg-gray-100 p-6 rounded-lg shadow text-gray-700"
          >
            <p className="italic mb-2">“{r.text}”</p>
            <footer className="font-semibold">{r.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
