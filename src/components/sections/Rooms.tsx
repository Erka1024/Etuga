import Image from "next/image";

const rooms = [
  {
    name: "Standard Double",
    beds: "1 Queen",
    capacity: 2,
    price: "120,000₮ / night",
    image: "/images/rooms/single.jpg",
  },
  {
    name: "Twin Room",
    beds: "2 Single",
    capacity: 2,
    price: "130,000₮ / night",
    image: "/images/rooms/double.jpg",
  },
    {
    name: "Single Room",
    beds: "3 Single",
    capacity: 2,
    price: "130,000₮ / night",
    image: "/images/rooms/twin.jpg",
  },

];

export default function Rooms() {
  return (
    <section id="rooms" className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">Rooms & Rates</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <div key={room.name} className="rounded-lg overflow-hidden shadow">
            <Image
              src={room.image}
              alt={room.name}
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{room.name}</h3>
              <p className="text-gray-600 text-sm">{room.beds}</p>
              <p className="mt-2 font-medium">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
