import React from 'react';
import {
  SignSchoolGradeBox,
  SignSchoolGradeLabel,
  SignSchoolGradeSelect,
  SignSchoolGradeOption,
  AddSubjectButton,
  AddIcon,
  AllSubjectsBox,
  CloseIcon,
  Subjects,
  SubjectsBox,
  SubjectsBoxLabel,
  Subject,
  SubjectLabel,
  RemoveSubjectIcon,
  AddSubjectIcon,
  SubjectsBoxBackground,
  SubjectActionButton,
  AllSubjects,
  CloseIconButton
} from './components';

import {
  SignBox,
  SignLabel,
  SignFieldsBox,
  SignField,
  SignActions,
  SignButton,
  ChangeSignUser
} from '../components';

import OnEducaAPI from '../../../services/api';

interface ISubject {
  id: string;
  name: string;
}

interface IState {
  userType: string;
  subjects: ISubject[];
  teacherSubjects: ISubject[];
  subjectsBoxVisibility: boolean;
}

export default class Register extends React.Component {

  state: IState = {
    userType: 'student',
    subjects: [],
    teacherSubjects: [],
    subjectsBoxVisibility: false
  }

  componentDidMount() {
    this.getAllSubjects();
  }

  isStudent = () => {
    const { userType } = this.state;

    if (userType === 'student') return true;
    return false;
  }

  getAllSubjects = async () => {
    await OnEducaAPI.get('/subjects').then(response => {
      const subjects = response.data;
      this.setState({ subjects });
    }, err => {
      console.log(err);
    })
  }

  rmArrayItem = (array: ISubject[], item: ISubject): ISubject[] => {
    const newArray = new Array<ISubject>();
    array.map(arrayItem => {
      if (!(arrayItem === item)) newArray.push(arrayItem);
      return null;
    });

    console.log(newArray);

    return newArray;
  }

  addArrayItem = (array: ISubject[], item: ISubject) => {
    array.push(item);
    return array;
  }

  render() {

    const { subjects, teacherSubjects, subjectsBoxVisibility } = this.state;

    return (
      <SignBox>
        <SignLabel>Cadastre-se</SignLabel>
        <SignFieldsBox>
          <SignField type="text" placeholder="Nome"></SignField>
          <SignField type="text" placeholder="E-mail"></SignField>
          <SignField type="text" placeholder="Senha"></SignField>
          {
            (this.isStudent() ?
              <SignSchoolGradeBox>
                <SignSchoolGradeLabel>Que ano você faz?</SignSchoolGradeLabel>
                <SignSchoolGradeSelect>
                  <SignSchoolGradeOption>1º ano</SignSchoolGradeOption>
                  <SignSchoolGradeOption>2º ano</SignSchoolGradeOption>
                  <SignSchoolGradeOption>3º ano</SignSchoolGradeOption>
                </SignSchoolGradeSelect>
              </SignSchoolGradeBox>
              :
              <AddSubjectButton onClick={() => {
                this.setState({ subjectsBoxVisibility: true });
              }}>Suas disciplinas<AddIcon className="fas fa-plus"></AddIcon></AddSubjectButton>
            )
          }
        </SignFieldsBox>
        <SignActions>
          <SignButton>Cadastrar</SignButton>
          <ChangeSignUser onClick={() => {
            if (this.isStudent()) {
              this.setState({ userType: 'teacher' });
            } else {
              this.setState({ userType: 'student' });
            }
          }}>Sou {(this.isStudent() ? 'professor' : 'aluno')}</ChangeSignUser>
        </SignActions>
        {
          (subjectsBoxVisibility ?
            <SubjectsBoxBackground>
              <AllSubjectsBox>
                <CloseIconButton onClick={() => {
                  this.setState({ subjectsBoxVisibility: false });
                }}><CloseIcon className="fas fa-times"></CloseIcon></CloseIconButton>
                <Subjects>
                  <SubjectsBox>
                    <SubjectsBoxLabel>Minhas disciplinas</SubjectsBoxLabel>
                    <AllSubjects>
                      {
                        teacherSubjects.map(teacherSubject => {
                          return (
                            <Subject key={teacherSubject.id}>
                              <SubjectLabel>{teacherSubject.name}</SubjectLabel>
                              <SubjectActionButton onClick={() => {
                                this.setState({ subjects: this.addArrayItem(subjects, teacherSubject) })
                                this.setState({ teacherSubjects: this.rmArrayItem(teacherSubjects, teacherSubject) });
                              }}><RemoveSubjectIcon>-</RemoveSubjectIcon></SubjectActionButton>
                            </Subject>
                          );
                        })
                      }
                    </AllSubjects>
                  </SubjectsBox>
                  <SubjectsBox>
                    <SubjectsBoxLabel>Disciplinas disponíveis</SubjectsBoxLabel>
                    <AllSubjects>
                      {
                        subjects.map(subject => {
                          return (
                            <Subject key={subject.id}>
                              <SubjectLabel>{subject.name}</SubjectLabel>
                              <SubjectActionButton onClick={() => {
                                this.setState({
                                  teacherSubjects: this.addArrayItem(teacherSubjects, subject),
                                  subjects: this.rmArrayItem(subjects, subject)
                                });
                              }}><AddSubjectIcon className="fas fa-plus"></AddSubjectIcon></SubjectActionButton>

                            </Subject>
                          );
                        })
                      }
                    </AllSubjects>
                  </SubjectsBox>
                </Subjects>
              </AllSubjectsBox>
            </SubjectsBoxBackground>
            : null)}
      </SignBox>
    );
  }
}