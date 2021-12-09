import styled from 'styled-components';
import { inputSelect, paragraph } from '../../../../components';

export const SchoolGradeSelectBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;
export const TeachingType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TeachingTypeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
`;
export const TeachingTypeSelect = styled(inputSelect)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  border-right: 10px solid ${({ theme }) => theme.colors.textColor};
  height: 50px;
`;
export const TeachingTypeOption = styled.option``;
export const SchoolGrade = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
export const SchoolGradeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
`;
export const SelectSchoolGrade = styled(inputSelect)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  padding: 0 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  border-right: 5px solid ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontsSize.computer};
  height: 40px;

  &:focus {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const SchoolGradeOption = styled.option`
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.boxColor};
  }
`;
