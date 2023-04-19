import { extendTheme } from '@chakra-ui/react';
// import { mode, scale as chakraScale } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  // components: {
  //   Button: {
  //     baseStyle: {
  //       fontWeight: 'bold',
  //       color: 'white',
  //     },
  //     sizes: chakraScale({
  //       sm: {
  //         h: '24px',
  //         fontSize: 'xs',
  //         px: '16px',
  //       },
  //       md: {
  //         h: '36px',
  //         fontSize: 'md',
  //         px: '24px',
  //       },
  //       lg: {
  //         h: '48px',
  //         fontSize: 'lg',
  //         px: '32px',
  //       },
  //     }),
  //     variants: {
  //       'with-shadow': {
  //         bg: 'red.400',
  //         boxShadow: '0 0 2px 2px #efdfde',
  //       },
  //       solid: (props) => ({
  //         bg: mode('red.500', 'red.300')(props),
  //       }),
  //       sm: (props) => ({
  //         bg: mode('green.300', 'gray')(props),
  //       }),
  //     },
  //     defaultProps: {
  //       ...chakraScale('md'),
  //       variant: 'solid',
  //       colorScheme: 'green',
  //     },
  //   },
  // },
});

export default theme;
