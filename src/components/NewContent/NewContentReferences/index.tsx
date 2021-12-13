import React from 'react';
import { ISchoolGrade } from '../../../interfaces/ISchoolGrade';
import { ISubject } from '../../../interfaces/ISubject';
import { ITeachingType } from '../../../interfaces/ITeachingType';
import { IUnity } from '../../../interfaces/IUnity';
import NewContentReference from '../NewContentReference';
import { NewContentReferencesBox } from './styles';

interface INewContentReferencesProps {
  teachingType: ITeachingType;
  schoolGrade: ISchoolGrade;
  subject: ISubject;
  unity: IUnity;
}

const NewContentReferences = (
  props: INewContentReferencesProps,
): JSX.Element => {
  const { teachingType, schoolGrade, subject, unity } = props;

  return (
    <NewContentReferencesBox>
      <NewContentReference label="Ensino" value={teachingType.title} />
      <NewContentReference label="Série" value={`${schoolGrade.index}º ano`} />
      <NewContentReference label="Disciplina" value={subject.name} />
      <NewContentReference label="Unidade" value={unity.title} />
    </NewContentReferencesBox>
  );
};

export default NewContentReferences;
