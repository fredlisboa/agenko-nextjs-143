import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Harmonização Orofacial em Goiânia | Dra. Gabriella Lisboa',
    template: '%s | Dra. Gabriella Lisboa',
  },
  description: 'Especialista em Harmonização Orofacial em Goiânia. Realce sua beleza com Lipo de Papada, Rinomodelação, Fios de PDO e Preenchimento Facial. Agende sua avaliação!',
  keywords: 'harmonização orofacial goiânia, lipo de papada, rinomodelação, fios de pdo, preenchimento facial, lifting facial, dentista goiânia, platismoplastia, slim lift, toxina botulínica, bioestimuladores de colágeno, sculptra, galderma, i-trhead, ultramformer mpt, ultraformer, lavieen, ultra',
  authors: [{ name: 'Dra. Gabriella Lisboa', url: 'https://www.instagram.com/dragabriellalisboa/' }],
  openGraph: {
    title: 'Harmonização Orofacial em Goiânia | Dra. Gabriella Lisboa',
    description: 'Realce sua beleza natural com procedimentos seguros e personalizados. Lipo de Papada, Rinomodelação e mais.',
    url: 'https://hof.studiodental.dental',
    siteName: 'Dra. Gabriella Lisboa | Harmonização Orofacial',
    images: [
      {
        url: 'https://hof.studiodental.dental/hof-gabriella-gyn.webp',
        width: 1200,
        height: 630,
        alt: 'Dra. Gabriella Lisboa, especialista em Harmonização Orofacial em Goiânia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmonização Orofacial em Goiânia | Resultados Naturais',
    description: 'Transforme sua autoestima com procedimentos de ponta. Lipo de Papada, Rinomodelação, Fios de PDO e Preenchimento Facial com especialista em Goiânia.',
    images: ['https://hof.studiodental.dental/hof-gabriella-gyn.webp'],
    creator: '@dragabriellalisboa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};
