import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'SubCompare - Comprehensive Subscription Service Comparison',
  description: 'Compare prices and features of top subscription services across Music, OTT, Fitness, Cloud Storage, E-Learning, Food Delivery, and more. Discover the best value for your needs with SubCompare!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/faviconSC.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
