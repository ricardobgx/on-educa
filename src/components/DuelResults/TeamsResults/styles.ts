import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const TeamsResultsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DuelActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const BackToDuelButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.boxColor};
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
    margin-bottom: 20px;
  }
`;
export const BackToDuelButtonLabel = styled(paragraph)``;

export const QuitDuelButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const QuitDuelButtonLabel = styled(paragraph)``;
export const DeleteDuelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.similarColors.warningColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.whiteColor};
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const DeleteDuelButtonLabel = styled(paragraph)``;
