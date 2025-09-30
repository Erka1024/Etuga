import Image from "next/image";

const amenities = [
  { icon: "/icons/wifi.png", label: "Free Wi-Fi" },
  { icon: "/icons/coffeemaker.png", label: "Breakfast" },
  { icon: "/icons/laundry.png", label: "Laundry" },
  { icon: "/icons/lunch.png", label: "Lunch & Dinner" },
  { icon: "/icons/tv.png", label: "Smart TV" },
  { icon: "/icons/take a bath.png", label: "Hot Shower" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">Amenities</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="relative w-12 h-12 mb-3" data-aos-delay="1000" data-aos="fade-up-right">
                <Image
                  src={item.icon}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-bold text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
