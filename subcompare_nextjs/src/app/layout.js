import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'SubCompare',
  description: 'Get live subscription prices across Music, Fitness, OTT, Cloud, Learning, Food Delivery & more. Compare and find the best deals!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>{children}</body>
    </html>
  )
}


