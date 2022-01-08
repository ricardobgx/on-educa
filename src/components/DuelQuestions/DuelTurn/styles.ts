import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 20px;
  min-width: max-content;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  min-height: 50px;
  padding: 0 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    min-width: unset;
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
  }
`;
export const DuelTurnBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1150px) {
    margin: 5px;
  }
`;
export const DuelTurnIcon = styled.i`
  font-size: 1rem;
  margin-right: 5px;
  width: 25px;
  text-align: center;
`;
export const TeamTurn = styled(DuelTurnBox)`
  margin-right: 20px;
`;
export const TeamTurnIcon = styled(DuelTurnIcon)``;
export const TeamTurnLabel = styled(paragraph)``;
export const ParticipantTurn = styled(DuelTurnBox)``;
export const ParticipantTurnIcon = styled(DuelTurnIcon)``;
export const ParticipantTurnLabel = styled(paragraph)``;
