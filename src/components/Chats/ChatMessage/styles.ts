import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChatMessageBox = styled.div`
  width: max-content;
  max-width: 40%;
  padding: 10px;
  position: relative;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    max-width: 70%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &.mine-message {
    color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
    background: ${({ theme }) => theme.colors.mainColor};
    left: 100%;
    transform: translateX(-100%);
  }

  &.other-message {
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    background: ${({ theme }) => theme.colors.boxColor};
  }
`;
export const ChatMessageContent = styled(paragraph)``;
