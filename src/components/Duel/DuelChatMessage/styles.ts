import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelChatMessageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};

  padding: 5px;
  padding-right: 15px;
  max-width: 60%;
  width: max-content;
  margin-bottom: 10px;

  animation: 0.2s fadeIn linear, 0.2s leftSlide linear;

  position: relative;

  &.my-message {
    left: 100%;

    animation: 0.2s fadeIn linear, 0.2s rightSlideMessage linear forwards;

    @keyframes rightSlideMessage {
      0% {
        transform: translateX(-95%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;
export const DuelChatMessagePeopleName = styled(paragraph)`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const DuelChatMessagePeoplePicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const DuelChatMessageContent = styled(paragraph)``;
