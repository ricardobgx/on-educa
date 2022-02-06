import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { mediumIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChatBox = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeIn 0.2s linear;
  position: relative;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const ChatParticipant = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.hoverColor};
`;
export const ChatPeopleNameAndOnlineLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5px 0;
`;
export const ChatPeopleName = styled(paragraph)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const ChatPeopleOnlineLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxShadowColor};
`;
export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ChatMessagesBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ChatMessagesList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 290px);
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;
export const ChatMessageInput = styled.div`
  display: flex;
  max-width: 100%;
  margin: 20px;
`;
export const MessageInput = styled(inputText)`
  border: none;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 0px 10px;
  width: 100%;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SendMessageButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  min-width: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const SendMessageButtonIcon = styled(mediumIcon)``;
