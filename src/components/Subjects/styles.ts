import styled from 'styled-components';
import { paragraph } from '../../global/styles/components/textComponents';

export const SubjectSectionSelectBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};

  &:nth-child(2) {
    margin: 0 40px;

    @media (max-width: 1150px) {
      margin: 40px 0;
    }
  }
`;
export const SubjectSectionSelectLabel = styled(paragraph)`
  display: flex;
  margin: 5px;
  margin-bottom: 15px;
  font-weight: bold;
`;
export const RequiredFieldLabel = styled.span`
  color: ${({ theme }) => theme.similarColors.warningColor};
`;
export const SubjectSectionSelectOptionsList = styled.div`
  width: 100%;
`;
export const SubjectSectionSelectOptionsListBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 355px);
  max-height: calc(100vh - 355px);
  padding: 5px;
  overflow: auto;

  @media (max-width: 1150px) {
    min-height: unset;
  }
`;
export const SubjectSectionSelectOption = styled.button`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  min-height: 60px;
  padding: 0 20px;
  margin-bottom: 20px;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  transition: all 0.2s linear;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SubjectSectionSelectOptionLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
