// purgecss.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './.next/server/app/**/*.html'],
    css: ['./.next/static/css/**/*.css'],
    output: './out/css',
    safelist: [
      'body',
      'html',
      // Bootstrap patterns
      /^col-/,
      /^row/,
      /^container/,
      /^btn/,
      /^modal/,
      /^carousel/,
      /^slick/,
      /^bi-/,
      /^bi$/,
      // Your patterns
      /^agk-/,
      /^theme-/,
      /^pf_/,
    ]
  }