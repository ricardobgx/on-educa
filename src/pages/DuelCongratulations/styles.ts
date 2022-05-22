import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../global/styles/components/textComponents';

export const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundColor};
  z-index: 100;
`;
export const PageBox = styled.div`
  width: 100%;
  margin: 40px;
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation: 0.2s fadeIn linear;
`;
export const CongratulationsLabel = styled.h2`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-size: 2.35rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 5.5vw;
  }

  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;
export const CongratulationsImage = styled.img`
  height: 50vh;

  @media (max-width: 1150px) {
    height: unset;
    width: 100%;
  }
`;
export const SeeResultsButton = styled(Link)`
  min-height: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const SeeResultsButtonLabel = styled(paragraph)``;
