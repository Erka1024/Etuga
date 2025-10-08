import Image from "next/image";
import Link from "next/link";
import { branches } from "@/lib/data";

export default function BranchesIndex() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">All Branches</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch) => (
          <Link
            key={branch.slug}
            href={`/branches/${branch.slug}`}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition block focus:outline-none focus:ring-2 focus:ring-black/40 ring-offset-2"
          >
            <Image
              src={branch.image}
              alt={branch.name}
              width={500}
              height={300}
              className="object-cover h-48 w-full"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{branch.name}</h3>
              <p className="text-gray-600 text-sm">{branch.address}</p>
              <span className="mt-3 inline-block text-sm underline">
                View details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
