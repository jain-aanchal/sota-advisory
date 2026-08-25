const BASE = "https://sotaadvisory.com";

type Props = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
};

export default function ArticleSchema({
  slug,
  title,
  description,
  datePublished,
}: Props) {
  const url = `${BASE}/writing/${slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: "Aanchal Jain",
      url: `${BASE}/about/`,
    },
    publisher: {
      "@type": "Organization",
      name: "SOTA Advisory",
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: `${BASE}/opengraph-image`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
