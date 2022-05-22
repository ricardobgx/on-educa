import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const FloatNotificationBox = styled.div`
  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
  background: ${({ theme }) => theme.colors.mainColor};
  position: fixed;
  z-index: 97;
  top: 40px;
  right: 40px;
  max-width: 350px;

  opacity: 0;

  animation: showNotification 3s ease-in-out forwards,
    hideNotification 0.25s ease-in-out forwards;
  animation-delay: 0s, 4s;

  @keyframes showNotification {
    0% {
      transform: translateX(20%);
      opacity: 0;
    }
    7% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes hideNotification {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(20%);
      opacity: 0;
    }
  }
`;
export const FloatNotificationContent = styled(paragraph)`
  padding: 15px;
`;
export const FloatNotificationTimeBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
`;
