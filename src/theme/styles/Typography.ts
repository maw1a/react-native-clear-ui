import { StyleSheet } from 'react-native';
import constants from '../constants';

type StyleSheetInterface = { [key: string]: any };

const ColorStyles: StyleSheetInterface = StyleSheet.create({
  primary: { color: constants.colors.primary1 },
  secondary: { color: constants.colors.secondary1 },
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
});

const TypographyStyles = {
  DefaultStyle,
  ColorStyles,
  SizeStyles,
};

export default TypographyStyles;
