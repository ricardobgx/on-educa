import styled from 'styled-components';
import { paragraph } from '../../../../components';

export const TeachingTypeBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;

export const TeachingTypeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
`;
