import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';
import {
  PageBox,
  NewQuestionBox,
  NewQuestionMainDetails,
  NewQuestionReferencesAndDifficulty,
} from './styles';
import NewQuestionAlternatives from '../../components/NewQuestion/NewQuestionAlternatives';
import NewQuestionDescription from '../../components/NewQuestion/NewQuestionDescription';
import NewQuestionReferences from '../../components/NewQuestion/NewQuestionReferences';
import { ITeachingType } from '../../interfaces/ITeachingType';
import { ISubject } from '../../interfaces/ISubject';
import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { IUnity } from '../../interfaces/IUnity';
import { IContent } from '../../interfaces/IContent';
import { State } from '../../store';
import NewQuestionDifficulty from '../../components/NewQuestion/NewQuestionDifficulty';
import NewQuestionActions from '../../components/NewQuestion/NewQuestionActions';

const NewQuestion = (): JSX.Element => {
  /* Global State */

  const {
    aplication,
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
    teacher,
  } = useSelector((store: State) => store);

  const { token } = aplication;

  /* Estado local */

  // Referencias

  const [teachingType, setTeachingType] =
    useState<ITeachingType>(globalTeachingType);
  const [schoolGrade, setSchoolGrade] =
    useState<ISchoolGrade>(globalSchoolGrade);
  const [subject, setSubject] = useState<ISubject>(globalSubject);
  const [unity, setUnity] = useState<IUnity>(globalUnity);
  const [content, setContent] = useState<IContent>(globalContent);

  // Detalhes da questao

  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [alternativesDescriptions, setAlternativesDescriptions] = useState<
    string[]
  >([]);
  const [rightAlternativeDescription, setRightAlternativeDescription] =
    useState('');

  // Questao criada

  const [questionWasCreated, setQuestionWasCreated] = useState(false);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="" label="Nova questão" />
        <NewQuestionBox>
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
          <NewQuestionActions
            description={description}
            difficulty={difficulty}
            content={content}
            alternativesDescriptions={alternativesDescriptions}
            rightAlternativeDescription={rightAlternativeDescription}
            questionWasCreated={questionWasCreated}
            setQuestionWasCreated={setQuestionWasCreated}
            token={token}
            teacherId={teacher.id}
          />
        </NewQuestionBox>
      </PageBox>
    </Page>
  );
};

export default NewQuestion;
