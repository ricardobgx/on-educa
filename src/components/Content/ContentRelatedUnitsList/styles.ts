import styled from 'styled-components';

export const ContentRelatedUnitsListBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin-top: 20px;

  background: ${({ theme }) => theme.colors.boxColor};

  overflow: auto;
`;
