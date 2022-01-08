import styled from 'styled-components';

// Containers

export const SectionBox = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
`;

export const SectionBoxWithBackground = styled(SectionBox)`
  background: ${({ theme }) => theme.colors.boxColor};
`;
