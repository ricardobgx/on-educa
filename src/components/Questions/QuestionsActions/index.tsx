import React from 'react';
import {
  NewQuestionButton,
  NewQuestionButtonLabel,
  QuestionsActionsBox,
  QuestionsFiltersButton,
  QuestionsFiltersButtonLabel,
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
  SuppliesBox,
} from '../../App/Supplies/styles';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';

interface IQuestionActionsProps {
  isStudent: boolean;
  setQuestionsFilterIsVisible: (value: boolean) => void;
}

const QuestionsActions = (props: IQuestionActionsProps): JSX.Element => {
  /* Props */

  const { isStudent, setQuestionsFilterIsVisible } = props;

  return (
    <SuppliesBox>
      <Container className="supplies-actions">
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
          <QuestionsActionsBox className="supplies-actions-buttons">
            <NewQuestionButton
              className="supplies-action-button block-shadow-button main-action bd-rd-20"
              to="/new-question"
            >
              <NewQuestionButtonLabel>Nova questão</NewQuestionButtonLabel>
              <SmallMaterialIconOutlined color="" icon="add" />
            </NewQuestionButton>
            <QuestionsFiltersButton
              className="supplies-action-button block-shadow-button main-action bd-rd-20"
              onClick={() => setQuestionsFilterIsVisible(true)}
            >
              <QuestionsFiltersButtonLabel>Filtrar</QuestionsFiltersButtonLabel>
              <SmallMaterialIconOutlined color="" icon="add" />
            </QuestionsFiltersButton>
          </QuestionsActionsBox>
        )}
      </Container>
    </SuppliesBox>
  );
};

export default QuestionsActions;
