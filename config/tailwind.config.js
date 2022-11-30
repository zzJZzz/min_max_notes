const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ]

  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#a991f7",
      //     secondary: "#f6d860",
      //     accent: "#37cdbe",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
      "cyberpunk",
      
    ],
  },
}
