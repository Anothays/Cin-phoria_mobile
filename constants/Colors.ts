/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#6c757d';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    primary: '#292323',
    secondary: '#0a288b',
    backgroundPrimary: '#fff',
    backgroundSecondary: "whiteSmoke",
    headerBackgroundColor: '#240D80',
    TabBarBackgroundColor: '#240D80',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    primary: '#292323',
    secondary: '#0a288b',
    backgroundPrimary: "#0d1b2a",
    backgroundSecondary: "#25292e",
    headerBackgroundColor: '#240D80',
    TabBarBackgroundColor: '#240D80',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
