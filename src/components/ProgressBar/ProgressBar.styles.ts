import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const PROGRESS_BAR_HEIGHT = 5;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: ${PROGRESS_BAR_HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${PROGRESS_BAR_HEIGHT / 2}px;
  overflow: hidden;

  .elapsed {
    position: absolute;
    background-color: #2a66a1;
    height: 100%;
    left: 0;
    transition: width 0.5s;
    border-top-right-radius: ${PROGRESS_BAR_HEIGHT / 2}px;
    border-bottom-right-radius: ${PROGRESS_BAR_HEIGHT / 2}px;
  }
`;

export const TextElement = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;

export const RemainingTime = styled(TextElement)`
  margin-top: 10px;
`;

export const Triggerer = styled(TextElement)`
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
