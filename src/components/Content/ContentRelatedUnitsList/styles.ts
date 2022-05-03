import styled from 'styled-components';

export const ContentRelatedUnitsListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  /* padding: 10px; */
  margin: 20px 0 0 0;
  height: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
`;
