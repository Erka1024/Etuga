import { useRouter } from "next/router";
import Image from "next/image";
import { branches } from "@/lib/data";

export default function BranchPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const branchSlug = Array.isArray(slug) ? slug[0] : slug;
  const branch = branches.find((b) => b.slug === branchSlug);

  if (!branch) {
    return <div className="container mx-auto p-6">Branch not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">{branch.name}</h1>
      <p className="text-gray-600 mb-6">{branch.address}</p>

      <Image
        src={branch.image}
        alt={branch.name}
        width={900}
        height={540}
        className="rounded-lg mb-8 object-cover w-full h-96"
      />

      <h2 className="text-2xl font-semibold mb-4">Rooms</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {branch.rooms.map((room) => (
          <div key={room.name} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <Image
              src={room.images[0]}
              alt={room.name}
              width={400}
              height={250}
              className="object-cover h-40 w-full"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">{room.name}</h4>
              <p className="text-sm text-gray-600">{room.beds}</p>
              <p className="mt-2 font-medium">{room.price}</p>
              <p className="text-sm mt-1 text-gray-500">{room.description}</p>
              <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
