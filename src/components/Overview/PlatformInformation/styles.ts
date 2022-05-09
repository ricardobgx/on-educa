import styled from 'styled-components';
import { bigIcon } from '../../../global/styles/components/iconComponents';

export const PlatformInformationBox = styled.div`
  color: ${({ theme }) => theme.colors.whiteColor};
  width: 50%;
  position: relative;
  height: 100vh;

  @media (max-width: 900px) {
    width: 100%;
    /* padding: 5rem 3rem; */
  }
`;

export const Information = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1150px) {
    width: 100%;
    padding: 40px;
    padding-bottom: 80px;
  }
`;

export const InformationHeader = styled.div``;
export const Title = styled.h1`
  font-size: 2.85rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 7vw;
  }

  @media (max-width: 600px) {
    font-size: 9vw;
  }
`;
export const Slogan = styled.h2`
  text-align: justify;
  font-size: 2.05rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 5vw;
  }

  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;
export const Description = styled.p`
  margin-top: 2rem;
  text-align: justify;
  font-size: 1.45rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 3.7vw;
    margin-top: 4vw;
  }

  @media (max-width: 600px) {
    font-size: 5vw;
    margin-top: 6vw;
  }
`;
export const Functions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;
export const Function = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    width: 20vw;
  }

  @media (max-width: 600px) {
    width: 25vw;
  }
`;
export const Icon = styled(bigIcon)`
  margin-bottom: 1rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    margin-bottom: 2vw;
  }

  @media (max-width: 600px) {
    margin-bottom: 3vw;
  }
`;
export const Name = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 2.8vw;
  }

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const ScrollIcon = styled.i`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  animation: scroll 1s linear infinite;
  display: none;

  @keyframes scroll {
    0% {
      bottom: 1rem;
    }
    50% {
      bottom: 2rem;
    }
    100% {
      bottom: 1rem;
    }
  }

  @media (max-width: 900px) {
    display: unset;
  }
`;
