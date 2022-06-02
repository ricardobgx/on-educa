import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const InterativeRoomCardBox = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  padding: 15px;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.2s linear forwards;

  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 1150px) {
    /* flex-direction: column; */
    /* align-items: unset; */
  }
`;
export const InterativeRoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  gap: 5px;

  @media (max-width: 900px) {
    width: 100%;
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
export const InterativeRoomCode = styled(paragraph)``;
export const InterativeRoomSettings = styled(InterativeRoomDetails)`
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
export const InterativeRoomStatus = styled(InterativeRoomDetails)`
  align-items: flex-end;

  @media (max-width: 1150px) {
    width: 100%;
    /* flex-direction: row; */
    justify-content: space-between;
  }
`;
export const InterativeRoomStatusBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const InterativeRoomStatusLabel = styled(paragraph)``;
export const InterativeRoomStatusIcon = styled(smallIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  border-radius: 50%;
`;
export const InterativeRoomParticipants = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const InterativeRoomParticipantsLabel = styled(paragraph)``;
export const InterativeRoomParticipantsIcon = styled(smallIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
