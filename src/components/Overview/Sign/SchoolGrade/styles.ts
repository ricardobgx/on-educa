import styled from 'styled-components';
import { paragraph } from '../../../../components';

export const SchoolGradeBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;

export const SchoolGradeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
`;
