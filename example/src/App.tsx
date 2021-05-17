import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Typography, Container, Card } from 'react-native-clear-ui';

export default function App() {
  return (
    <Container style={styles.container} margin={'5%'}>
      <Card
        title={'Title'}
        titleColor="primary"
        titleLevel={4}
        extra={<Typography.Text>Extra Content</Typography.Text>}
      >
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
          Press Me
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
