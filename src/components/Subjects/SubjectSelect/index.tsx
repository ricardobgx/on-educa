import React from 'react';
import theme from '../../../global/styles/theme';
import { NoSelectedSupplies } from '../../App/Supplies/styles';
import {
  SubjectSectionSelectBox,
  RequiredFieldLabel,
  SubjectSectionSelectLabel,
  SubjectSectionSelectOption,
  SubjectSectionSelectOptionLabel,
  SubjectSectionSelectOptionsList,
  SubjectSectionSelectOptionsListBox,
} from '../styles';

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
    <SubjectSectionSelectBox>
      <SubjectSectionSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SubjectSectionSelectLabel>
      <SubjectSectionSelectOptionsList>
        <SubjectSectionSelectOptionsListBox>
          {sortedSubjects.length === 0 && (
            <NoSelectedSupplies>Nenhuma série selecionada</NoSelectedSupplies>
          )}
          {sortedSubjects.map((subject) => (
            <SubjectSectionSelectOption
              key={subject.id}
              className={`block-shadow-button bd-rd-20 ${
                subject.id === subjectSelectedId ? 'selected' : ''
              }`}
              onClick={() => setSubjectSelected(subject)}
            >
              <SubjectSectionSelectOptionLabel>
                {subject.name}
              </SubjectSectionSelectOptionLabel>
            </SubjectSectionSelectOption>
          ))}
        </SubjectSectionSelectOptionsListBox>
      </SubjectSectionSelectOptionsList>
    </SubjectSectionSelectBox>
  );
};

export default SubjectSelect;
