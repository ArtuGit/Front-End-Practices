module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': {'min': '1px', 'max': '767px'},
      'md': {'min': '768px'},
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
    },
    extend: {
      colors: {
        'cst-dark': {
          lighter: '#3d5a80',
          default: '#293241',
        },
        'cst-light': {
          darker: '#98c1d9',
          default: '#e0fbfc',
        },
        'cst-orange': '#ee6c4d',
      },
    },
  },
  variants: {},
  plugins: [],
}
