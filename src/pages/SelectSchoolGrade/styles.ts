import styled from 'styled-components';
import { BlockShadowButton } from '../../global/styles/components/buttonComponents';

export const SelectSchoolGradeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
  padding-top: 12vh;
`;
export const SchoolGrades = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 70px;

  width: 100%;
`;
export const SchoolGrade = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;

  border: none;

  cursor: pointer;

  @media (max-width: 1050px) {
    margin-top: 15vh;
  }
`;
export const SchoolGradeLabel = styled.p`
  margin-top: 20px;

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ConfirmSchoolGradeButton = styled(BlockShadowButton)`
  width: 250px;
  height: 40px;

  cursor: pointer;

  :disabled {
    opacity: 0.7;
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.textColor} !important;
    pointer-events: none;
  }
`;
export const ConfirmSchoolGradeButtonLabel = styled.p`
  text-transform: uppercase;

  transition: all 0.2s linear;
`;
