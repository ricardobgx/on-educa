import styled from 'styled-components';

export const ContentVideoBox = styled.div`
  min-width: 60%;
  min-height: 100%;

  @media (max-width: 1150px) {
    width: 100%;
    height: calc((100vw - 80px) / 1.75);
  }
`;
