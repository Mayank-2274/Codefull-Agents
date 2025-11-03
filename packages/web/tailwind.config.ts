import type { Config } from 'tailwindcss';

// Colors from the gradient provided by the user
const palette = {
  // Dark blue-green (first color in gradient)
  rich_black: {
    DEFAULT: '#001219',
    100: '#000405',
    200: '#00070a',
    300: '#000b0f',
    400: '#000f14',
    500: '#001219',
    600: '#00587a',
    700: '#009ddb',
    800: '#3dc8ff',
    900: '#9ee4ff'
  },
  // Teal (second color in gradient)
  deep_teal: {
    DEFAULT: '#00485B',
    100: '#000e12',
    200: '#001c24',
    300: '#002a36',
    400: '#003848',
    500: '#00485B',
    600: '#007a9c',
    700: '#00abdd',
    800: '#33ccff',
    900: '#99e5ff'
  },
  // Mid teal (third color in gradient)
  midnight_green: {
    DEFAULT: '#005f73',
    100: '#001417',
    200: '#00272f',
    300: '#003b46',
    400: '#004e5e',
    500: '#005f73',
    600: '#00a3c4',
    700: '#13d8ff',
    800: '#62e5ff',
    900: '#b0f2ff'
  },
  // Dark cyan (fourth color in gradient)
  dark_cyan: {
    DEFAULT: '#0a9396',
    100: '#021d1e',
    200: '#043b3b',
    300: '#065859',
    400: '#087577',
    500: '#0a9396',
    600: '#0ed3d7',
    700: '#39eff2',
    800: '#7bf4f7',
    900: '#bdfafb'
  },
  // Aquamarine (fifth color in gradient)
  tiffany_blue: {
    DEFAULT: '#94d2bd',
    100: '#153229',
    200: '#2a6551',
    300: '#3f977a',
    400: '#61bd9e',
    500: '#94d2bd',
    600: '#a9dbca',
    700: '#bee4d7',
    800: '#d4ede5',
    900: '#e9f6f2'
  },
  // Cream (sixth color in gradient)
  vanilla: {
    DEFAULT: '#e9d8a6',
    100: '#403410',
    200: '#7f6720',
    300: '#bf9b30',
    400: '#d9bc66',
    500: '#e9d8a6',
    600: '#ede0b7',
    700: '#f2e7c9',
    800: '#f6efdb',
    900: '#fbf7ed'
  },
  // Golden yellow (seventh color in gradient)
  gamboge: {
    DEFAULT: '#ee9b00',
    100: '#301f00',
    200: '#603e00',
    300: '#905d00',
    400: '#c07d00',
    500: '#ee9b00',
    600: '#ffb327',
    700: '#ffc65d',
    800: '#ffd993',
    900: '#ffecc9'
  },
  // Orange (eighth color in gradient)
  alloy_orange: {
    DEFAULT: '#ca6702',
    100: '#281400',
    200: '#512901',
    300: '#793d01',
    400: '#a25202',
    500: '#ca6702',
    600: '#fd850d',
    700: '#fda349',
    800: '#fec286',
    900: '#fee0c2'
  },
  // Burnt orange (ninth color in gradient)
  rust: {
    DEFAULT: '#bb3e03',
    100: '#250c01',
    200: '#4a1801',
    300: '#702402',
    400: '#953102',
    500: '#bb3e03',
    600: '#f95104',
    700: '#fc7c41',
    800: '#fda880',
    900: '#fed3c0'
  },
  // Red (tenth color in gradient)
  rufous: {
    DEFAULT: '#ae2012',
    100: '#230604',
    200: '#460d07',
    300: '#69130b',
    400: '#8c190f',
    500: '#ae2012',
    600: '#e72b1a',
    700: '#ed6053',
    800: '#f3958d',
    900: '#f9cac6'
  },
  auburn: {
    DEFAULT: '#9b2226',
    100: '#1f0708',
    200: '#3e0e0f',
    300: '#5d1417',
    400: '#7c1b1e',
    500: '#9b2226',
    600: '#cf2e33',
    700: '#dc6165',
    800: '#e89698',
    900: '#f3cacc'
  }
};

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: palette
    }
  },
  plugins: []
};

export default config;
