/* eslint-disable */

import React from 'react';
import SuppliesContentReference from '../../App/Supplies/SuppliesReferences/SuppliesContentReference';
import SuppliesSubjectReference from '../../App/Supplies/SuppliesReferences/SuppliesSubjectReference';
import SuppliesTeachSchoolReference from '../../App/Supplies/SuppliesReferences/SuppliesTeachSchoolReference';
import SuppliesUnityReference from '../../App/Supplies/SuppliesReferences/SuppliesUnityReference';
import {
  CloseQuestionsFilterButton,
  CloseQuestionsFilterIcon,
  Filters,
  FiltersBox,
  QuestionsFilterBox,
  QuestionsFilterLabel,
} from './styles';

interface IQuestionsFilterProps {
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
  setQuestionsFilterIsVisible: (value: boolean) => void;
}

const QuestionsFilter = (props: IQuestionsFilterProps): JSX.Element => {
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
    setQuestionsFilterIsVisible,
  } = props;

  return (
    <QuestionsFilterBox className="bd-rd-30 with-shadow">
      <CloseQuestionsFilterButton
        onClick={() => setQuestionsFilterIsVisible(false)}
      >
        <CloseQuestionsFilterIcon className="fas fa-times" />
      </CloseQuestionsFilterButton>
      <QuestionsFilterLabel>Filtros</QuestionsFilterLabel>
      <Filters>
        <FiltersBox>
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
        </FiltersBox>
        <FiltersBox>
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
        </FiltersBox>
      </Filters>
    </QuestionsFilterBox>
  );
};

export default QuestionsFilter;
