import styled from 'styled-components';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const PerformanceTypeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(50% - 5px);
  height: 40px;
  padding: 15px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.hoverColor};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PerformanceTypeHeader = styled.div`
  display: flex;
  gap: 5px;
`;
export const PerformanceTypeTitle = styled(paragraph)`
  font-weight: bold;
`;
export const PerformanceTypeLabel = styled(paragraph)``;
