import styled from 'styled-components';

export const ProgressBarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.hoverColor};

  &.big-bar {
    div:nth-child(1) {
      height: 13px;
    }
  }

  &.small-bar {
    div:nth-child(1) {
      height: 11px;
    }
  }
`;
export const ProgressBarInnerBar = styled.div`
  height: 100%;
  width: 0%;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.mainColor};

  transition: all 0.2s linear;
`;
