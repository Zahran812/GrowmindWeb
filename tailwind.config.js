/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "primary": "#004407",
              "outline": "#717a6c",
              "on-tertiary-fixed-variant": "#544600",
              "secondary-fixed-dim": "#c6c6c7",
              "inverse-surface": "#2b3234",
              "on-secondary-container": "#616363",
              "on-secondary-fixed-variant": "#454747",
              "secondary-container": "#dfe0e0",
              "error": "#ba1a1a",
              "secondary-fixed": "#e2e2e2",
              "surface-tint": "#2a6b27",
              "on-error": "#ffffff",
              "surface-dim": "#d4dbdd",
              "on-primary-container": "#8ed582",
              "on-tertiary-fixed": "#221b00",
              "surface-variant": "#dde4e6",
              "inverse-primary": "#91d885",
              "on-error-container": "#93000a",
              "tertiary-container": "#c7aa16",
              "on-surface": "#161d1f",
              "on-tertiary": "#ffffff",
              "error-container": "#ffdad6",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "primary-container": "#1a5d1a",
              "tertiary-fixed-dim": "#e4c536",
              "surface-container-low": "#eef5f7",
              "tertiary-fixed": "#ffe264",
              "outline-variant": "#c0c9ba",
              "surface-container-highest": "#dde4e6",
              "secondary": "#5d5f5f",
              "surface-container": "#e8eff1",
              "primary-fixed": "#acf59f",
              "on-surface-variant": "#41493d",
              "surface-container-high": "#e2e9ec",
              "on-primary-fixed": "#002202",
              "on-primary-fixed-variant": "#0c5310",
              "on-background": "#161d1f",
              "surface": "#f4fafd",
              "surface-bright": "#f4fafd",
              "surface-container-lowest": "#ffffff",
              "inverse-on-surface": "#ebf2f4",
              "on-tertiary-container": "#4b3f00",
              "primary-fixed-dim": "#91d885",
              "tertiary": "#6f5d00",
              "on-secondary-fixed": "#1a1c1c",
              "background": "#f4fafd"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "margin-mobile": "16px",
              "section-padding": "80px",
              "container-max": "1280px",
              "gutter": "24px",
              "unit": "8px"
      },
      "fontFamily": {
              "body-lg": [
                      "Inter"
              ],
              "body-md": [
                      "Inter"
              ],
              "display-lg-mobile": [
                      "Montserrat"
              ],
              "headline-sm": [
                      "Montserrat"
              ],
              "display-lg": [
                      "Montserrat"
              ],
              "headline-md": [
                      "Montserrat"
              ],
              "label-caps": [
                      "Inter"
              ]
      },
      "fontSize": {
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "28px",
                              "fontWeight": "400"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "24px",
                              "fontWeight": "400"
                      }
              ],
              "display-lg-mobile": [
                      "32px",
                      {
                              "lineHeight": "40px",
                              "fontWeight": "700"
                      }
              ],
              "headline-sm": [
                      "24px",
                      {
                              "lineHeight": "32px",
                              "fontWeight": "600"
                      }
              ],
              "display-lg": [
                      "48px",
                      {
                              "lineHeight": "56px",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "700"
                      }
              ],
              "headline-md": [
                      "32px",
                      {
                              "lineHeight": "40px",
                              "fontWeight": "600"
                      }
              ],
              "label-caps": [
                      "12px",
                      {
                              "lineHeight": "16px",
                              "letterSpacing": "0.05em",
                              "fontWeight": "700"
                      }
              ]
      },
      "keyframes": {
        "fade-in-up": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        }
      },
      "animation": {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
