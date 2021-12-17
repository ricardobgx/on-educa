import React from 'react';
import theme from '../../../global/styles/theme';
import { ISchoolGrade } from '../../../interfaces/ISchoolGrade';
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
          {options.map((option) => (
            <SubjectSectionSelectOption
              key={option.id}
              style={{
                background:
                  selectedOption === option.id ? theme.colors.textColor : '',
                color:
                  selectedOption === option.id ? theme.colors.boxColor : '',
              }}
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
