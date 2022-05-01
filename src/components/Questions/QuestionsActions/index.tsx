import React from 'react';
import {
  QuestionsActionsBox,
  QuestionsFiltersButton,
  QuestionsFiltersButtonLabel,
  QuestionsFiltersButtonIcon,
  Container,
} from './styles';
import {
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesInput,
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  NewSuppliesLink,
  NewSuppliesButtonLabel,
  NewSuppliesButtonIcon,
} from '../../App/Supplies/styles';

interface IQuestionActionsProps {
  isStudent: boolean;
  setQuestionsFilterIsVisible: (value: boolean) => void;
}

const QuestionsActions = (props: IQuestionActionsProps): JSX.Element => {
  /* Props */

  const { isStudent, setQuestionsFilterIsVisible } = props;

  return (
    <Container>
      <SearchSupplies>
        <SearchSuppliesBox className="bd-rd-20">
          <SearchSuppliesInput
            type="text"
            placeholder="Digite algo (descrição da questão)"
          />
          <ClearSearchSuppliesInputButton>
            <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
          </ClearSearchSuppliesInputButton>
        </SearchSuppliesBox>
        <SearchSuppliesButton className="block-shadow-button main-action bd-rd-20">
          <SearchSuppliesButtonIcon className="fas fa-search" />
        </SearchSuppliesButton>
      </SearchSupplies>
      {!isStudent && (
        <QuestionsActionsBox>
          <NewSuppliesLink
            className="block-shadow-button main-action bd-rd-20"
            to="/new-question"
          >
            <NewSuppliesButtonLabel>Nova questão</NewSuppliesButtonLabel>
            <NewSuppliesButtonIcon className="fas fa-plus" />
          </NewSuppliesLink>
          <QuestionsFiltersButton
            className="block-shadow-button main-action bd-rd-20"
            onClick={() => setQuestionsFilterIsVisible(true)}
          >
            <QuestionsFiltersButtonLabel>Filtrar</QuestionsFiltersButtonLabel>
            <QuestionsFiltersButtonIcon className="fas fa-sliders-h" />
          </QuestionsFiltersButton>
        </QuestionsActionsBox>
      )}
    </Container>
  );
};

export default QuestionsActions;
