import { CSSProperties, PropsWithChildren } from 'react';
import { Container, PrimaryContainer } from './Card.styles';

interface CardProps {
    className?: string;
    theme?: 'primary';
    onClick?: (e: MouseEvent) => void;
}

/**
 * Display an existing file and allow replacing it
 */
export default function Card({ theme, className, children, onClick }: PropsWithChildren<CardProps>) {
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

    const style: CSSProperties = {};
    if (onClick) {
        style.cursor = 'pointer';
    }

    return <StyledContainer className={ classes } style={ style } onClick={ onClick }>{ children }</StyledContainer>;
}
