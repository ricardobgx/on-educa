/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import SchoolGradeSelect from '../../components/Subjects/SchoolGradeSelect';
import SubjectSelect from '../../components/Subjects/SubjectSelect';
import TeachingTypeSelect from '../../components/Subjects/TeachingTypeSelect';
import OnEducaAPI from '../../services/api';
import { DEFAULT_SUBJECT } from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import {
  CancelButton,
  CancelButtonLabel,
  PageBox,
  SelectSubjectsDetails,
  SelectUnityButton,
  SelectUnityButtonLabel,
  SubjectsActions,
} from './styles';

const Subjects = (): JSX.Element => {
  const sortSchoolGrades = (
    schoolGradeA: ISchoolGrade,
    schoolGradeB: ISchoolGrade,
  ): number => {
    if (schoolGradeA.index > schoolGradeB.index) return 1;
    if (schoolGradeA.index < schoolGradeB.index) return -1;
    return 0;
  };

  const sortSubjects = (subjectA: ISubject, subjectB: ISubject): number => {
    if (subjectA.name > subjectB.name) return 1;
    if (subjectA.name < subjectB.name) return -1;
    return 0;
  };

  /* GlobalRootState */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const { loadTeachingType, loadSchoolGrade, loadSubject } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  // RootState

  const { teachingType, schoolGrade, subject } = useSelector(
    (store: RootState) => store,
  );

  /* LocalRootState */

  const [teachingTypes, setTeachingTypes] = useState([]);
  const [schoolGrades, setSchoolGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);

  /* Load Data functions */

  const getOptions = async (): Promise<void> => {
    await OnEducaAPI.get('/teachingtypes').then(
      async (teachingTypesResponse) => {
        setTeachingTypes(teachingTypesResponse.data);

        if (teachingType.id !== '') {
          await OnEducaAPI.get(
            `/schoolgrades/teachingtype/${teachingType.id}`,
          ).then(async (schoolGradesResponse) => {
            setSchoolGrades(schoolGradesResponse.data.sort(sortSchoolGrades));

            if (schoolGrade.id !== '') {
              await OnEducaAPI.get(
                `/subjects/schoolgrade/${schoolGrade.id}`,
              ).then((subjectsResponse) => {
                setSubjects(subjectsResponse.data.sort(sortSubjects));
              });
            }
          });
        }
      },
    );
  };

  useEffect(() => {
    getOptions();
  }, [teachingType, schoolGrade]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/" label="Selecione a disciplina" />
        <SelectSubjectsDetails>
          <TeachingTypeSelect
            label="Selecione o ensino"
            teachingTypes={teachingTypes}
            teachingTypeSelectedId={teachingType.id}
            setTeachingTypeSelected={loadTeachingType}
          />
          <SchoolGradeSelect
            label="Selecione a série"
            options={schoolGrades}
            selectedOption={schoolGrade.id}
            setOption={loadSchoolGrade}
          />
          <SubjectSelect
            label="Selecione a disciplina"
            subjects={subjects}
            subjectSelectedId={subject.id}
            setSubjectSelected={loadSubject}
          />
        </SelectSubjectsDetails>
        <SubjectsActions>
          <CancelButton
            className="block-shadow-button secondary-action bd-rd-20"
            to="/"
          >
            <CancelButtonLabel>Cancelar</CancelButtonLabel>
          </CancelButton>
          <SelectUnityButton
            className={`block-shadow-button main-action bd-rd-20 ${
              subject === DEFAULT_SUBJECT ? 'disabled' : ''
            }`}
            to={`/subjects/${subject.id}`}
          >
            <SelectUnityButtonLabel>Continuar</SelectUnityButtonLabel>
          </SelectUnityButton>
        </SubjectsActions>
      </PageBox>
    </Page>
  );
};

export default Subjects;
