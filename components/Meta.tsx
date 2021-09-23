import React from 'react';
import { Helmet } from 'react-helmet';
import thumb from '../public/thumb.png';

export const Meta = () => {
  const content =
    'Tailwindcss glassmorphism generator to generate the glassmorhism effect in tailwindcss framework in easy way';
  return (
    <Helmet>
      <meta
        property="og:image"
        content={`https://tailwindcss-glassmorphism.vercel.app${thumb}`}
      />
      <meta charSet="utf-8" />
      <meta name="description" content={content} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@miral182000" />
      <meta name="twitter:creator" content="@miral182000" />
      <meta name="twitter:title" content="Miral Suthar - Software Engineer" />
      <meta name="twitter:description" content={content} />
      <meta
        name="twitter:image"
        content={`https://tailwindcss-glassmorphism.vercel.app${thumb}`}
      />
      <title>Tailwindcss Glassmorphism Generator</title>
    </Helmet>
  );
};
