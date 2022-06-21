import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, ReactNode, useState, useLayoutEffect } from 'react';
import { useToggle } from '../../hooks/useToggle';
import {
  IdiomaticExpandableCardProvider,
  useDetailSetter,
  useTitleSetter,
} from './IdiomaticExpandableCard.context';
import { Body, Container, Content, Detail, ToggleDetail } from './IdiomaticExpandableCard.styles';

export interface IdiomaticExpandableCardProps {
  expandable?: boolean;
}

export function IdiomaticExpandableCard({
  children,
  expandable = true,
}: PropsWithChildren<IdiomaticExpandableCardProps>) {
  const [isDetailOpened, toggleDetailOpened] = useToggle(false);
  const [title, setTitle] = useState<ReactNode>(null);
  const [detail, setDetail] = useState<ReactNode>(null);

  return (
    <>
      <IdiomaticExpandableCardProvider setTitle={setTitle} setDetail={setDetail}>
        {children}
      </IdiomaticExpandableCardProvider>
      <Container>
        <Body>
          <Content>{title}</Content>
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
    </>
  );
}

IdiomaticExpandableCard.Title = function IdiomaticExpandableCardTitle({
  children,
}: PropsWithChildren<{}>) {
  const setTitle = useTitleSetter();
  useLayoutEffect(() => {
    setTitle(children);
  }, [children]);
  return null;
};

IdiomaticExpandableCard.Detail = function IdiomaticExpandableCardDetail({
  children,
}: PropsWithChildren<{}>) {
  const setDetail = useDetailSetter();
  useLayoutEffect(() => {
    setDetail(children);
  }, [children]);
  return null;
};
