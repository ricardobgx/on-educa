import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

// Botão para acessar dia da semana

export const ChartTypeButtonBox = styled.button`
  cursor: pointer;
  border: none;
  min-width: 150px;
  height: 40px;
  margin: 10px;
  margin-left: 0;
  transition: all 0.2s linear;

  &:last-of-type {
    margin-right: 0;
  }

  &.selected {
    color: ${({ theme }) =>
      theme.colors.buttonColors.mainButtonTextColor} !important;
    background: ${({ theme }) => theme.colors.mainColor} !important;
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.buttonColors.mainButtonShadowColor} !important;

    :hover {
      box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.buttonColors.mainButtonShadowColor};
    }

    p {
      transform: translateY(0px);
    }
  }

  @media (max-width: 900px) {
    min-width: unset;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const ChartTypeLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
