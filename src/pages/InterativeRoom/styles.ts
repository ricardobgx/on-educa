import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../global/styles/components/buttonComponents';
import { inputText } from '../../global/styles/components/inputComponents';
import { AppPageRow } from '../../global/styles/components/pageComponents';
import {
  paragraph,
  smallParagraph,
} from '../../global/styles/components/textComponents';

export const InterativeRoomBox = styled(AppPageRow)`
  padding: 40px;
  padding-top: 95px;
  gap: 40px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const InterativeRoomQuestionAndChat = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const InterativeRoomQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;

  background: ${({ theme }) => theme.colors.boxColor};
`;
export const InterativeRoomQuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InterativeRoomQuestionHeaderHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const InterativeRoomQuestionHeaderTitle = styled(paragraph)``;
export const InterativeRoomQuestionContent = styled(paragraph)``;

export const InterativeRoomChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;

  background: ${({ theme }) => theme.colors.boxColor};
`;
export const InterativeRoomChatTitle = styled(paragraph)`
  font-weight: bold;
`;
export const InterativeRoomChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 230px;
  width: 100%;
`;
export const InterativeRoomChatMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: max-content;
  padding: 5px;

  background: ${({ theme }) => theme.colors.boxColor};
`;
export const InterativeRoomChatMessageOwnerPicture = styled.img`
  width: 25px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const InterativeRoomChatMessageContent = styled(paragraph)``;
export const InterativeRoomMessageSendDate = styled(smallParagraph)`
  font-size: 10px;
  transform: translateY(50%);
`;
export const InterativeRoomChatNewMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
`;
export const InterativeRoomChatNewMessageInput = styled(inputText)`
  background: ${({ theme }) => theme.colors.textInputBgColor};

  width: 100%;
  height: 40px;

  border: none;
`;
export const InterativeRoomChatSendMessageButton = styled(Button)`
  min-width: 40px;
`;

export const InterativeRoomHeaderAndParticipants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 35%;
`;
export const InterativeRoomHeader = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;
`;
export const InterativeRoomHeaderOwner = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 45px;
  padding: 0 20px;

  background: ${({ theme }) => theme.colors.boxColor};
`;
export const InterativeRoomHeaderOwnerName = styled(paragraph)``;
export const InterativeRoomHeaderActions = styled.div`
  display: flex;
  gap: 20px;
`;
const InterativeRoomActionButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 45px;
`;
export const StartInterativeRoomButton = styled(InterativeRoomActionButton)``;
export const InterativeRoomDetailsButton = styled(InterativeRoomActionButton)``;
export const CloseInterativeRoomButton = styled(InterativeRoomActionButton)``;

export const InterativeRoomParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px 15px;

  background: ${({ theme }) => theme.colors.boxColor};
`;
export const InterativeRoomParticipantsTitle = styled(paragraph)`
  font-weight: bold;
`;
export const InterativeRoomParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-height: 310px;
  padding: 5px;

  overflow: auto;
`;
export const InterativeRoomParticipant = styled(Link)`
  display: flex;
`;
export const AddParticipantButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
`;
export const AddParticipantButtonLabel = styled(paragraph)``;
