import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const QuitDuelButton = styled.button`
  margin-right: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const QuitDuelIcon = styled.i``;
export const DuelStatusBox = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
