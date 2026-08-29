/**
 * Prairie Club Modernism SEO layer: evergreen local-service metadata with understated,
 * factual language and consistent regional brand signals.
 */
import { useEffect } from "react";

const siteUrl = "https://www.tpceckroat.com";
const defaultImage = "/manus-storage/tpc-eckroat-hero_feb81cdb.jpg";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function setMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({ title, description, path, image = defaultImage }: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
    const shareImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", shareImage);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "tpc-eckroat-schema";
    document.getElementById(schemaId)?.remove();
    const schema = document.createElement("script");
    schema.id = schemaId;
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: "TPC Eckroat",
      url: siteUrl,
      image: `${siteUrl}/manus-storage/tpc-eckroat-logo-redesign_bc9f28c9.svg`,
      logo: `${siteUrl}/manus-storage/tpc-eckroat-logo-redesign_bc9f28c9.svg`,
      email: "info@tpceckroat.com",
      telephone: "+1-405-509-1988",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4260 N Boulevard, Suite 128",
        addressLocality: "Edmond",
        addressRegion: "OK",
        postalCode: "73034",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Edmond, Oklahoma" },
        { "@type": "City", name: "Oklahoma City, Oklahoma" },
        { "@type": "City", name: "Stillwater, Oklahoma" },
      ],
      description:
        "TPC Eckroat designs and builds complete outdoor environments including artificial turf, putting greens, custom pools, concrete, retaining walls, pergolas, pool houses, and outdoor kitchens.",
      knowsAbout: [
        "Artificial turf installation",
        "Backyard putting greens",
        "Custom swimming pools",
        "Concrete patios and driveways",
        "Retaining walls",
        "Pergolas",
        "Outdoor kitchens",
        "Pool houses",
      ],
    });
    document.head.appendChild(schema);
  }, [description, image, path, title]);

  return null;
}
