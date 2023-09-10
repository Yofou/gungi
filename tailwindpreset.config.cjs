// Adds First-party TypeScript types (https://tailwindcss.com/blog/tailwindcss-v3-1#first-party-type-script-types)
/** @type {import('tailwindcss').Config} */
// Tailwind Config
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "320px",
          width: "100%",
          display: "flex",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          "@screen tablet": {
            maxWidth: "592px",
            paddingLeft: 0,
            paddingRight: 0,
          },
          "@screen laptop": {
            maxWidth: "1086px",
          },
          "@screen desktop": {
            maxWidth: "1366px",
          },
          "@screen widescreen": {
            maxWidth: "2000px",
          },
        },
        ".grid-default-gaps": {
          //extending grid tailwind class
          display: "grid",
          "@screen tablet": {
            gap: "10px 10px",
          },
          "@screen laptop": {
            gap: "32px 32px",
          },
          "@screen desktop": {
            gap: "30px 30px",
          },
          "@screen widescreen": {
            gap: "25px 25px",
          },
        },
        ".flex-default-gaps": {
          //extending flex tailwind class
          display: "flex",
          "@screen tablet": {
            gap: "10px",
          },
          "@screen laptop": {
            gap: "32px",
          },
          "@screen desktop": {
            gap: "30px",
          },
          "@screen widescreen": {
            gap: "25px",
          },
        },
      })
    },
  ],
  //  see https://tailwindcss.com/docs/theme
  // As this is mobile first we dont have a screen for mobile devices but we do have a default container abaove.
  // Mobile devices: Artboard: 447px Content width: 375px 12 columns Default gutter width (column gap) is 10px Column width 22px Distance from the left and right edges is 36px Viewport height: 667px Breakpoint: min width 0px, max width 767px
  theme: {
    screens: {
      xsm : {'max' : '376px'},
      pre_laptop : {'max' : '1366px'},
      tablet: "768px", // Artboard: 768px, Content width: 592px, 12 columns, Default gutter width (column gap) is 32px, Column width 20px, MX (Distance from left and right edges) is 88px, Viewport height: 1024px, Breakpoints: min width 768px, max width 1365px
      tablet_only: {'min' : '376px' , 'max' : '1366px'},
      laptop: "1366px", // Artboard 1366px, Content width: 1086px, 12 columns, Default gutter width (column gap) is 30px, Column width: 63px MX (Distance from left and right edges) is 140px, Viewport height: 768px, Breakpoints: min width: 1366, Max width 1645px
      laptop_only: {'min' : '1366px' , 'max' : '1645px'},
      desktop: "1646px", // Artboard 1920px, Content width: 1366px, 12 columns, Default gutter width (column gap) is 25px, Column width: 91px, MX (Distance from left and right edges) is 276px, Viewport height: 1080px, Breakpoints: min width: 1646, Max width 1920px
      widescreen: "2560px", // Artboard 2560px, Content width: 2000px, 12 columns, Default gutter width (column gap) is 40px, Column width: 130px, MX (Distance from left and right edges) is 276px, Viewport height: 1080px, Breakpoints: min width: 1646, Max width 1920px
    },
    extend: {
      spacing: {
        '15': '3.75rem',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        'currentColor': "currentColor",
        white: "#ffffff",
        "white-ffffff": "#ffffff",
        "art-black": "#010101",
        "art-light": "#aaaaaa",
        "bright-blue": "#6894d9",
        "cloud-burst": "#1d2b4e",
        "cloud-white": "#f3f3f3",
        concrete: "#f3f3f326",
        "cut-light": "#f6726f",
        "cut-red": "#d02027",
        "dark-grey": "#504f51",
        "dark-blue": "#0d274e",
        "dove-gray": "#707070",
        "light-blue": "#d5e4ff",
        "pro-blue": "#4477bc",
        "pro-light": "#6db0f3",
        "rich-blue": "#365b94",
        "shadow-grey": "#2e2e2e",
        "silver": "#cbcbcb",
        "soft-blue": "#e1e6ef",
        "xpt-gold": "#e7c01f",
        "xpt-light": "#ffe86d",
      },
      fontFamily: {
        primaryfont:
          'aktiv-grotesk, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        montserrat:
          'montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      borderWidth: {
        '1' : '1px',
      }
    },
  },
  corePlugins: {
    container: false,
  },
}
