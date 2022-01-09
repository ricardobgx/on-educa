import styled from 'styled-components';
import { mediumIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChangeDuelTeamPositionBox = styled.button`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const ChangeDuelTeamPositionIcon = styled(mediumIcon)`
  margin-bottom: 5px;
`;
export const ChangeDuelTeamPositionLabel = styled(paragraph)``;
