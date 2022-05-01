import styled from 'styled-components';
import { paragraph } from '../../global/styles/components/textComponents';

export const SubjectSectionSelectBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 30px;
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
  align-items: center;

  @media (max-width: 1150px) {
    min-height: 150px;
  }
`;
export const SubjectSectionSelectOption = styled.button`
  color: ${({ theme }) => theme.colors.secondaryButtonTextColor};
  background: ${({ theme }) => theme.colors.secondaryButtonBgColor};

  border: none;

  width: 100%;
  min-height: 60px;
  padding: 0 20px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  transition: all 0.2s linear;

  cursor: pointer;

  &.selected {
    color: ${({ theme }) => theme.colors.mainButtonTextColor};
    background: ${({ theme }) => theme.colors.mainButtonBgColor};

    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.mainButtonShadowColor};

    p {
      transform: translateY(0px);
    }

    :hover {
      box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.mainButtonShadowColor};
    }
  }

  :hover {
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.secondaryButtonShadowColor};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SubjectSectionSelectOptionLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
