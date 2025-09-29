/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-jsx transform
    styledJsx: true
  },
  experimental: {
    // This is required for PostCSS to be able to load config files
    // See https://nextjs.org/docs/advanced-features/output-file-tracing#postcss-and-nextjs
    // for more details.
    postcss: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // For client-side compilation, include PurgeCSS
      config.module.rules.push({
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  [
                    '@fullhuman/postcss-purgecss',
                    {
                      content: [
                        './src/**/*.{js,jsx,ts,tsx}',
                        './.next/server/app/**/*.html',
                        './public/**/*.html',
                      ],
                      css: [
                        './.next/static/css/**/*.css',
                        './public/css/bootstrap.min.css',
                        './public/css/critical.css',
                        './public/css/slick.css',
                        './public/css/bootstrap-icons.min.css',
                      ],
                      safelist: [
                        'body',
                        'html',
                        /^col-/,
                        /^row/,
                        /^container/,
                        /^btn/,
                        /^modal/,
                        /^carousel/,
                        /^slick/,
                        /^bi-/,
                        /^bi$/,
                        /^agk-/,
                        /^theme-/,
                        /^pf_/,
                      ],
                      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
                      keyframes: true,
                    },
                  ],
                ],
              },
            },
          },
        ],
      });
    }
    return config;
  },
};

export default nextConfig;
