import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../components';
import { createQuestion as createQuestionData } from '../../functions/question';
import {
  PageBox,
  NewQuestionBox,
  NewQuestionMainDetails,
  NewQuestionActions,
  CancelButton,
  CancelButtonLabel,
  CreateQuestionButton,
  CreateQuestionButtonLabel,
} from './styles';
import { IQuestionParams } from '../../dto/IQuestionParams';
import NewQuestionAlternatives from '../../components/NewQuestion/NewQuestionAlternatives';
import NewQuestionDescription from '../../components/NewQuestion/NewQuestionDescription';
import NewQuestionReferences from '../../components/NewQuestion/NewQuestionReferences';

const NewQuestion = (): JSX.Element => {
  const { aplication, teachingType, schoolGrade, subject, unity, content } =
    useSelector((store: State) => store);

  const { token } = aplication;

  /* Local State */

  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [alternativesDescription, setAlternativesDescription] = useState<
    string[]
  >([]);

  const [questionWasCreated, setQuestionWasCreated] = useState(false);

  /* Functions */

  const createQuestionSucess = (): void => {
    setQuestionWasCreated(true);
  };

  const createQuestionError = (): void => {
    console.log('erro');
  };

  const createQuestion = async (): Promise<void> => {
    const questionParams: IQuestionParams = {
      description,
      difficulty,
      contentId: content.id,
    };

    await createQuestionData(
      OnEducaAPI,
      questionParams,
      token,
      createQuestionSucess,
      createQuestionError,
    );
  };

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Novo conteúdo" />
        <NewQuestionBox>
          <NewQuestionMainDetails>
            <NewQuestionDescription
              description={description}
              setDescription={setDescription}
            />
            <NewQuestionReferences
              teachingType={teachingType}
              schoolGrade={schoolGrade}
              subject={subject}
              unity={unity}
              content={content}
            />
          </NewQuestionMainDetails>
          <NewQuestionAlternatives
            alternativesDescription={alternativesDescription}
            setAlternativesDescription={setAlternativesDescription}
          />
          <NewQuestionActions>
            <CancelButton to="/questions">
              <CancelButtonLabel>Cancelar</CancelButtonLabel>
            </CancelButton>
            <CreateQuestionButton onClick={() => createQuestion()}>
              <CreateQuestionButtonLabel>
                Criar questão
              </CreateQuestionButtonLabel>
            </CreateQuestionButton>
            {questionWasCreated && <Redirect to="/questions" />}
          </NewQuestionActions>
        </NewQuestionBox>
      </PageBox>
    </Page>
  );
};

export default NewQuestion;
