import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const TeamsResultsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DuelTeams = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const DuelTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 15px;
  width: calc(50% - 20px);
  min-height: calc(100vh - 285px);

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
    min-height: unset;
  }
`;
export const TeamLabel = styled(paragraph)`
  font-weight: bold;
  margin: 5px 0;
  height: 25px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const Participants = styled.div`
  width: 100%;
  /* background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px; */
  /* padding: 15px; */
  margin-top: 10px;
`;
export const ParticipantsBox = styled.div`
  min-height: calc(100vh - 400px);
  max-height: calc(100vh - 400px);
  overflow: auto;
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: 350px;
    max-height: 350px;
  }
`;
export const TotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0 5px 0;
  padding: 0 5px;
`;
export const TotalLabel = styled(paragraph)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
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
