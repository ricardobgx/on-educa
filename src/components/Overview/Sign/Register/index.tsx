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
  CloseIconButton,
  AddSubjectButtonLabel,
} from './components';

import {
  SignBox,
  SignLabel,
  SignFieldsBox,
  SignActions,
  SignButton,
  ChangeSignUser,
  SignButtonLabel,
  ChangeSignUserLabel,
} from '../components';

import OnEducaAPI from '../../../../services/api';
import { ISignFormProps } from '../SignForm/interfaces';
import SignTextInput from '../SignTextInput';

// State

interface ISubject {
  id: string;
  name: string;
}

// User Params

interface IUser {
  name: string;
  email: string;
  password: string;
  isOnline: boolean;
  profilePicture: string;
}

// Fields Warnings

interface IFieldsWarnings {
  nameWarning: boolean;
  emailWarning: boolean;
  passwordWarning: boolean;
}

// State properties

interface IState extends IUser, IFieldsWarnings {
  schoolGrade: number;
  subjects: ISubject[];
  teacherSubjects: ISubject[];
  subjectsBoxVisibility: boolean;
}

interface IStudent extends IUser {
  schoolGrade: number;
}

interface ITeacher extends IUser {
  subjects: ISubject[];
}

const DEFAULT_VALUE: IState = {
  name: '',
  email: '',
  password: '',
  isOnline: true,
  profilePicture: '',
  schoolGrade: 1,
  subjects: [],
  teacherSubjects: [],
  subjectsBoxVisibility: false,
  nameWarning: false,
  emailWarning: false,
  passwordWarning: false,
};

export default class Register extends React.Component<ISignFormProps> {
  constructor(props: ISignFormProps) {
    super(props);
    this.state = DEFAULT_VALUE;
  }

  // Registro

  clearFields = (): void => {
    this.setState(DEFAULT_VALUE);
  };

  fieldsIsValid = (name: string, email: string, password: string): boolean => {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      password.length < 8
    )
      return false;
    return true;
  };

  registerUser = async (): Promise<void> => {
    const {
      name,
      email,
      password,
      schoolGrade,
      teacherSubjects: subjects,
    } = this.state as IState;
    if (this.fieldsIsValid(name, email, password)) return;

    const { isStudent, loadAnimation } = this.props;

    const userParams = {
      name,
      email,
      password,
      isOnline: true,
      profilePicture: '',
    } as IUser;

    loadAnimation();

    if (isStudent()) await this.registerStudent({ ...userParams, schoolGrade });
    else await this.registerTeacher({ ...userParams, subjects });
  };

  registerStudent = async (studentParams: IStudent): Promise<void> => {
    const { loadAnimation } = this.props;

    await OnEducaAPI.post('/students/', studentParams).then(() => {
      this.clearFields();
    });

    loadAnimation();
  };

  registerTeacher = async (teacherParams: ITeacher): Promise<void> => {
    const { loadAnimation } = this.props;

    await OnEducaAPI.post('/teachers/', teacherParams).then(() => {
      this.clearFields();
    });

    loadAnimation();
  };

  // Funcoes para as disciplinas dos professores

  getAllSubjects = async (): Promise<void> => {
    await OnEducaAPI.get('/subjects').then((response) => {
      const allSubjects: ISubject[] = response.data;
      const { teacherSubjects } = this.state as IState;
      const subjects = allSubjects.filter(
        (subject: ISubject) =>
          !teacherSubjects.find(
            (teacherSubject) => teacherSubject.id === subject.id,
          ),
      );
      this.setState({ subjects });
    });
  };

  rmArrayItem = (array: ISubject[], item: ISubject): ISubject[] => {
    const newArray = new Array<ISubject>();
    array.map((arrayItem) => {
      if (!(arrayItem === item)) newArray.push(arrayItem);
      return null;
    });

    return newArray;
  };

  addArrayItem = (array: ISubject[], item: ISubject): ISubject[] => {
    array.push(item);
    return array;
  };

  // Set Values

  setName = (name: string): void => {
    this.setState({ name });
  };

  setEmail = (email: string): void => {
    this.setState({ email });
  };

  setPassword = (password: string): void => {
    this.setState({ password });
  };

  // Set Field Warnings

  setNameWarning = (nameWarning: boolean): void => {
    this.setState({ nameWarning });
  };

  setEmailWarning = (emailWarning: boolean): void => {
    this.setState({ emailWarning });
  };

  setPasswordWarning = (passwordWarning: boolean): void => {
    this.setState({ passwordWarning });
  };

  render(): JSX.Element {
    const {
      schoolGrade,
      subjects,
      teacherSubjects,
      subjectsBoxVisibility,
      name,
      nameWarning,
      email,
      emailWarning,
      password,
      passwordWarning,
    } = this.state as IState;
    const { isStudent, changeUserType } = this.props;

    return (
      <SignBox>
        <SignLabel>Cadastre-se</SignLabel>
        <SignFieldsBox>
          <SignTextInput
            id="name-input"
            spellCheck={false}
            type="text"
            placeholder="Nome"
            value={name}
            setValue={this.setName}
            isActive={nameWarning}
            setIsActive={this.setNameWarning}
            label="Informe seu nome"
          />
          <SignTextInput
            id="email-input"
            spellCheck={false}
            type="email"
            placeholder="E-mail"
            value={email}
            setValue={this.setEmail}
            isActive={emailWarning}
            setIsActive={this.setEmailWarning}
            label="Informe seu e-mail"
          />
          <SignTextInput
            id="password-input"
            spellCheck={false}
            type="password"
            placeholder="Senha"
            value={password}
            setValue={this.setPassword}
            isActive={passwordWarning}
            setIsActive={this.setPasswordWarning}
            label="Informe sua senha"
          />
          {isStudent() ? (
            <SignSchoolGradeBox>
              <SignSchoolGradeLabel>Que ano você faz?</SignSchoolGradeLabel>
              <SignSchoolGradeSelect
                value={schoolGrade}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  this.setState({ schoolGrade: Number(event.target.value) });
                }}
              >
                <SignSchoolGradeOption value={1}>1º ano</SignSchoolGradeOption>
                <SignSchoolGradeOption value={2}>2º ano</SignSchoolGradeOption>
                <SignSchoolGradeOption value={3}>3º ano</SignSchoolGradeOption>
              </SignSchoolGradeSelect>
            </SignSchoolGradeBox>
          ) : (
            <AddSubjectButton
              onClick={() => {
                this.getAllSubjects();
                this.setState({ subjectsBoxVisibility: true });
              }}
            >
              <AddSubjectButtonLabel>Suas disciplinas</AddSubjectButtonLabel>
              <AddIcon className="fas fa-plus" />
            </AddSubjectButton>
          )}
        </SignFieldsBox>
        <SignActions>
          <SignButton
            onClick={() => {
              this.registerUser();
            }}
          >
            <SignButtonLabel>Cadastrar</SignButtonLabel>
          </SignButton>
          <ChangeSignUser
            onClick={() => {
              changeUserType();
              this.clearFields();
            }}
          >
            <ChangeSignUserLabel>
              Sou
              {isStudent() ? ' professor' : ' aluno'}
            </ChangeSignUserLabel>
          </ChangeSignUser>
        </SignActions>
        {subjectsBoxVisibility ? (
          <SubjectsBoxBackground>
            <AllSubjectsBox>
              <CloseIconButton
                onClick={() => {
                  this.setState({ subjectsBoxVisibility: false });
                }}
              >
                <CloseIcon className="fas fa-times" />
              </CloseIconButton>
              <Subjects>
                <SubjectsBox>
                  <SubjectsBoxLabel>Minhas disciplinas</SubjectsBoxLabel>
                  <AllSubjects>
                    {teacherSubjects.map((teacherSubject) => (
                      <Subject key={teacherSubject.id}>
                        <SubjectLabel>{teacherSubject.name}</SubjectLabel>
                        <SubjectActionButton
                          onClick={() => {
                            this.setState({
                              subjects: this.addArrayItem(
                                subjects,
                                teacherSubject,
                              ),
                            });
                            this.setState({
                              teacherSubjects: this.rmArrayItem(
                                teacherSubjects,
                                teacherSubject,
                              ),
                            });
                          }}
                        >
                          <RemoveSubjectIcon>-</RemoveSubjectIcon>
                        </SubjectActionButton>
                      </Subject>
                    ))}
                  </AllSubjects>
                </SubjectsBox>
                <SubjectsBox>
                  <SubjectsBoxLabel>Disciplinas disponíveis</SubjectsBoxLabel>
                  <AllSubjects>
                    {subjects.map((subject) => (
                      <Subject key={subject.id}>
                        <SubjectLabel>{subject.name}</SubjectLabel>
                        <SubjectActionButton
                          onClick={() => {
                            this.setState({
                              teacherSubjects: this.addArrayItem(
                                teacherSubjects,
                                subject,
                              ),
                              subjects: this.rmArrayItem(subjects, subject),
                            });
                          }}
                        >
                          <AddSubjectIcon className="fas fa-plus" />
                        </SubjectActionButton>
                      </Subject>
                    ))}
                  </AllSubjects>
                </SubjectsBox>
              </Subjects>
            </AllSubjectsBox>
          </SubjectsBoxBackground>
        ) : null}
      </SignBox>
    );
  }
}
