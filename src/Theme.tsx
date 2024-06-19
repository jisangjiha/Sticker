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
    '#root': `'Open Sans'`,
  },
  colors: {
    bgPurple: { 100: '#D1D2F9' },
    bgBlue: { 100: '#A3BCF9', 200: '#7796CB', 300: '#B9C0DA' },
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
