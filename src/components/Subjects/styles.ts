import styled from 'styled-components';
import { paragraph } from '../../global/styles/components/textComponents';

export const SubjectSectionSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 15px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const SubjectSectionSelectLabel = styled(paragraph)`
  display: flex;
  margin: 5px;
  margin-bottom: 15px;
  font-weight: bold;
`;
export const RequiredFieldLabel = styled.span`
  color: ${({ theme }) => theme.flagColors.redColor};
`;
export const SubjectSectionSelectOptionsList = styled.div`
  width: 100%;
`;
export const SubjectSectionSelectOptionsListBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 370px);
  max-height: calc(100vh - 370px);
  padding: 5px;
  overflow: auto;
  align-items: center;

  @media (max-width: 1150px) {
    min-height: 150px;
  }
`;
export const SubjectSectionSelectOption = styled.button`
  border: none;

  width: 100%;
  min-height: 60px;
  padding: 0 20px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  transition: all 0.2s linear;

  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SubjectSectionSelectOptionLabel = styled(paragraph)``;
