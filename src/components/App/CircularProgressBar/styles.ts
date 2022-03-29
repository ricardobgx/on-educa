import styled from 'styled-components';

export const CircularProgressBarBox = styled.div``;
export const Circular = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  color: ${({ color }) => color};

  & .inner,
  & .outer,
  & .circle {
    position: absolute;
    z-index: 6;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
  }

  & .inner {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    width: 40px;
    margin: 0px 0 0 0px;
    background-color: ${({ theme }) => theme.colors.boxColor};
    border-radius: 100%;
    box-shadow: 0 1px 0 ${({ theme }) => theme.colors.boxShadowColor};
  }

  & .circle {
    z-index: 1;
    box-shadow: none;
  }
  & .bar {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.boxColor};
    -webkit-border-radius: 100%;
    clip: rect(0px, 50px, 50px, 25px);
  }
`;
export const CircularInner = styled.div``;
export const CircularOuter = styled.div``;
export const CircularNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 1.25rem;
  font-weight: bold;
`;
export const Circle = styled.div`
  & .bar .progress {
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-border-radius: 100%;
    clip: rect(0px, 25px, 50px, 0px);
  }
  & .bar .progress,
  .dot span {
    background: ${({ color }) => color};
  }
  & .left .progress {
    z-index: 1;
    animation: left linear both;
  }

  @keyframes left {
    100% {
      transform: rotate(180deg);
    }
  }
  & .right {
    z-index: 3;
    transform: rotate(180deg);
  }
  & .right .progress {
    animation: right linear both;
  }
  @keyframes right {
    100% {
      transform: rotate(180deg);
    }
  }
  & .dot {
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 5px;
    margin-top: -2px;
    animation: dot linear both;
    transform-origin: 0% 50%;
  }
  & .dot span {
    position: absolute;
    right: 0;
    width: 5px;
    height: 5px;
    border-radius: 100%;
  }
  @keyframes dot {
    0% {
      transform: rotate(-90deg);
    }
    50% {
      transform: rotate(90deg);
      z-index: 4;
    }
    100% {
      transform: rotate(270deg);
      z-index: 4;
    }
  }
`;
export const Dot = styled.div``;
export const Span = styled.span``;
export const Bar = styled.div``;
export const BarProgress = styled.div``;
