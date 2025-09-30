const faqs = [
  { q: "What are check-in/out times?", a: "Check-in after 14:00, check-out before 12:00." },
  { q: "Do you allow pets?", a: "Sorry, no pets." },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold">{f.q}</p>
              <p className="text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}