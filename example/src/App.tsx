import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ClearUi, { Typography } from 'react-native-clear-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography.Text size="sm">Secondary</Typography.Text>
      <Typography.Heading level={3}>Secondary</Typography.Heading>
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
