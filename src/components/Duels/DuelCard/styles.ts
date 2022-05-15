import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const DuelCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.2s linear forwards;

  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: unset;
  }
`;
export const DuelDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  gap: 5px;

  @media (max-width: 900px) {
    width: unset;
  }
`;
export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1150px) {
    /* justify-content: center; */
  }
`;
export const OwnerName = styled(paragraph)`
  font-weight: bold;
`;
export const DuelCode = styled(paragraph)``;
export const DuelSettings = styled(DuelDetails)`
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const QuestionsPerContentLabel = styled(paragraph)`
  text-align: center;

  @media (max-width: 1150px) {
    text-align: left;
  }
`;
export const TimeForQuestionLabel = styled(paragraph)`
  text-align: center;

  @media (max-width: 1150px) {
    text-align: left;
  }
`;
export const DuelStatus = styled(DuelDetails)`
  align-items: flex-end;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const DuelStatusBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const DuelStatusLabel = styled(paragraph)``;
export const DuelStatusIcon = styled(smallIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 50%;
`;
export const DuelParticipants = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const DuelParticipantsLabel = styled(paragraph)``;
export const DuelParticipantsIcon = styled(smallIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.textColor};
`;
