import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <meta charSet="utf-8" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=K2D:wght@400;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
