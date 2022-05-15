import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ProgressBarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;

  border-radius: 10px;

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
export const ProgressBarWrapperBar = styled.div`
  background: ${({ theme }) => theme.colors.progressBarColor};

  border-radius: 10px;

  width: 100%;
`;
export const ProgressBarInnerBar = styled.div`
  height: 100%;
  width: 0%;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.mainButtonBgColor};

  transition: all 0.2s linear;
`;
export const ProgressBarLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  min-width: max-content;
`;
