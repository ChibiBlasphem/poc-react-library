import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);
  margin: 15px 0;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 63px;
  align-items: center;
  height: 70px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 63px);
  height: 55px;
  padding: 0 30px;
  border-right: 2px solid #eaeaea;
`;

export const ToggleDetail = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  & > svg {
    transition: transform 0.5s;
  }
`;

export const Detail = styled.div`
  border-top: 2px solid #eaeaea;
  padding: 25px;
`;
