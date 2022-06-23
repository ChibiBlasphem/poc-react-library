import { PropsWithChildren } from 'react';
import { Container, PrimaryContainer } from './Card.styles';

interface CardProps {
    className?: string;
    theme?: 'primary';
}

/**
 * Display an existing file and allow replacing it
 */
export default function Card({ theme, className, children }: PropsWithChildren<CardProps>) {
    let StyledContainer;
    switch (theme) {
        case "primary":
            StyledContainer = PrimaryContainer;
            break;
        default:
            StyledContainer = Container;
    }

    let classes = "card";
    if (className) {
        classes += " " + className;
    }

    return <StyledContainer className={ classes }>{ children }</StyledContainer>;
}
