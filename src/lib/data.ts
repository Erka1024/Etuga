// data.ts
import { Amenity, Room, Review, Nearby, Contact } from "./types";

export const SITE = {
  name: "Guesthouse EO",
  tagline: "Cozy stay in the heart of Ulaanbaatar",
  heroImage: "/images/hero.jpg",
};

export const ROOMS: Room[] = [
  {
    id: "std-double",
    name: "Standard Double",
    beds: "1 Queen",
    capacity: 2,
    size: "18 m²",
    priceHint: "From 120,000₮ / night",
    features: ["Private bathroom", "Heated room", "Fast Wi-Fi"],
    image: "/images/rooms/std-double.jpg",
  },
  // ...
];

export const AMENITIES: Amenity[] = [
  { icon: "wifi", label: "Free Wi-Fi" },
  { icon: "coffee", label: "Breakfast" },
  { icon: "shower", label: "Hot Shower" },
  { icon: "laundry", label: "Laundry" },
  { icon: "car", label: "Parking" },
  // ...
];

export const NEARBY: Nearby[] = [
  { name: "Sukhbaatar Square", distance: "1.1 km", type: "sight" },
  { name: "Chinggis Khaan Museum", distance: "1.4 km", type: "sight" },
  { name: "Airport (UBN)", distance: "45 min", type: "transport" },
];

export const REVIEWS: Review[] = [
  { quote: "Very clean and friendly hosts!", name: "Anna", country: "DE", rating: 5 },
  // ...
];

export const CONTACT: Contact = {
  phone: "+976 99 000 000",
  whatsapp: "+976 99 000 000",
  email: "hello@guesthouse-eo.mn",
  address: "District X, Ulaanbaatar, Mongolia",
  mapUrl: "https://maps.google.com/?q=...",
};
