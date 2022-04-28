import styled from 'styled-components';

export const WrongAnimationBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #ff0000;
  z-index: 1000;
  animation: fadeIn 0.5s linear;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WrongAnimationBars = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
export const WrongAnimationBar = styled.div`
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
        top: calc(50% - 18px);
        left: 30%;
      }
      100% {
        width: 50px;
        left: calc(50% - 25px);
        top: 50%;
      }
    }
  }

  &.right-bar {
    width: 0px;

    top: 50%;
    left: 25%;
    animation: rightBar 0.5s linear forwards;
    animation-delay: 1.1s;

    transform: rotateZ(-45deg);

    @keyframes rightBar {
      0% {
        width: 0px;
        top: 32%;
        left: 69%;
      }
      100% {
        width: 50px;
        top: 50%;
        left: 25%;
      }
    }
  }
`;
