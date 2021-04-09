import { StyleSheet } from 'react-native';
import constants from '../constants';

type StyleSheetInterface = { [key: string]: any };

const ColorStyles: StyleSheetInterface = StyleSheet.create({
  primary: { color: constants.colors.primary1 },
  secondary: { color: constants.colors.secondary1 },
});

const LevelStyles: StyleSheetInterface = StyleSheet.create({
  1: { fontSize: 38 },
  2: { fontSize: 30 },
  3: { fontSize: 24 },
  4: { fontSize: 20 },
  5: { fontSize: 16 },
});

const SizeStyles: StyleSheetInterface = StyleSheet.create({
  xs: { fontSize: 14 },
  sm: { fontSize: 16 },
  md: { fontSize: 20 },
  lg: { fontSize: 24 },
  xl: { fontSize: 30 },
  xxl: { fontSize: 38 },
});

const DefaultStyle: StyleSheetInterface = StyleSheet.create({
  text: { fontSize: 16, fontWeight: '400', color: '#000' },
  heading: { fontWeight: 'bold', color: '#000' },
});

const TypographyStyles = {
  DefaultStyle,
  ColorStyles,
  SizeStyles,
  LevelStyles,
};

export default TypographyStyles;
