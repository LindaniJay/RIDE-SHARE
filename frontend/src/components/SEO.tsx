import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "RideShare SA - South Africa's Leading Peer-to-Peer Vehicle Rental Platform",
  description = "Rent vehicles from trusted hosts across South Africa. Find cars, bakkies, SUVs and more. Safe, secure, and insured rentals with local payment options including Payfast.",
  keywords = "vehicle rental, car rental, South Africa, peer-to-peer, bakkie rental, SUV rental, Cape Town, Johannesburg, Durban, Payfast, EFT, SnapScan",
  image = "https://rideshare-sa.co.za/og-image.jpg",
  url = "https://rideshare-sa.co.za",
  type = "website"
}) => {
  const fullTitle = title.includes('RideShare SA') ? title : `${title} | RideShare SA`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="RideShare SA" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en-ZA" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.country" content="South Africa" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="RideShare SA" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@RideShareSA" />
      <meta name="twitter:creator" content="@RideShareSA" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RideShare SA" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RideShare SA",
          "url": "https://rideshare-sa.co.za",
          "logo": "https://rideshare-sa.co.za/logo.png",
          "description": "South Africa's leading peer-to-peer vehicle rental platform",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Long Street",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "postalCode": "8001",
            "addressCountry": "ZA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27-21-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["English", "Afrikaans"]
          },
          "sameAs": [
            "https://facebook.com/rideshare-sa",
            "https://twitter.com/rideshare-sa",
            "https://instagram.com/rideshare-sa"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          },
          "serviceType": "Vehicle Rental",
          "priceRange": "R150-R2000 per day"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
