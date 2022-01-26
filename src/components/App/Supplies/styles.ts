import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

/* Botoes */

// Novo material escolar (Unidade, Conteudo, Questao)

export const NewSuppliesButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  padding: 0 20px;

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const NewSuppliesLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  padding: 0 20px;
  min-height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
  cursor: pointer;

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const NewSuppliesButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const NewSuppliesButtonIcon = styled(smallIcon)``;

// Botao de edicao de card de material escolar

export const EditSuppliesButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 10px;
  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.boxColor};
  }

  @media (max-width: 900px) {
    margin: 0;
    width: calc(50% - 5px);
  }
`;

export const EditSuppliesLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 10px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.boxColor};
  }

  @media (max-width: 900px) {
    margin: 0;
    width: calc(50% - 5px);
  }
`;

export const EditSuppliesButtonIcon = styled(smallIcon)``;

// Botao de exclusao de card de material escolar

export const DeleteSuppliesButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.similarColors.warningColor};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.similarColors.warningColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }

  @media (max-width: 900px) {
    width: calc(50% - 5px);
  }
`;
export const DeleteSuppliesButtonIcon = styled(smallIcon)``;

// Ordenar material escolar

export const SortSuppliesButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  cursor: pointer;

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const SortSuppliesButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const SortSuppliesButtonIcon = styled(smallIcon)``;

/* Caixas de pesquisa */

// Caixa com todos os componentes de pesquisa

export const SearchSupplies = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

// Caixa com o input e botao de limpar o input

export const SearchSuppliesBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 20px;
`;

// Input onde o texto sera digitado

export const SearchSuppliesInput = styled(inputText)`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;

// Botao que limpa a caixa de pesquisa

export const ClearSearchSuppliesInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;

// Icone do botao que limpa a caixa de pesquisa

export const ClearSearchSuppliesInputButtonIcon = styled(smallIcon)``;

// Botao de pesquisa

export const SearchSuppliesButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  cursor: pointer;
`;

// Icone do botao de pesquisa

export const SearchSuppliesButtonIcon = styled(smallIcon)``;