import React from 'react';
import theme from '../../../global/styles/theme';
import { ISubject } from '../../../interfaces/ISubject';
import {
  SubjectSelectBox,
  SubjectSelectLabel,
  SubjectSelectOptionsList,
  SubjectSelectOptionsListBox,
  SubjectSelectOption,
  SubjectSelectOptionLabel,
  RequiredFieldLabel,
} from './styles';

interface ISubjectSelectProps {
  label: string;
  subjects: ISubject[];
  subjectSelectedId: string;
  setSubjectSelected: (value: ISubject) => void;
}

const SubjectSelect = (props: ISubjectSelectProps): JSX.Element => {
  const { label, subjects, subjectSelectedId, setSubjectSelected } = props;

  const sortSubjects = (subjectA: ISubject, subjectB: ISubject): number => {
    if (subjectA.name > subjectB.name) return 1;
    if (subjectA.name < subjectB.name) return -1;
    return 0;
  };

  const sortedSubjects = subjects.sort(sortSubjects);

  return (
    <SubjectSelectBox>
      <SubjectSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SubjectSelectLabel>
      <SubjectSelectOptionsList>
        <SubjectSelectOptionsListBox>
          {sortedSubjects.map((subject) => (
            <SubjectSelectOption
              key={subject.id}
              style={{
                background:
                  subjectSelectedId === subject.id
                    ? theme.colors.textColor
                    : '',
                color:
                  subjectSelectedId === subject.id ? theme.colors.boxColor : '',
              }}
              onClick={() => setSubjectSelected(subject)}
            >
              <SubjectSelectOptionLabel>
                {subject.name}
              </SubjectSelectOptionLabel>
            </SubjectSelectOption>
          ))}
        </SubjectSelectOptionsListBox>
      </SubjectSelectOptionsList>
    </SubjectSelectBox>
  );
};

export default SubjectSelect;
