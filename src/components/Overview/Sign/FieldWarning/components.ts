import styled from 'styled-components';
import { paragraph } from '../../../../components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  animation: showWarning 0.6s linear;
  transition: all 0.3s linear;

  @keyframes showWarning {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    50% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
export const WarningLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
