import { PropsWithChildren } from 'react';
import { Container } from './Card.styles';

interface CardProps {
}

/**
 * Display an existing file and allow replacing it
 */
export default function Card({ children }: PropsWithChildren<CardProps>) {
    return <Container className="card">{ children }</Container>;
}
