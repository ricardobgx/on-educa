import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PracticePerformanceDataBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ color }) => color};
`;
export const PracticePerformanceDataLabel = styled(paragraph)`
  /* color: ${({ theme }) => theme.colors.textColor}; */
  margin-bottom: 20px;
`;
export const PracticePerformanceDataValue = styled(paragraph)`
  /* color: ${({ theme }) => theme.colors.textColor}; */
  margin-bottom: 20px;
`;
