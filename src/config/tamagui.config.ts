import { createFont, createTamagui, createTokens } from 'tamagui';

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  true: 16,
  lg: 18,
  xl: 20,
};

const createCustomFont = (family: string) => {
  return createFont({
    family,
    size: fontSizes,
  });
};

const headingFont = createCustomFont('Roboto_700Bold');
const bodyFont = createCustomFont('Roboto_400Regular');

const size = {
  0.5: 2,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  14: 56,
  true: 56,
  16: 64,
  24: 96,
  28: 112,
  32: 128,
  33: 148,
};

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, true: 0, 1: 3, 2: 6 },
  zIndex: { 0: 0, true: 0, 1: 100, 2: 200 },
  color: {
    green500: '#00b37e',
    green700: '#00875f',
    gray100: '#e1e1e6',
    gray200: '#c4c4cc',
    gray300: '#7c7c8a',
    gray400: '#323238',
    gray500: '#29292e',
    gray600: '#202024',
    gray700: '#121214',
    white: '#fff',
    red: '#f75a68',
  },
});

const tamaguiConfig = createTamagui({
  tokens,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.gray100,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end

  shorthands: {
    mr: 'marginRight',
    mv: 'marginVertical',
    mt: 'marginTop',
    mb: 'marginBottom',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    ph: 'paddingHorizontal',
    bg: 'backgroundColor',
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
    h: 'height',
  } as const,
});

type AppConfig = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}
export { tamaguiConfig };
