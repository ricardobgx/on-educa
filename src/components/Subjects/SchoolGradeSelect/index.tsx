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

interface ISchoolGradeSelectProps {
  label: string;
  options: ISchoolGrade[];
  selectedOption: string;
  setOption: (value: ISchoolGrade) => void;
}

const SchoolGradeSelect = (props: ISchoolGradeSelectProps): JSX.Element => {
  const { label, options, selectedOption, setOption } = props;

  return (
    <SubjectSectionSelectBox>
      <SubjectSectionSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SubjectSectionSelectLabel>
      <SubjectSectionSelectOptionsList>
        <SubjectSectionSelectOptionsListBox>
          {options.length === 0 && (
            <NoSelectedSupplies>Nenhum ensino selecionado</NoSelectedSupplies>
          )}
          {options.map((option) => (
            <SubjectSectionSelectOption
              key={option.id}
              className={`block-shadow-button bd-rd-20 ${
                option.id === selectedOption ? 'selected' : ''
              }`}
              onClick={() => setOption(option)}
            >
              <SubjectSectionSelectOptionLabel>
                {option.index}º ano
              </SubjectSectionSelectOptionLabel>
            </SubjectSectionSelectOption>
          ))}
        </SubjectSectionSelectOptionsListBox>
      </SubjectSectionSelectOptionsList>
    </SubjectSectionSelectBox>
  );
};

export default SchoolGradeSelect;
