import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

// Botão para acessar dia da semana

export const ChartTypeButtonBox = styled.button`
  cursor: pointer;
  color: #949494;
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  box-shadow: 0px 2px 0px 3px ${({ theme }) => theme.colors.boxShadowColor};
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  margin-left: 0;
  transition: all 0.2s linear;

  &:last-of-type {
    margin-right: 0;
  }

  :hover {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.boxShadowColor};
  }

  &.selected {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.mainButtonShadowColor};

    :hover {
      box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.mainButtonShadowColor};
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
