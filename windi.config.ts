const { transform } = require('windicss/helpers')
const typography = require('windicss/plugin/typography')

const colors = require('windicss/colors')
  module.exports = {
    extract: {
      // accepts globs and file paths relative to project root
      include: [
        'index.html',
        'src/**/*.{html,svelte}',
      ],},
    plugins: [
      typography, transform('daisyui'),
    ],

  }