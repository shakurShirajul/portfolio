const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "cssnano": process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        minifyFontValues: true,
        minifyGradients: true,
      }]
    } : false,
  },
};

export default config;
