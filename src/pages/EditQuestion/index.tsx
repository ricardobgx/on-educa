import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, EditQuestionBox } from './styles';
import NewQuestionAlternatives from '../../components/NewQuestion/NewQuestionAlternatives';
import NewQuestionDescription from '../../components/NewQuestion/NewQuestionDescription';
import NewQuestionReferences from '../../components/NewQuestion/NewQuestionReferences';
import { RootState } from '../../store';
import EditQuestionActions from '../../components/EditQuestion/EditQuestionActions';
import { DEFAULT_QUESTION } from '../../static/defaultEntitiesValues';
import NewQuestionDifficulty from '../../components/NewQuestion/NewQuestionDifficulty';
import {
  NewQuestionMainDetails,
  NewQuestionReferencesAndDifficulty,
} from '../NewQuestion/styles';
import { getQuestion } from '../../functions/question';
import OnEducaAPI from '../../services/api';

interface IEditQuestionRouteParams {
  id: string;
}

const EditQuestion = (): JSX.Element => {
  /* GlobalRootState */

  const {
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
    aplication,
  } = useSelector((store: RootState) => store);

  const { token } = aplication;

  /* Estado local */

  const [question, setQuestion] = useState<IQuestion>(DEFAULT_QUESTION);

  /* Route params */

  const route = useRouteMatch();
  const { params } = route;
  const { id } = params as IEditQuestionRouteParams;

  // Referencias

  const [teachingType, setTeachingType] =
    useState<ITeachingType>(globalTeachingType);
  const [schoolGrade, setSchoolGrade] =
    useState<ISchoolGrade>(globalSchoolGrade);
  const [subject, setSubject] = useState<ISubject>(globalSubject);
  const [unity, setUnity] = useState<IUnity>(globalUnity);
  const [content, setContent] = useState<IContent>(
    question.content || globalContent,
  );

  // Detalhes da questao

  const [description, setDescription] = useState(question.description);
  const [difficulty, setDifficulty] = useState(question.difficulty);
  const [alternativesDescriptions, setAlternativesDescriptions] = useState<
    string[]
  >([]);
  const [rightAlternativeDescription, setRightAlternativeDescription] =
    useState('');

  // Questao criada

  const [questionWasUpdated, setQuestionWasUpdated] = useState(false);

  const getQuestionSucess = (questionFound: IQuestion): void => {
    if (questionFound) {
      setDescription(questionFound.description);
      setDifficulty(questionFound.difficulty);
      setContent(questionFound.content || globalContent);
    }

    setAlternativesDescriptions(
      questionFound.alternatives.map((alternative) => {
        return alternative.description;
      }),
    );

    setRightAlternativeDescription(
      questionFound.alternatives.find(
        (alternative) =>
          alternative.description ===
          questionFound.rightAlternative.description,
      )?.description || '',
    );

    console.log(questionFound);

    setQuestion(questionFound);
  };

  useEffect(() => {
    if (token) {
      getQuestion(OnEducaAPI, id, token, getQuestionSucess);
    }
  }, [id, token]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Atualizar questão" />
        <EditQuestionBox>
          <NewQuestionMainDetails>
            <NewQuestionDescription
              description={description}
              setDescription={setDescription}
            />
            <NewQuestionReferencesAndDifficulty>
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
              <NewQuestionDifficulty
                selectedDifficulty={difficulty}
                setSelectedDifficulty={setDifficulty}
              />
            </NewQuestionReferencesAndDifficulty>
          </NewQuestionMainDetails>
          <NewQuestionAlternatives
            alternativesDescriptions={alternativesDescriptions}
            setAlternativesDescriptions={setAlternativesDescriptions}
            rightAlternativeDescription={rightAlternativeDescription}
            setRightAlternativeDescription={setRightAlternativeDescription}
          />
          <EditQuestionActions
            id={id}
            description={description}
            difficulty={difficulty}
            alternativesDescriptions={alternativesDescriptions}
            oldAlternatives={question.alternatives}
            rightAlternativeDescription={rightAlternativeDescription}
            content={content}
            questionWasUpdated={questionWasUpdated}
            setQuestionWasUpdated={setQuestionWasUpdated}
          />
        </EditQuestionBox>
      </PageBox>
    </Page>
  );
};

export default EditQuestion;
