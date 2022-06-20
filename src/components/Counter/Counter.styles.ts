import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto repeat(2, 1fr);
  gap: 12px;
  background-color: #fff;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
`;

export const Text = styled.span`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #293032;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: #1b1e1f;
  }
`;
