import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from '../../theme/styles';
const { LayoutStyles } = styles;

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
  padding?: string | number | string[] | number[];
  margin?: string | number | string[] | number[];
}

const ClrContainer: React.FC<Props> = (props) => {
  var style = {
    ...LayoutStyles.DefaultStyle.container,
  };

  if (typeof props.margin !== 'undefined') {
    const margins = LayoutStyles.MarginStyleMap(props.margin);
    style = { ...style, ...margins };
  }

  if (typeof props.padding !== 'undefined') {
    const paddings = LayoutStyles.PaddingStyleMap(props.padding);
    style = { ...style, ...paddings };
  } else {
    style = { ...style, paddingHorizontal: 14 };
  }

  return <View style={{ ...style, ...props.style }}>{props.children}</View>;
};

export default ClrContainer;
