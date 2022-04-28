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

  color: #6c63ff;
  background: none;
  border: none;

  cursor: pointer;

  border-radius: 10px;
  box-shadow: 0px 2px 0px 3px rgba(0, 0, 0, 0.1);

  transition: all 0.2s linear;

  &.selected {
    color: #ffffff;
    background: #6c63ff;

    & span,
    & p {
      color: #ffffff;
    }

    box-shadow: 0px 0px 0px 2px #4138c7;

    :hover {
      box-shadow: 0px 0px 0px 2px #4138c7;
    }
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
  }

  & span,
  & p {
    color: #6c63ff;
  }

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
  background: #6c63ff;
  color: #ffffff;

  width: 250px;
  height: 40px;

  border-radius: 10px;

  box-shadow: 0px 2px 0px 3px #4138c7;

  cursor: pointer;

  transition: all 0.2s linear;

  :disabled {
    opacity: 0.7;
    box-shadow: 0px 0px 0px 2px #4138c7;
    pointer-events: none;
  }

  :hover {
    box-shadow: 0px 0px 0px 2px #4138c7;
  }
`;
export const ConfirmSchoolGradeButtonLabel = styled.p`
  text-transform: uppercase;

  transition: all 0.2s linear;
`;
