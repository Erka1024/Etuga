import Image from "next/image";
import Link from "next/link";
import { branches } from "@/lib/data";

export default function Rooms() {
  const top3 = branches.slice(0, 3);

  return (
    <section id="rooms" className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
        Our Branches & Rooms
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {top3.map((branch) => (
          <div
            key={branch.slug}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition block focus:outline-none"
          >
            <Link href={`/branches/${branch.slug}`} className="block">
              <Image
                src={branch.image}
                alt={branch.name}
                width={500}
                height={300}
                className="object-cover h-48 w-full"
              />
            </Link>

            <div className="p-4">
              <h3 className="font-semibold text-lg">{branch.name}</h3>
              <p className="text-gray-600 text-sm">{branch.address}</p>

              {/* See more (branch details) */}
              <Link
                href={`/branches/${branch.slug}`}
                className="inline-flex items-center mt-3 px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See all (all branches page) */}
      <div className="text-center mt-10">
        <Link
          href="/branches"
          className="inline-flex items-center px-5 py-2 rounded border border-black hover:bg-black hover:text-white transition"
        >
          See all locations
        </Link>
      </div>
    </section>
  );
}
