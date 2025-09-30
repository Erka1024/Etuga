
import { CONTACT, SITE } from "./data";
export const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE.name,
  description: SITE.tagline,
  image: SITE.heroImage,
  address: { "@type":"PostalAddress", addressLocality:"Ulaanbaatar", addressCountry:"MN" },
  telephone: CONTACT.phone,
  url: "https://your-domain.mn",
};