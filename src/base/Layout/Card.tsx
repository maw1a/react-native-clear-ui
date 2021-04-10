import React from 'react';
import { View, ViewStyle } from 'react-native';
import Typography from '../Typography';
import styles from '../../theme/styles';
const { LayoutStyles } = styles;

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
  title?: React.ReactNode;
  extra?: React.ReactNode;
}

const ClrCard: React.FC<Props> = (props) => {
  var style = { ...LayoutStyles.DefaultStyle.card };
  return (
    <View style={{ ...style, ...props.style }}>
      {(props.title || props.extra) && (
        <View style={{ ...LayoutStyles.DefaultStyle.card_top }}>
          <View style={{ ...LayoutStyles.DefaultStyle.card_title }}>
            {typeof props.title === 'string' ? (
              <Typography.Heading level={4} color="primary">
                {props.title}
              </Typography.Heading>
            ) : (
              props.title
            )}
          </View>
          <View style={{ ...LayoutStyles.DefaultStyle.card_extra }}>
            {props.extra}
          </View>
        </View>
      )}
      <View style={{ ...LayoutStyles.DefaultStyle.card_body }}>
        {props.children}
      </View>
    </View>
  );
};

export default ClrCard;
