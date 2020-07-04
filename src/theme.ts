import {DefaultTheme} from 'react-native-paper';

// CHANGE THIS
export default {
  ...DefaultTheme,
  dark: false,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
    accent: '#fff',
    background: '#fff',
  },
};
