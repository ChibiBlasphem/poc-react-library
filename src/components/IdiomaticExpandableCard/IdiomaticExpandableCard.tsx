import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createSlotter } from 'react-typed-slots';
import { useToggle } from '../../hooks/useToggle';
import { Body, Container, Content, Details, ToggleDetails } from './IdiomaticExpandableCard.styles';

export interface IdiomaticExpandableCardProps {
  expandable?: boolean;
}

const { makeSlottable, useSlots } = createSlotter('Title', 'Details');

export const IdiomaticExpandableCard = makeSlottable(function ExpandableCard({
  expandable = true,
}: IdiomaticExpandableCardProps) {
  const [isDetailOpened, toggleDetailOpened] = useToggle(false);
  const { title, details } = useSlots();

  return (
    <>
      <Container>
        <Body>
          <Content>{title}</Content>
          {expandable && (
            <ToggleDetails onClick={toggleDetailOpened}>
              <FontAwesomeIcon
                icon={faChevronDown}
                rotation={isDetailOpened ? 180 : undefined}
                size="2x"
              />
            </ToggleDetails>
          )}
        </Body>
        {expandable && isDetailOpened && (
          <Details data-testid="expandable-card_detail">{details}</Details>
        )}
      </Container>
    </>
  );
});
