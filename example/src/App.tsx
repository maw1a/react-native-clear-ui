import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ClearUi, { Typography } from 'react-native-clear-ui';

export default function App() {
  const [color, setColor] = React.useState<string | undefined>();
  React.useEffect(() => {
    setColor(ClearUi.colors.primary1);
  }, []);

  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Typography.Text size="xxl" color="secondary" weight="bold">
        {color}
      </Typography.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
