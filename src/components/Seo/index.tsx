import Head from 'next/head';
import { useRouter } from 'next/router';
import { SEOModel } from 'src/models/seo.model';

export const SeoComponent: React.FC<SEOModel> = ({
  description,
  keywords,
  title,
}) => {
  const router = useRouter();
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="author" content="https://github.com/wueliton" />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="robots" content="index, follow" />

      <meta name="copyright" content={description} />
      <meta name="distribution" content="global" />
      <meta name="audience" content="all" />
      <meta
        name="url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <meta name="classification" content={description} />
      <meta name="category" content={description} />
      <meta name="Page-Topic" content={title} />
      <meta name="rating" content="general" />
      <meta name="city" content="São Paulo, SP" />
      <meta name="country" content="Brasil" />
      <meta property="publisher" content="Paulo Horácio" />

      {/* Google */}
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.placename" content="Brasil" />
      <meta name="geo.region" content="São Paulo, SP" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`}
      />
      <meta
        name="twitter:site"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image:src"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`}
      />

      {/* Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
      />
      <meta property="og:site_name" content="ArteCor" />
      <meta property="og:author" content="Paulo Horácio" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:region" content="Brasil" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
      <meta property="og:description" content={description} />
      <link rel="icon" href="favicon.svg" type="image/x-icon" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.svg" />
    </Head>
  );
};
