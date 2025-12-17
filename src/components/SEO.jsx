import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, type = 'website' }) => {
    const siteTitle = "Beyond Marks AI Academy";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = "https://beyondmarks.ai";
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const defaultDescription = "Beyond Marks AI Academy - Top AI coaching center in Bidar. Learn Python, AI, Machine Learning, and Full-Stack Development. 250+ live projects. Small batches. Own your domain. Join the best AI academy near you.";
    const metaDescription = description || defaultDescription;
    const defaultKeywords = "Beyond Marks, Beyond Marks AI Academy, AI Academy Bidar, Academy Near Me, Python Course Bidar, AI Coaching Bidar, Machine Learning Course, Coding Classes Bidar, Best AI Academy, AI Training Center, Beyond Marks Academy, Rakesh Kumar AI Academy, AI Bootcamp Bidar, Full Stack Development Course, Generative AI Course";
    const metaKeywords = keywords || defaultKeywords;
    const ogImage = image || `${siteUrl}/og-image.jpg`;

    // Structured Data for Local Business / Educational Organization
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Beyond Marks AI Academy",
        "alternateName": "Beyond Marks",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "image": ogImage,
        "description": metaDescription,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bidar",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.9134",
            "longitude": "77.5301"
        },
        "telephone": "+91-XXXXXXXXXX",
        "email": "info@beyondmarks.ai",
        "founder": {
            "@type": "Person",
            "name": "Rakesh Kumar"
        },
        "areaServed": {
            "@type": "City",
            "name": "Bidar"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI and Programming Courses",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Course",
                        "name": "Flagship AI & Full-Stack"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Course",
                        "name": "Smart Pro Combo"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Course",
                        "name": "Curiosity Program"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content="Beyond Marks AI Academy" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={fullUrl} />
            
            {/* Language and Location */}
            <meta httpEquiv="content-language" content="en-IN" />
            <meta name="geo.region" content="IN-KA" />
            <meta name="geo.placename" content="Bidar" />
            <meta name="geo.position" content="17.9134;77.5301" />
            <meta name="ICBM" content="17.9134, 77.5301" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={fullTitle} />

            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#0a0a0f" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Beyond Marks" />
            
            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
