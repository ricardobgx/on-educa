import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelChatMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 60%;
  width: max-content;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  margin-bottom: 10px;
  position: relative;

  &.my-message {
    left: 100%;
    transform: translateX(-100%);
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const DuelChatMessagePeopleName = styled(paragraph)`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const DuelChatMessageContent = styled(paragraph)``;
