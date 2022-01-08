import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, EditQuestionBox, EditQuestionMainDetails } from './styles';
import NewQuestionAlternatives from '../../components/NewQuestion/NewQuestionAlternatives';
import NewQuestionDescription from '../../components/NewQuestion/NewQuestionDescription';
import NewQuestionReferences from '../../components/NewQuestion/NewQuestionReferences';
import { ITeachingType } from '../../interfaces/ITeachingType';
import { ISubject } from '../../interfaces/ISubject';
import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { IUnity } from '../../interfaces/IUnity';
import { IContent } from '../../interfaces/IContent';
import { State } from '../../store';
import EditQuestionActions from '../../components/EditQuestion/EditQuestionActions';

const EditQuestion = (): JSX.Element => {
  /* Global State */

  const {
    teachingType: globalTeachingType,
    schoolGrade: globalSchoolGrade,
    subject: globalSubject,
    unity: globalUnity,
    content: globalContent,
  } = useSelector((store: State) => store);

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
  const [difficulty, setDifficulty] = useState(0);
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
        <SectionLabel backLink="" label="Novo conteúdo" />
        <EditQuestionBox>
          <EditQuestionMainDetails>
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
          </EditQuestionMainDetails>
          <NewQuestionAlternatives
            alternativesDescriptions={alternativesDescriptions}
            setAlternativesDescriptions={setAlternativesDescriptions}
            rightAlternativeDescription={rightAlternativeDescription}
            setRightAlternativeDescription={setRightAlternativeDescription}
          />
          <EditQuestionActions
            description={description}
            difficulty={difficulty}
            alternativesDescriptions={alternativesDescriptions}
            rightAlternativeDescription={rightAlternativeDescription}
            content={content}
            questionWasCreated={questionWasCreated}
            setQuestionWasCreated={setQuestionWasCreated}
          />
        </EditQuestionBox>
      </PageBox>
    </Page>
  );
};

export default EditQuestion;
