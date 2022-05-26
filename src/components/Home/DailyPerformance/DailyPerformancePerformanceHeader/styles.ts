import styled from 'styled-components';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const DailyPerformancePerformanceHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const DailyPerformancePerformanceHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: bold;
`;
export const DailyPerformancePerformanceHeaderLabel = styled(paragraph)``;
