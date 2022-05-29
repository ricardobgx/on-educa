import styled from 'styled-components';

export const LeaguesBox = styled.div`
  display: flex;
  gap: 40px;

  height: 100%;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
