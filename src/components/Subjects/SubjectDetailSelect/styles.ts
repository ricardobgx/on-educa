import styled from 'styled-components';
import { paragraph } from '../../../components';

export const SubjectDetailSelectBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
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
export const SubjectDetailSelectLabel = styled(paragraph)`
  display: flex;
  margin: 5px;
  margin-bottom: 15px;
  font-weight: bold;
`;
export const RequiredFieldLabel = styled(paragraph)`
  color: ${({ theme }) => theme.similarColors.warningColor};
`;
export const SubjectDetailSelectOptionsList = styled.div`
  width: 100%;
`;
export const SubjectDetailSelectOptionsListBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 355px);
  padding: 5px;
  overflow: auto;
`;
export const SubjectDetailSelectOption = styled.button`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
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
export const SubjectDetailSelectOptionLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
