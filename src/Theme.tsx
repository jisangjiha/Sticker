import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
  fonts: {
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    bgPurple: { 100: '#D1D2F9' },
    bgBlue: { 200: '#7796CB', 300: '#B9C0DA', 400: '#A3BCF9', 700: '#576490' },
    bgGray: { 100: '#E4E7F1' },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
});

export default theme;
