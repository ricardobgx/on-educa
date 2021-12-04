import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import SchoolGradeSelect from '../../components/Subjects/SchoolGradeSelect';
import SubjectSelect from '../../components/Subjects/SubjectSelect';
import TeachingTypeSelect from '../../components/Subjects/TeachingTypeSelect';
import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { ISubject } from '../../interfaces/ISubject';
import { ITeachingType } from '../../interfaces/ITeachingType';
import OnEducaAPI from '../../services/api';
import { Page } from '../components';
import {
  CancelButton,
  CancelButtonLabel,
  PageBox,
  SelectSubjectDetails,
  SelectUnityButton,
  SelectUnityButtonLabel,
  SubjectsActions,
} from './styles';

const Subjects = (): JSX.Element => {
  const sortTeachingTypes = (
    teachingTypeA: ITeachingType,
    teachingTypeB: ITeachingType,
  ): number => {
    if (teachingTypeA.title > teachingTypeB.title) return 1;
    if (teachingTypeA.title < teachingTypeB.title) return -1;
    return 0;
  };

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

  const [teachingTypes, setTeachingTypes] = useState([]);
  const [teachingTypeId, setTeachingTypeId] = useState('');

  const [schoolGrades, setSchoolGrades] = useState([]);
  const [schoolGradeId, setSchoolGradeId] = useState('');

  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState('');

  const getOptions = async (): Promise<void> => {
    await OnEducaAPI.get('/teachingtypes').then(
      async (teachingTypesResponse) => {
        setTeachingTypes(teachingTypesResponse.data.sort(sortTeachingTypes));

        if (teachingTypeId !== '') {
          await OnEducaAPI.get(
            `/schoolgrades/teachingtype/${teachingTypeId}`,
          ).then(async (schoolGradesResponse) => {
            setSchoolGrades(schoolGradesResponse.data.sort(sortSchoolGrades));

            if (schoolGradeId !== '') {
              await OnEducaAPI.get(
                `/subjects/schoolgrade/${schoolGradeId}`,
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
  }, [teachingTypeId, schoolGradeId]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Selecione a disciplina" />
        <SelectSubjectDetails>
          <TeachingTypeSelect
            label="Selecione o ensino"
            options={teachingTypes}
            selectedOption={teachingTypeId}
            setOption={setTeachingTypeId}
          />
          <SchoolGradeSelect
            label="Selecione a série"
            options={schoolGrades}
            selectedOption={schoolGradeId}
            setOption={setSchoolGradeId}
          />
          <SubjectSelect
            label="Selecione a disciplina"
            options={subjects}
            selectedOption={subjectId}
            setOption={setSubjectId}
          />
        </SelectSubjectDetails>
        <SubjectsActions>
          <CancelButton to="/home">
            <CancelButtonLabel>Cancelar</CancelButtonLabel>
          </CancelButton>
          <SelectUnityButton
            style={{
              pointerEvents: !subjectId ? 'none' : 'unset',
            }}
            to={`/subjects/${subjectId}`}
          >
            <SelectUnityButtonLabel>Continuar</SelectUnityButtonLabel>
          </SelectUnityButton>
        </SubjectsActions>
      </PageBox>
    </Page>
  );
};

export default Subjects;
