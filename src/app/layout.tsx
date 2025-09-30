"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Source_Sans_3, Roboto } from "next/font/google";
import Script from 'next/script';
import { UTMProvider } from "@/components/UTMProvider";

// ============================================
// OTIMIZAÇÃO DE CSS - Importação Seletiva
// ============================================
import './global.css';
// ⚠️ MUDANÇA: Substituir bootstrap completo por versão customizada
import '@/styles/custom-bootstrap.scss'; // <- Bootstrap otimizado (reduz ~74 KiB)
import '../../public/css/slick.css';
import '../../public/css/critical.css';
import '@/app/assets/main.css';

// ============================================
// OTIMIZAÇÃO DE FONTES - Font Display Swap
// ============================================
const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
  display: 'swap', // ✅ Previne FOIT
  fallback: ['system-ui', 'arial', 'sans-serif'],
  preload: true,
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
  display: 'swap', // ✅ Previne FOIT
  fallback: ['system-ui', 'arial', 'sans-serif'],
  preload: true,
});

// ============================================
// SCHEMA JSON-LD para SEO
// ============================================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dra. Gabriella Lisboa - Harmonização Orofacial",
  "image": "https://hof.studiodental.dental/hof-gabriella-gyn.webp",
  "@id": "https://hof.studiodental.dental",
  "url": "https://hof.studiodental.dental",
  "telephone": "+5562982433773",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua 5, nº 691, Loja 01, Térreo, Ed. The Prime Tamandaré Office",
    "addressLocality": "Goiânia",
    "addressRegion": "GO",
    "postalCode": "74115-060",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.6800,
    "longitude": -49.2566
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/dragabriellalisboa/",
    "https://www.google.com/search?sca_esv=adba07b31be7c891&rlz=1C1GCEA_pt-BRBR1165BR1165&cs=1&output=search&kgmid=/g/11h8760pp9&q=Studio+Dental+Odontologia&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=9c6ff277aa151b10&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
  ],
  "medicalSpecialty": "Dentistry",
  "hasMap": "https://www.google.com/search?sca_esv=adba07b31be7c891&rlz=1C1GCEA_pt-BRBR1165BR1165&cs=1&output=search&kgmid=/g/11h8760pp9&q=Studio+Dental+Odontologia&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=9c6ff277aa151b10&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ============================================ */}
        {/* OTIMIZAÇÃO DE PERFORMANCE - Preconnects */}
        {/* ============================================ */}
        
        {/* Critical preconnects (DNS + TCP + TLS) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://iframe.mediadelivery.net" />
        <link rel="preconnect" href="https://assets.mediadelivery.net" />
        
        {/* ✨ NOVO: Preconnect sugerido pelo PageSpeed (economia de 300ms) */}
        <link rel="preconnect" href="https://hof1.studiodental.dental" />
        
        {/* DNS prefetch para domínios não-críticos (apenas DNS) */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://analytics.tiktok.com" />
        
        {/* Schema JSON-LD */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <meta name="author" content="Dra. Gabriella Lisboa | Studio Dental" />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        <UTMProvider>
          {children}
          <SpeedInsights />
          <Analytics />
          {/* <UtmLinkUpdater /> */}
        </UTMProvider>

        {/* ============================================ */}
        {/* SCRIPTS OTIMIZADOS - Lazy Loading */}
        {/* ============================================ */}
        
        {/* Keitaro Tracking - Load after page interactive */}
        <Script 
          id="keitaro-tracking-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: `
            if (!window.KTracking){
              window.KTracking={
                collectNonUniqueClicks: false, 
                multiDomain: false, 
                R_PATH: 'https://hof1.studiodental.dental/HMpJBwrp', 
                P_PATH:'https://hof1.studiodental.dental/28509f0/postback', 
                listeners: [], 
                reportConversion: function(){this.queued = arguments;}, 
                getSubId: function(fn) {this.listeners.push(fn);}, 
                ready: function(fn) {this.listeners.push(fn);} 
              };
            }
            (function(){
              var a=document.createElement('script');
              a.type='application/javascript';
              a.async=true;
              a.src='https://hof1.studiodental.dental/js/k.min.js';
              var s=document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(a,s)
            })();
          ` }} 
        />
        
        {/* Google Tag Manager - Load after interactive */}
        <Script 
          id="google-tag-manager" 
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MGLJVNRZ');
          ` }} 
        />
        
        {/* Google Analytics - Load after interactive */}
        <Script 
          id="google-analytics-loader"
          strategy="lazyOnload" 
          src="https://www.googletagmanager.com/gtag/js?id=G-0BXKYQERWH"
        />
        <Script 
          id="google-analytics-config"
          strategy="lazyOnload"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0BXKYQERWH', {
              page_path: window.location.pathname,
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        
        {/* Noscript fallbacks */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height='0' width='0' alt='' src='https://hof1.studiodental.dental/zR1jFW7b'/>
        </noscript>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGLJVNRZ"
            height="0" 
            width="0" 
            style={{display:"none",visibility:"hidden"}}
          />
        </noscript>
      </body>
    </html>
  );
}