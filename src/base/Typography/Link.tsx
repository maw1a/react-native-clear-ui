import React from 'react';
import { Text, TextStyle, Linking, TouchableOpacity } from 'react-native';
import styles from '../../theme/styles';
const { TypographyStyles } = styles;

interface Props {
  children?: React.ReactNode;
  style?: TextStyle;
  color?: string;
  size?: string;
  weight?: string;
  href?: string;
  noline?: boolean;
}

const ClrLink: React.FC<Props> = (props) => {
  const { children } = props;

  const openUrl = async () => {
    if (props.href) {
      await Linking.openURL(props.href);
    }
  };

  var style = {
    ...TypographyStyles.DefaultStyle.link,
  };

  if (!props.noline) {
    style = { ...style, textDecorationLine: 'underline' };
  }

  if (props.weight) {
    style = { ...style, fontWeight: props.weight };
  }

  if (props.color) {
    if (props.color in TypographyStyles.ColorStyles) {
      style = { ...style, ...TypographyStyles.ColorStyles[props.color] };
    } else {
      style = { ...style, color: props.color };
    }
  }

  if (props.size) {
    if (props.size in TypographyStyles.SizeStyles) {
      style = { ...style, ...TypographyStyles.SizeStyles[props.size] };
    } else {
      style = { ...style, fontSize: Number(props.size) };
    }
  }

  return (
    <TouchableOpacity onPress={() => openUrl()}>
      <Text style={{ ...style, ...props.style }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ClrLink;
