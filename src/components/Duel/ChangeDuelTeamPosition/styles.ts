import styled from 'styled-components';
import { mediumIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChangeDuelTeamPositionBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 95;
  animation: fadeIn 0.2s linear;
  transition: 0.4s linear;
`;
export const ChangeDuelTeamPositionIcon = styled(mediumIcon)`
  margin-bottom: 5px;
`;
export const ChangeDuelTeamPositionLabel = styled(paragraph)`
  font-weight: bold;
`;
