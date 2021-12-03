import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import SubjectDetailSelect, {
  ISubjectDetailSelectOption,
} from '../../components/Subjects/SubjectDetailSelect';
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

const teachOptions: ISubjectDetailSelectOption[] = [
  {
    id: '1',
    title: 'Ensino Fundamental',
  },
  {
    id: '2',
    title: 'Ensino Médio',
  },
];

const schoolGradeOptions: ISubjectDetailSelectOption[] = [
  {
    id: '1',
    title: '1º ano',
  },
  {
    id: '2',
    title: '2º ano',
  },
  {
    id: '3',
    title: '3º ano',
  },
  {
    id: '4',
    title: '4º ano',
  },
  {
    id: '5',
    title: '5º ano',
  },
  {
    id: '6',
    title: '6º ano',
  },
  {
    id: '7',
    title: '7º ano',
  },
  {
    id: '8',
    title: '8º ano',
  },
  {
    id: '9',
    title: '9º ano',
  },
];

const subjectOptions: ISubjectDetailSelectOption[] = [
  {
    id: '1',
    title: 'Língua Portuguesa',
  },
  {
    id: '2',
    title: 'Matemática',
  },
  {
    id: '3',
    title: 'História',
  },
  {
    id: '4',
    title: 'Geografia',
  },
  {
    id: '5',
    title: 'Ciências',
  },
  {
    id: '6',
    title: 'Ensino Religioso',
  },
  {
    id: '7',
    title: 'Língua Inglesa',
  },
  {
    id: '8',
    title: 'Educação Física',
  },
  {
    id: '9',
    title: 'Artes',
  },
];

const Subjects = (): JSX.Element => {
  const [teachingType, setTeachingType] = useState('');
  const [schoolGradeNumber, setSchoolGradeNumber] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [subjectIsSelected, setSubjectIsSelected] = useState(false);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Selecione a disciplina" />
        <SelectSubjectDetails>
          <SubjectDetailSelect
            label="Selecione o ensino"
            options={teachOptions}
            selectedOption={teachingType}
            setOption={setTeachingType}
          />
          <SubjectDetailSelect
            label="Selecione a série"
            options={schoolGradeOptions}
            selectedOption={schoolGradeNumber}
            setOption={setSchoolGradeNumber}
          />
          <SubjectDetailSelect
            label="Selecione a disciplina"
            options={subjectOptions}
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
