import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

/* Botoes */

// Novo material escolar (Unidade, Conteudo, Questao)

export const SuppliesBox = styled.div`
  .supplies-actions {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px;
    margin-top: 0px;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  .supplies-actions-buttons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 0;
    z-index: 95;
    gap: 10px;

    @media (max-width: 700px) {
      position: relative;
      flex-wrap: wrap;
      margin-top: 20px;
    }
  }

  .supplies-action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    min-height: 40px;

    border: none;

    cursor: pointer;

    padding: 0 20px;

    @media (min-width: 600px) and (max-width: 700px) {
      width: calc(50% - 10px);
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .supplies-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    min-height: calc(100vh - 290px);
    max-height: calc(100vh - 290px);
    padding: 5px;
    margin: 0 15px;
    margin-top: 15px;

    overflow: auto;
  }

  .supplies-card {
    display: flex;
    opacity: 0;
    transform: translateX(-5%);
    animation: leftSlideFadeIn 0.2s linear forwards;
    gap: 10px;
  }

  .supplies-card-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .supplies-card-action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    max-height: 40px;
    border: none;
    cursor: pointer;

    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;

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
  background: ${({ theme }) => theme.colors.textInputBgColor};
  padding: 0 15px;
  margin-right: 20px;
  border-radius: 20px;

  transition: all 0.2s linear;
`;

// Input onde o texto sera digitado

export const SearchSuppliesInput = styled(inputText)`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  margin-right: 10px;

  ::-webkit-input-placeholder {
    color: #949494;
  }
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
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  cursor: pointer;
`;

// Icone do botao que limpa a caixa de pesquisa

export const ClearSearchSuppliesInputButtonIcon = styled(smallIcon)``;

// Botao de pesquisa

export const SearchSuppliesButton = styled(Button)`
  min-width: 40px;
`;

// Icone do botao de pesquisa

export const SearchSuppliesButtonIcon = styled(smallIcon)``;

export const NoSelectedSupplies = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  margin-top: 30%;

  @media (max-width: 1150px) {
    margin-top: 15%;
  }
`;
