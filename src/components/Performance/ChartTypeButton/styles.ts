import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

// Botão para acessar dia da semana

export const ChartTypeButtonBox = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  margin-left: 0;

  &:last-of-type {
    margin-right: 0;
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
export const ChartTypeLabel = styled(paragraph)``;
