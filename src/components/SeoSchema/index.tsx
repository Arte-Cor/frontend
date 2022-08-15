import { useRouter } from 'next/router';
import { SEOModel } from 'src/models/seo.model';

export const SeoSchema: React.FC<SEOModel> = ({
  title,
  description,
  keywords,
}) => {
  const router = useRouter();
  const canonical = `${process.env.NEXT_PUBLIC_BASE_URL}${router.basePath}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://www.schema.org',
            '@type': 'WebSite',
            name: 'ArteCor',
            url: canonical,
            description: description,
            publisher: 'http://www.wule.com.br',
          }),
        }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'TechArticle',
            headline: title,
            alternativeHeadline: title,
            proficiencyLevel: 'Beginner',
            image: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`,
            author: 'Blog ZQC',
            genre: canonical,
            keywords: keywords,
            publisher: 'http://www.wule.com.br/',
            url: canonical,
            description: description,
            articleBody: description,
          }),
        }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': process.env.NEXT_PUBLIC_BASE_URL,
                  name: 'Blog ZQC',
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@id': canonical,
                  name: title,
                },
              },
            ],
          }),
        }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            author: 'Blog ZQC',
            contentUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`,
            description: description,
            name: title,
            thumbnailUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`,
            thumbnail: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`,
          }),
        }}
      ></script>
    </>
  );
};
