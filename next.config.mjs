/** @type {import('next').NextConfig} */

const nextConfig = {
  // ========================================
  // CONFIGURAÇÕES ORIGINAIS (mantidas)
  // ========================================
  compiler: {
    // Enables the styled-jsx transform
    styledJsx: true,
    // Remove console.log em produção para reduzir tamanho do bundle
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  webpack: (config, { isServer }) => {
    // Suprimir warnings de depreciação do SASS do Bootstrap
    config.infrastructureLogging = {
      level: 'error',
    };
    
    // Important: return the modified config
    return config;
  },

  // Add allowedDevOrigins to resolve the cross-origin request warning
  allowedDevOrigins: [
    'https://9000-firebase-agenko-nextjs-143-1758813114838.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev',
    'https://3001-firebase-agenko-nextjs-143-1758813114838.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev'
  ],

  // ========================================
  // OTIMIZAÇÕES DE PERFORMANCE
  // ========================================
  
  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compressão (habilitada por padrão, mas explicitada aqui)
  compress: true,

  // Geração de source maps apenas em desenvolvimento
  productionBrowserSourceMaps: false,

  // ========================================
  // HEADERS DE CACHE (melhorar TTL)
  // ========================================
  async headers() {
    return [
      // Cache agressivo para assets estáticos
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache para imagens e fontes
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Preconnect para origens externas críticas
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://hof1.studiodental.dental>; rel=preconnect',
          },
        ],
      },
    ];
  },

  // ========================================
  // EXPERIMENTAL (opcional - testar)
  // ========================================
  experimental: {
    // Otimiza pacotes de terceiros
    optimizePackageImports: [
      'react',
      'react-dom',
      'bootstrap',
      'react-bootstrap',
    ],
  },
};

export default nextConfig;