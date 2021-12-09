import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import SchoolGradeSelect from '../../components/Learn/SchoolGradeSelect';
import SubjectSelect from '../../components/Learn/SubjectSelect';
import TeachingTypeSelect from '../../components/Learn/TeachingTypeSelect';
import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { ISubject } from '../../interfaces/ISubject';
import { ITeachingType } from '../../interfaces/ITeachingType';
import OnEducaAPI from '../../services/api';
import { ActionCreators, State } from '../../store';
import { DEFAULT_SUBJECT } from '../../store/reducers/subject';
import { Page } from '../components';
import {
  CancelButton,
  CancelButtonLabel,
  PageBox,
  SelectLearnDetails,
  SelectUnityButton,
  SelectUnityButtonLabel,
  LearnActions,
} from './styles';

const Learn = (): JSX.Element => {
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

  /* Global State */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const { loadTeachingType, loadSchoolGrade, loadSubject } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  // State

  const { teachingType, schoolGrade, subject } = useSelector(
    (store: State) => store,
  );

  /* Local State */

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
        <SectionLabel backLink="/home" label="Selecione a disciplina" />
        <SelectLearnDetails>
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
        </SelectLearnDetails>
        <LearnActions>
          <CancelButton to="/home">
            <CancelButtonLabel>Cancelar</CancelButtonLabel>
          </CancelButton>
          <SelectUnityButton
            style={{
              pointerEvents: subject === DEFAULT_SUBJECT ? 'none' : 'unset',
            }}
            to={`/subjects/${subject.id}`}
          >
            <SelectUnityButtonLabel>Continuar</SelectUnityButtonLabel>
          </SelectUnityButton>
        </LearnActions>
      </PageBox>
    </Page>
  );
};

export default Learn;
