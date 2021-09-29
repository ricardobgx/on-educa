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

// State

interface ISubject {
  id: string;
  name: string;
}

interface IState {
  userType: string;
  name: string;
  email: string;
  password: string;
  schoolGrade: number;
  subjects: ISubject[];
  teacherSubjects: ISubject[];
  subjectsBoxVisibility: boolean;
}

// User Params

interface IUser {
  name: string;
  email: string;
  password: string;
  isOnline: boolean;
  profilePicture: string;
}

interface IStudent extends IUser {
  schoolGrade: number;
}

interface ITeacher extends IUser {
  subjects: ISubject[];
}

export default class Register extends React.Component {

  state: IState = {
    userType: 'student',
    name: '',
    email: '',
    password: '',
    schoolGrade: 1,
    subjects: [],
    teacherSubjects: [],
    subjectsBoxVisibility: false
  }

  componentDidMount() {
    this.getAllSubjects();
  }

  // Registro

  clearFields = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      schoolGrade: 1,
      teacherSubjects: [],
      subjectsBoxVisibility: false
    });
  }

  registerUser = async () => {
    const { userType, name, email, password, schoolGrade, teacherSubjects: subjects } = this.state;

    const userParams = {
      name,
      email,
      password,
      isOnline: true,
      profilePicture: 'https://stickerly.pstatic.net/sticker_pack/CvAjyhY5iy9P96g8E0nqYQ/B0F27T/33/4a548d61-c9b1-4ef0-bb29-2c3429c50e63.png'
    } as IUser;

    if (userType === 'student') await this.registerStudent({ ...userParams, schoolGrade, });
    else await this.registerTeacher({ ...userParams, subjects });
  }

  registerStudent = async (studentParams: IStudent) => {
    await OnEducaAPI.post('/students/', studentParams).then(response => {
      this.clearFields();
    }, error => {
      console.log(error);
    });
  }

  registerTeacher = async (teacherParams: ITeacher) => {
    await OnEducaAPI.post('/teachers/', teacherParams).then(response => {
      this.clearFields();
    }, error => {
      console.log(error);
    });
  }

  // Tipo de formulario

  isStudent = () => {
    const { userType } = this.state;

    if (userType === 'student') return true;
    return false;
  }

  // Funcoes para as disciplinas dos professores

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
          <SignField type="text" placeholder="Nome" value={this.state.name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ name: event.target.value });
          }}></SignField>
          <SignField type="email" placeholder="E-mail" value={this.state.email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ email: event.target.value });
          }}></SignField>
          <SignField type="password" placeholder="Senha" value={this.state.password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ password: event.target.value });
          }}></SignField>
          {
            (this.isStudent() ?
              <SignSchoolGradeBox>
                <SignSchoolGradeLabel>Que ano você faz?</SignSchoolGradeLabel>
                <SignSchoolGradeSelect value={this.state.schoolGrade} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  this.setState({ schoolGrade: Number(event.target.value) })
                }}>
                  <SignSchoolGradeOption value={1}>1º ano</SignSchoolGradeOption>
                  <SignSchoolGradeOption value={2}>2º ano</SignSchoolGradeOption>
                  <SignSchoolGradeOption value={3}>3º ano</SignSchoolGradeOption>
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
          <SignButton onClick={() => {
            this.registerUser();
          }}>Cadastrar</SignButton>
          <ChangeSignUser onClick={() => {
            if (this.isStudent()) {
              this.setState({ userType: 'teacher' });
            } else {
              this.setState({ userType: 'student' });
            }
            this.clearFields();
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