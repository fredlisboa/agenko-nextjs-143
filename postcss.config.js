const purgecssConfig = require('./src/purgecss.config.js');

module.exports = {
  plugins: [
    '@tailwindcss/postcss',
    'autoprefixer',
    process.env.NODE_ENV === 'production' && [
      '@fullhuman/postcss-purgecss',
      {
        content: purgecssConfig.content,
        defaultExtractor: content => content.match(/[^<>&\w-/:]+(?<!:)/g) || [],
        ...purgecssConfig
      },
    ],
  ].filter(Boolean),
};