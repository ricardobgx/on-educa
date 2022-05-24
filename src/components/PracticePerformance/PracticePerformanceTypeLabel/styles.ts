import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PracticePerformanceTypeLabelBox = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
