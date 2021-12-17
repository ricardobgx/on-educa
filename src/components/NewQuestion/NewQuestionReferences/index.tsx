import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { ISchoolGrade } from '../../../interfaces/ISchoolGrade';
import { ISubject } from '../../../interfaces/ISubject';
import { ITeachingType } from '../../../interfaces/ITeachingType';
import { IUnity } from '../../../interfaces/IUnity';
import NewQuestionReference from '../NewQuestionReference';
import { NewQuestionReferencesBox } from './styles';

interface INewQuestionReferencesProps {
  teachingType: ITeachingType;
  schoolGrade: ISchoolGrade;
  subject: ISubject;
  unity: IUnity;
  content: IContent;
}

const NewQuestionReferences = (
  props: INewQuestionReferencesProps,
): JSX.Element => {
  const { teachingType, schoolGrade, subject, unity, content } = props;

  return (
    <NewQuestionReferencesBox>
      <NewQuestionReference
        label="Série"
        value={`${schoolGrade.index}º ano - ${teachingType.title}`}
      />
      <NewQuestionReference label="Disciplina" value={subject.name} />
      <NewQuestionReference label="Unidade" value={unity.title} />
      <NewQuestionReference label="Conteúido" value={content.title} />
    </NewQuestionReferencesBox>
  );
};

export default NewQuestionReferences;
