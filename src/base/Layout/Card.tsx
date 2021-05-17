import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import Typography from '../Typography';
import styles from '../../theme/styles';
const { LayoutStyles } = styles;

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
  title?: React.ReactNode;
  titleStyle?: TextStyle;
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  titleColor?: 'primary' | 'secondary';
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
              <Typography.Heading
                level={props.titleLevel || 4}
                color={props.titleColor}
                style={{ ...props.titleStyle }}
              >
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
