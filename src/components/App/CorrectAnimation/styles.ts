import styled from 'styled-components';

export const CorrectAnimationBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.flagColors.greenColor};
  z-index: 1000;
  animation: fadeIn 0.5s linear;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CorrectAnimationBars = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
export const CorrectAnimationBar = styled.div`
  height: 7px;

  background: #ffffff;

  z-index: 1000;

  position: absolute;

  &.left-bar {
    width: 0px;

    top: calc(100% - 30px);
    left: 20%;

    transform: rotateZ(45deg);

    animation: littleBar 0.3s linear forwards;
    animation-delay: 0.7s;

    @keyframes littleBar {
      0% {
        width: 0px;
        top: calc(100% - 30px);
        left: 20%;
      }
      100% {
        width: 30px;
        left: 17%;
        top: calc(100% - 20px);
      }
    }
  }

  &.right-bar {
    width: 0px;

    top: calc(100% - 12px);
    left: 41%;
    animation: rightBar 0.5s linear forwards;
    animation-delay: 1.1s;

    transform: rotateZ(-45deg);

    @keyframes rightBar {
      0% {
        width: 0px;
        top: calc(100% - 12px);
        left: 41%;
      }
      100% {
        width: 60px;
        top: calc(100% - 30px);
        left: 30%;
      }
    }
  }
`;
