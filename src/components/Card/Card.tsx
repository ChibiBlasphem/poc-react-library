import { PropsWithChildren } from 'react';
import { Container, PrimaryContainer } from './Card.styles';

interface CardProps {
    theme: 'default' | 'primary';
}

/**
 * Display an existing file and allow replacing it
 */
export default function Card({ theme = 'default', children }: PropsWithChildren<CardProps>) {
    let StyledContainer;
    switch (theme) {
        case "primary":
            StyledContainer = PrimaryContainer;
            break;
        default:
            StyledContainer = Container;
    }

    return <StyledContainer className="card">{ children }</StyledContainer>;
}
