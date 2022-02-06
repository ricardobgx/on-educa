import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChatMessageBox = styled.div`
  width: max-content;
  max-width: 40%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  position: relative;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.mine-message {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
    left: 100%;
    transform: translateX(-100%);
  }

  &.other-message {
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.boxColor};
  }
`;
export const ChatMessageContent = styled(paragraph)``;
