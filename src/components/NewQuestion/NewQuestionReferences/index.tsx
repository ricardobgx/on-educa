import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { ISchoolGrade } from '../../../interfaces/ISchoolGrade';
import { ISubject } from '../../../interfaces/ISubject';
import { ITeachingType } from '../../../interfaces/ITeachingType';
import { IUnity } from '../../../interfaces/IUnity';
import {
  NewQuestionBoxLabel,
  RequiredField,
} from '../../../pages/NewQuestion/styles';
import SuppliesContentReference from '../../App/Supplies/SuppliesReferences/SuppliesContentReference';
import SuppliesSubjectReference from '../../App/Supplies/SuppliesReferences/SuppliesSubjectReference';
import SuppliesTeachSchoolReference from '../../App/Supplies/SuppliesReferences/SuppliesTeachSchoolReference';
import SuppliesUnityReference from '../../App/Supplies/SuppliesReferences/SuppliesUnityReference';
import { NewQuestionReferencesBox } from './styles';

interface INewQuestionReferencesProps {
  teachingType: ITeachingType;
  setTeachingType: (teachingType: ITeachingType) => void;
  schoolGrade: ISchoolGrade;
  setSchoolGrade: (schoolGrade: ISchoolGrade) => void;
  subject: ISubject;
  setSubject: (subject: ISubject) => void;
  unity: IUnity;
  setUnity: (unity: IUnity) => void;
  content: IContent;
  setContent: (content: IContent) => void;
}

const NewQuestionReferences = (
  props: INewQuestionReferencesProps,
): JSX.Element => {
  const {
    teachingType,
    setTeachingType,
    schoolGrade,
    setSchoolGrade,
    subject,
    setSubject,
    unity,
    setUnity,
    content,
    setContent,
  } = props;

  /* Global State */

  return (
    <NewQuestionReferencesBox>
      <NewQuestionBoxLabel>
        Referência<RequiredField>*</RequiredField>
      </NewQuestionBoxLabel>
      <SuppliesTeachSchoolReference
        label="Série"
        selectedSchoolGrade={schoolGrade}
        setSelectedSchoolGrade={setSchoolGrade}
      />
      <SuppliesSubjectReference
        label="Disciplina"
        schoolGrade={schoolGrade}
        selectedSubject={subject}
        setSelectedSubject={setSubject}
      />
      <SuppliesUnityReference
        label="Unidade"
        selectedUnity={unity}
        setSelectedUnity={setUnity}
        subject={subject}
      />
      <SuppliesContentReference
        label="Conteúdo"
        unity={unity}
        selectedContent={content}
        setSelectedContent={setContent}
      />
    </NewQuestionReferencesBox>
  );
};

export default NewQuestionReferences;
