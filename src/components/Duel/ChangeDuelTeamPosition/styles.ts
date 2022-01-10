import styled from 'styled-components';
import { mediumIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChangeDuelTeamPositionBox = styled.button`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  border: 3px solid ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 95;
  transition: 0.4s linear;

  &:hover {
    transition: 0.4s linear;
    color: ${({ theme }) => theme.colors.boxColor};
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    background: ${({ theme }) => theme.colors.textColor};
    z-index: -1;
    border-radius: 50%;
    transition: all 0.4s linear;
  }

  &:hover::before {
    width: 1000px;
    height: 1000px;
  }
`;
export const ChangeDuelTeamPositionIcon = styled(mediumIcon)`
  margin-bottom: 5px;
`;
export const ChangeDuelTeamPositionLabel = styled(paragraph)`
  font-weight: bold;
`;