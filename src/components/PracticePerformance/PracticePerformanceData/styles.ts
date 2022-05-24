import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PracticePerformanceDataBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex: 1 1 300px;

  color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
  padding: 10px 15px;

  &.right {
    background: ${({ theme }) => theme.flagColors.greenColor};
  }

  &.wrong {
    background: ${({ theme }) => theme.flagColors.redColor};
  }

  &.skipped {
    background: ${({ theme }) => theme.flagColors.yellowColor};
  }

  &.total {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColors.secondaryColor};
  }
`;
export const PracticePerformanceDataHeader = styled.div`
  display: flex;
  gap: 5px;
`;
export const PracticePerformanceDataLabel = styled(paragraph)``;
export const PracticePerformanceDataValue = styled(paragraph)``;
