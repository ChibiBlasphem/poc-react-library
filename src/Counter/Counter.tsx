import { useState } from 'react';
import { Container, Text, Button } from './Count.styles';

export interface CounterProps {
  initialCount?: number;
  step?: number;
}

export function Counter({ initialCount = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <Container>
      <Text>{count}</Text>
      <Button onClick={() => setCount((c) => c + 1)} title="increment">
        +
      </Button>
      <Button onClick={() => setCount((c) => Math.max(0, c - 1))} title="decrement">
        -
      </Button>
    </Container>
  );
}
