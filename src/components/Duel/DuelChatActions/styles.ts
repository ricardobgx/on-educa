import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';

export const DuelChatActionsBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5px;
  margin-top: 20px;
`;
export const DuelChatMessageInput = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  width: 100%;
  margin-right: 10px;
  padding: 0 10px;
`;
export const SendDuelChatMessageButton = styled(Button)`
  min-width: 40px;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const SendDuelChatMessageButtonIcon = styled(smallIcon)``;
