import styled from 'styled-components';
import { bigIcon } from '../../../global/styles/components/iconComponents';

export const LoadAnimationBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.boxColor};
  /* background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.commonColor},
    ${({ theme }) => theme.colors.secondaryColor}
  ); */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const LoadIcon = styled(bigIcon)`
  color: ${({ theme }) => theme.colors.textColor};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: 3s hide linear infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }

  &:nth-child(3) {
    animation-delay: 2s;
  }

  @keyframes hide {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    33% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
