import styled from 'styled-components';

export const ContentRelatedUnitsListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  /* padding: 10px; */
  margin: 20px 0 0 0;
  border-radius: 5px;
  height: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
`;
