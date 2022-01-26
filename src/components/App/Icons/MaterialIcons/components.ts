import styled from 'styled-components';

const MaterialIcon = styled.span`
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SmallMaterialIcon = styled(MaterialIcon)`
  font-size: 3vh;
  /* width: 2.5vh;
  height: 2.5vh; */

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 2.75vw;
    /* width: 2.3vw;
    height: 2.3vw; */
  }

  @media (max-width: 600px) {
    font-size: 4.5vw;
    /* width: 3.7vw;
    height: 3.7vw; */
  }
`;

export const MediumMaterialIcon = styled(MaterialIcon)`
  font-size: 4.5vh;
  width: 3.7vh;
  height: 3.7vh;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 4vw;
    width: 3.3vw;
    height: 3.3vw;
  }

  @media (max-width: 600px) {
    font-size: 6.5vw;
    width: 5.5vw;
    height: 5.5vw;
  }
`;

export const BigMaterialIcon = styled(MaterialIcon)`
  font-size: 8vh;
  width: 6.7vh;
  height: 6.7vh;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 7vw;
    width: 6vw;
    height: 6vw;
  }

  @media (max-width: 600px) {
    font-size: 12vw;
    width: 10vw;
    height: 10vw;
  }
`;
