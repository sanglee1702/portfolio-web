module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['app/global.module.css'],
    },
    'postcss-import': {},
    'postcss-nesting': {}, // enables nesting like :global inside layers
    'postcss-custom-media': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    },
  },
};
