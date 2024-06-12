import { extendTheme } from '@chakra-ui/react';

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
  colors: {
    bgPurple: { 100: '#D1D2F9' },
    bgBlue: { 100: '#A3BCF9', 200: '#7796CB' },
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
