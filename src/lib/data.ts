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
export const branches = [
  {
    id: 1,
    slug: "eo-guesthouse",
    name: "EO Guesthouse",
    address: "Downtown, Ulaanbaatar",
    image: "/images/branches/eo-guesthouse.jpg",
    rooms: [
      {
        name: "Standard Twin Room",
        beds: "2 Single Beds",
        price: "80,000₮ / night",
        description: "Comfortable twin room with modern design, perfect for friends or colleagues traveling together.",
        images: [
          "/images/rooms/twin1.jpg",
          "/images/rooms/twin2.jpg"
        ]
      },
      {
        name: "Deluxe Double Room",
        beds: "1 Queen Bed",
        price: "120,000₮ / night",
        description: "Spacious deluxe room ideal for couples, featuring a large bed and a city view.",
        images: [
          "/images/rooms/deluxe1.jpg",
          "/images/rooms/deluxe2.jpg"
        ]
      },
      {
        name: "Family Suite",
        beds: "1 Queen + 2 Single Beds",
        price: "180,000₮ / night",
        description: "Perfect for families, with two bedrooms and a cozy living area.",
        images: [
          "/images/rooms/family1.jpg",
          "/images/rooms/family2.jpg"
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "city-center-inn",
    name: "City Center Inn",
    address: "Sukhbaatar District, Ulaanbaatar",
    image: "/images/branches/city-center-inn.jpg",
    rooms: [
      {
        name: "Economy Single Room",
        beds: "1 Single Bed",
        price: "60,000₮ / night",
        description: "Compact room with all essentials for a comfortable stay.",
        images: [
          "/images/rooms/economy1.jpg",
          "/images/rooms/economy2.jpg"
        ]
      },
      {
        name: "Business Double Room",
        beds: "1 Queen Bed",
        price: "100,000₮ / night",
        description: "Ideal for business travelers, with workspace and fast Wi-Fi.",
        images: [
          "/images/rooms/business1.jpg",
          "/images/rooms/business2.jpg"
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "airport-lodge",
    name: "Airport Lodge",
    address: "Near Chinggis Khaan International Airport",
    image: "/images/branches/airport-lodge.jpg",
    rooms: [
      {
        name: "Transit Single",
        beds: "1 Single Bed",
        price: "50,000₮ / night",
        description: "Simple and clean single room for short layovers.",
        images: [
          "/images/rooms/transit1.jpg",
          "/images/rooms/transit2.jpg"
        ]
      },
      {
        name: "Premium Suite",
        beds: "1 King Bed",
        price: "150,000₮ / night",
        description: "Luxury suite with lounge area, ideal for VIP guests or couples.",
        images: [
          "/images/rooms/premium1.jpg",
          "/images/rooms/premium2.jpg"
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "airport-lofffdge",
    name: "Airport Lodge",
    address: "Near Chinggis Khaan International Airport",
    image: "/images/branches/airport-lodge.jpg",
    rooms: [
      {
        name: "Transit Single",
        beds: "1 Single Bed",
        price: "50,000₮ / night",
        description: "Simple and clean single room for short layovers.",
        images: [
          "/images/rooms/transit1.jpg",
          "/images/rooms/transit2.jpg"
        ]
      },
      {
        name: "Premium Suite",
        beds: "1 King Bed",
        price: "150,000₮ / night",
        description: "Luxury suite with lounge area, ideal for VIP guests or couples.",
        images: [
          "/images/rooms/premium1.jpg",
          "/images/rooms/premium2.jpg"
        ]
      }
    ]
  }
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
