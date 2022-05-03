import styled from 'styled-components';

// Containers

export const SectionBox = styled.div``;

export const SectionBoxWithBackground = styled(SectionBox)`
  background: ${({ theme }) => theme.colors.boxColor};
`;
