import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelTeamBox = styled.div`
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
export const DuelTeamLabel = styled(paragraph)`
  font-weight: bold;
  margin: 5px 0;
  height: 25px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DuelTeamParticipants = styled.div`
  width: 100%;
  /* background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px; */
  /* padding: 15px; */
  margin-top: 10px;
  min-height: calc(100vh - 360px);
  max-height: calc(100vh - 360px);
  overflow: auto;
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: 300px;
    max-height: 300px;
  }
`;
