import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import OnEducaAPI from '../../services/api';
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
import { ITeachingType } from '../../interfaces/ITeachingType';
import { ISubject } from '../../interfaces/ISubject';
import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { IUnity } from '../../interfaces/IUnity';
import { IContent } from '../../interfaces/IContent';
import { State } from '../../store';
import { isDefaultContent } from '../../functions/entitiesValues';
import { IAlternativeParams } from '../../dto/IAlternativeParams';
import { IManyAlternativesParams } from '../../dto/IManyAlternativesParams';
import { createManyAlternatives } from '../../functions/alternative';
import { IQuestion } from '../../interfaces/IQuestion';

const NewQuestion = (): JSX.Element => {
  /* Global State */

  const {
    aplication,
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
  } = useSelector((store: State) => store);

  const { token } = aplication;

  /* Local State */

  // References

  const [teachingType, setTeachingType] =
    useState<ITeachingType>(globalTeachingType);
  const [schoolGrade, setSchoolGrade] =
    useState<ISchoolGrade>(globalSchoolGrade);
  const [subject, setSubject] = useState<ISubject>(globalSubject);
  const [unity, setUnity] = useState<IUnity>(globalUnity);
  const [content, setContent] = useState<IContent>(globalContent);

  // Question details

  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [alternativesDescription, setAlternativesDescription] = useState<
    string[]
  >([]);

  const [questionWasCreated, setQuestionWasCreated] = useState(false);

  /* Functions */

  const createAlternativesSucess = (): void => {
    setQuestionWasCreated(true);
  };

  const createAlternativesError = (): void => {
    console.log('erro');
  };
  const buildAlternatives = (): IAlternativeParams[] => {
    const alternatives = alternativesDescription.map(
      (alternativeDescription, index) => {
        const alternative = {
          description: alternativeDescription,
          index,
        };
        return alternative;
      },
    );
    return alternatives;
  };

  const createAlternatives = async (questionId: string): Promise<void> => {
    const alternativesParams: IManyAlternativesParams = {
      alternativesDescriptions: buildAlternatives(),
      questionId,
    };

    await createManyAlternatives(
      OnEducaAPI,
      alternativesParams,
      token,
      createAlternativesSucess,
      createAlternativesError,
    );

    console.log(alternativesParams);
  };

  const createQuestionSucess = (question: IQuestion): void => {
    createAlternatives(question.id);
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

  const isValidQuestion = (): boolean =>
    !isDefaultContent(content) &&
    description.trim() !== '' &&
    alternativesDescription.length > 0;

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
              setTeachingType={setTeachingType}
              schoolGrade={schoolGrade}
              setSchoolGrade={setSchoolGrade}
              subject={subject}
              setSubject={setSubject}
              unity={unity}
              setUnity={setUnity}
              content={content}
              setContent={setContent}
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
            <CreateQuestionButton
              style={{ pointerEvents: isValidQuestion() ? 'auto' : 'none' }}
              onClick={() => createQuestion()}
            >
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
