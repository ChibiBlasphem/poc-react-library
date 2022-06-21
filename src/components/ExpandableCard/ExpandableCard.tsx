import type { PropsWithChildren, ReactNode } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggle } from '../../hooks/useToggle';
import { Body, Container, Content, Detail, ToggleDetail } from './ExpandableCard.styles';

export interface ExpandableCardProps {
  expandable?: boolean;
  detail?: ReactNode;
}

export function ExpandableCard({
  expandable = true,
  children,
  detail,
}: PropsWithChildren<ExpandableCardProps>) {
  const [isDetailOpened, toggleDetailOpened] = useToggle(false);

  return (
    <Container>
      <Body>
        <Content>{children}</Content>
        {expandable && (
          <ToggleDetail onClick={toggleDetailOpened}>
            <FontAwesomeIcon
              icon={faChevronDown}
              rotation={isDetailOpened ? 180 : undefined}
              size="2x"
            />
          </ToggleDetail>
        )}
      </Body>
      {expandable && isDetailOpened && (
        <Detail data-testid="expandable-card_detail">{detail}</Detail>
      )}
    </Container>
  );
}
