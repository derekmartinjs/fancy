import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// CHANGE THIS
const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};
export default {
  ...DefaultTheme,
  dark: false,
  fonts: configureFonts(fontConfig),
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
    accent: '#fff',
    background: '#fff',
  },
};
