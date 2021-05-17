import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from '../../theme/styles';
const { TypographyStyles } = styles;

interface Props {
  children?: React.ReactNode;
  style?: TextStyle;
  color?: 'primary' | 'secondary';
  level?: 1 | 2 | 3 | 4 | 5;
}

const ClrHeading: React.FC<Props> = (props) => {
  const { children } = props;

  var style = {
    ...TypographyStyles.DefaultStyle.heading,
  };

  if (props.color) {
    if (props.color in TypographyStyles.ColorStyles) {
      style = { ...style, ...TypographyStyles.ColorStyles[props.color] };
    } else {
      style = { ...style, color: props.color };
    }
  }

  if (props.level) {
    if (props.level in TypographyStyles.LevelStyles) {
      style = { ...style, ...TypographyStyles.LevelStyles[props.level] };
    }
  }

  return <Text style={{ ...style, ...props.style }}>{children}</Text>;
};

export default ClrHeading;
