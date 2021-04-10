import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ClearUi, { Typography, Container } from 'react-native-clear-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Container>
        <Typography.Text color="primary" size="md">
          Primary
        </Typography.Text>
        <Typography.Heading level={3} color="secondary">
          Secondary
        </Typography.Heading>
        <Typography.Link
          size="md"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          noline
        >
          Link
        </Typography.Link>
      </Container>
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
