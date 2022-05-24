import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { mediumIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelChatBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 96;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  animation: 0.2s fadeIn linear;
`;

export const DuelChatBox = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px 15px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 900px) {
    width: calc(100% - 80px);
  }
`;
export const CloseChatButton = styled(Button)`
  width: 25px;
  height: 25px;
  min-height: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  color: ${({ theme }) => theme.colors.boxColor};
  position: absolute;
  top: 20px;
  right: 20px;
`;
export const CloseChatButtonIcon = styled(mediumIcon)``;
export const DuelChatLabel = styled(paragraph)`
  font-weight: bold;
  margin-bottom: 10px;
`;
