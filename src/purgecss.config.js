// purgecss.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './.next/server/app/**/*.html', './public/**/*.html'],
    css: ['./.next/static/css/**/*.css', './public/css/bootstrap.min.css', './public/css/critical.css', './public/css/slick.css'],
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