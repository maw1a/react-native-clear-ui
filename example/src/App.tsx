import * as React from 'react';

import { StyleSheet } from 'react-native';
import ClearUi, { Typography, Container, Card } from 'react-native-clear-ui';

export default function App() {
  return (
    <Container style={styles.container}>
      <Card
        title={'Title'}
        extra={<Typography.Text>Extra Content</Typography.Text>}
      >
        <Typography.Text color="primary" size="md">
          Primary
        </Typography.Text>
        <Typography.Heading level={1} color="secondary">
          Secondary
        </Typography.Heading>
        <Typography.Link
          size="md"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          noline
        >
          Link
        </Typography.Link>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
