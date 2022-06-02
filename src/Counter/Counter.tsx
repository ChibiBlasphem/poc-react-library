import { useState } from 'react';
import { Container, Text, Button } from './Count.styles';

export interface CounterProps {
  initialCount?: number;
  step?: number;
}

export function Counter({ initialCount = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));

  return (
    <Container>
      <Text>{count}</Text>
      <Button onClick={increment} title="increment">
        +
      </Button>
      <Button onClick={decrement} title="decrement">
        -
      </Button>
    </Container>
  );
}
