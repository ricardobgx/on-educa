import React from 'react';
import { RequiredField } from '../../../global/styles/components/textComponents';
import { NewContentBoxLabel } from '../../../pages/NewContent/styles';
import SuppliesSchoolGradeReference from '../../App/Supplies/SuppliesReferences/SuppliesSchoolGradeReference';
import SuppliesSubjectReference from '../../App/Supplies/SuppliesReferences/SuppliesSubjectReference';
import SuppliesTeachingTypeReference from '../../App/Supplies/SuppliesReferences/SuppliesTeachingTypeReference';
import SuppliesUnityReference from '../../App/Supplies/SuppliesReferences/SuppliesUnityReference';
import { NewContentReferencesBox } from './styles';

interface INewContentReferencesProps {
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

const NewContentReferences = (
  props: INewContentReferencesProps,
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

  return (
    <NewContentReferencesBox>
      <NewContentBoxLabel>
        Referência <RequiredField>*</RequiredField>
      </NewContentBoxLabel>
      <SuppliesTeachingTypeReference
        label="Ensino"
        selectedTeachingType={teachingType}
        setSelectedTeachingType={setTeachingType}
      />
      <SuppliesSchoolGradeReference
        label="Série"
        teachingType={teachingType}
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
    </NewContentReferencesBox>
  );
};

export default NewContentReferences;
