import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        height: '100%',
        color: 'red',
      },
    },
  },
});

export default theme;
