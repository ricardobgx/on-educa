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
  font-size: 3.5vh;
  width: 3.5vh;
  height: 3.5vh;

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 3.4vw;
    width: 3.4vw;
    height: 3.4vw;
  }

  @media (max-width: 600px) {
    font-size: 5.3vw;
    width: 5.3vw;
    height: 5.3vw;
  }
`;

export const BigMaterialIcon = styled(MaterialIcon)`
  font-size: 8vh;
  width: 7.1vh;
  height: 7.1vh;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 50px;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 600px) {
    font-size: 12vw;
    width: 10vw;
    height: 10vw;
  }
`;

export const ExtraBigMaterialIcon = styled(MaterialIcon)`
  font-size: 10vh;
  width: 9.7vh;
  height: 9.7vh;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 9vw;
    width: 8vw;
    height: 8vw;
  }

  @media (max-width: 600px) {
    font-size: 16vw;
    width: 14vw;
    height: 14vw;
  }
`;
