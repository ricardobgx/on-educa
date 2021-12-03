import styled from 'styled-components';

export const ContentsListBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 15px;
`;
export const ContentCards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow: auto;
  max-height: calc(100vh - 315px);
`;
