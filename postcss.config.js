module.exports = {
  plugins: [
    // Autoprefixer for browser compatibility
    'autoprefixer',
    
    // PostCSS Preset Env for modern CSS features
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false,
          'nesting-rules': true
        }
      }
    ],
    
    // PurgeCSS - Remove unused CSS (only in production)
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                // Scan all components and pages
                './app/**/*.{js,jsx,ts,tsx}',
                './pages/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}',
                './src/**/*.{js,jsx,ts,tsx}',
                
                // Include any other directories with components
                './layouts/**/*.{js,jsx,ts,tsx}',
                
                // Don't forget to scan index.html if you have one
                './public/index.html',
              ],
              
              // Default extractor for JavaScript/TypeScript
              defaultExtractor: content => {
                // Capture as liberally as possible, including things like `h-(screen-1.5)`
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                
                // Capture classes within quotes
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                
                return broadMatches.concat(innerMatches)
              },
              
              // Safelist patterns - classes to always keep
              safelist: {
                standard: [
                  // Keep all Bootstrap grid classes
                  /^col-/,
                  /^row/,
                  /^container/,
                  /^btn/,
                  /^badge/,
                  /^alert/,
                  /^modal/,
                  /^nav/,
                  /^navbar/,
                  /^card/,
                  /^dropdown/,
                  /^form/,
                  /^input/,
                  /^table/,
                  /^pagination/,
                  
                  // Keep Bootstrap utilities
                  /^d-/,
                  /^p-/,
                  /^m-/,
                  /^text-/,
                  /^bg-/,
                  /^border/,
                  /^flex/,
                  /^justify/,
                  /^align/,
                  /^position/,
                  
                  // Keep Slick carousel classes
                  /^slick/,
                  
                  // Keep Bootstrap Icons
                  /^bi-/,
                  /^bi$/,
                  
                  // Keep your custom classes
                  /^agk-/,
                  /^theme-/,
                  /^pf_/,
                  /^text-anm/,
                  /^text-flip/,
                  
                  // Keep animation classes
                  /animate/,
                  /fade/,
                  /slide/,
                  /show/,
                  /hide/,
                  /active/,
                  /disabled/,
                  /loading/,
                  
                  // Keep responsive classes
                  /^sm:/,
                  /^md:/,
                  /^lg:/,
                  /^xl:/,
                  /^xxl:/,
                ],
                
                // Deep selector patterns
                deep: [
                  /data-/,
                  /aria-/,
                ],
                
                // Safelist specific classes
                greedy: [
                  // Classes that might be constructed dynamically
                  /col-(sm|md|lg|xl|xxl)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
                  /offset-(sm|md|lg|xl|xxl)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
                ],
              },
              
              // Keep all styles in specific files
              dynamicAttributes: ['data-theme', 'data-bs-theme'],
              
              // Variables to preserve
              variables: true,
              
              // Keep keyframes
              keyframes: true,
              
              // Font faces to preserve
              fontFace: true,
              
              // Rejected - never remove these
              rejected: true,
              
              // Remove unused CSS variables
              variables: false,
            }
          ]
        ]
      : []),
    
    // CSS Nano for minification (only in production)
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            'cssnano',
            {
              preset: [
                'default',
                {
                  discardComments: {
                    removeAll: true,
                  },
                  normalizeWhitespace: true,
                  colormin: true,
                  convertValues: true,
                  calc: true,
                  minifySelectors: true,
                  mergeRules: true,
                  minifyParams: true,
                  minifyFontValues: true,
                  normalizeUrl: true,
                  mergeLonghand: true,
                }
              ]
            }
          ]
        ]
      : []),
  ],
}