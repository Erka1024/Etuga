// types.ts
export type Room = {
  id: string;
  name: string;
  beds: string;           // "1 Queen" гэх мэт
  capacity: number;       // 2
  size?: string;          // "18 m²"
  priceHint?: string;     // "From 120,000₮/night"
  features: string[];     // ["Private bath","City view",...]
  image: string;
};

export type Amenity = { icon: string; label: string; };
export type Review = { quote: string; name: string; country?: string; rating: 1|2|3|4|5; };
export type Nearby = { name: string; distance: string; type: "food"|"sight"|"transport"; };

export type Contact = {
  phone: string; whatsapp?: string; email: string; address: string;
  mapUrl: string; // Google Maps share
};
