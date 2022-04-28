import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const QuestionAlternativeBox = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.secondaryButtonBgColor};
  color: ${({ theme }) => theme.colors.secondaryButtonTextColor};
  box-shadow: 0px 2px 0px 3px
    ${({ theme }) => theme.colors.secondaryButtonShadowColor};

  padding: 10px 17px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.secondaryButtonShadowColor};
  }

  &.selected {
    background: ${({ theme }) => theme.colors.mainButtonBgColor};
    color: ${({ theme }) => theme.colors.mainButtonTextColor};
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.mainButtonShadowColor};

    p {
      transform: translateY(0px);
    }
  }
`;
export const QuestionAlternativeLabel = styled(paragraph)`
  text-align: left;
  transition: all 0.2s linear;
`;
