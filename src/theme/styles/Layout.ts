import { StyleSheet } from 'react-native';
// import constants from '../constants';

type StyleSheetInterface = { [key: string]: any };

const DefaultStyle: StyleSheetInterface = StyleSheet.create({
  container: { alignSelf: 'stretch' },
});

const MarginStyleMap = (margin: string | number | string[] | number[]) => {
  if (typeof margin === 'string' || typeof margin === 'number') {
    return { margin: margin };
  } else if (Array.isArray(margin)) {
    if (margin.length === 2) {
      return { marginHorizontal: margin[0], marginVertical: margin[1] };
    } else if (margin.length === 3) {
      return {
        marginTop: margin[0],
        marginHorizontal: margin[1],
        marginBottom: margin[2],
      };
    } else if (margin.length === 4) {
      return {
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
      };
    }
  }
  return {};
};

const PaddingStyleMap = (padding: string | number | string[] | number[]) => {
  if (typeof padding === 'string' || typeof padding === 'number') {
    return { padding: padding };
  } else if (Array.isArray(padding)) {
    if (padding.length === 2) {
      return { paddingHorizontal: padding[0], paddingVertical: padding[1] };
    } else if (padding.length === 3) {
      return {
        paddingTop: padding[0],
        paddingHorizontal: padding[1],
        paddingBottom: padding[2],
      };
    } else if (padding.length === 4) {
      return {
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
      };
    }
  }

  return {};
};

const LayoutStyles = {
  DefaultStyle,
  MarginStyleMap,
  PaddingStyleMap,
};

export default LayoutStyles;
