import React from 'react';
import theme from '../../../global/styles/theme';
import { ISchoolGrade } from '../../../interfaces/ISchoolGrade';
import {
  SchoolGradeSelectBox,
  SchoolGradeSelectLabel,
  SchoolGradeSelectOptionsList,
  SchoolGradeSelectOptionsListBox,
  SchoolGradeSelectOption,
  SchoolGradeSelectOptionLabel,
  RequiredFieldLabel,
} from './styles';

interface ISchoolGradeSelectProps {
  label: string;
  options: ISchoolGrade[];
  selectedOption: string;
  setOption: (id: string) => void;
}

const SchoolGradeSelect = (props: ISchoolGradeSelectProps): JSX.Element => {
  const { label, options, selectedOption, setOption } = props;

  return (
    <SchoolGradeSelectBox>
      <SchoolGradeSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SchoolGradeSelectLabel>
      <SchoolGradeSelectOptionsList>
        <SchoolGradeSelectOptionsListBox>
          {options.map((option) => (
            <SchoolGradeSelectOption
              key={option.id}
              style={{
                background:
                  selectedOption === option.id ? theme.colors.textColor : '',
                color:
                  selectedOption === option.id ? theme.colors.boxColor : '',
              }}
              onClick={() => setOption(option.id)}
            >
              <SchoolGradeSelectOptionLabel>
                {option.index}º ano
              </SchoolGradeSelectOptionLabel>
            </SchoolGradeSelectOption>
          ))}
        </SchoolGradeSelectOptionsListBox>
      </SchoolGradeSelectOptionsList>
    </SchoolGradeSelectBox>
  );
};

export default SchoolGradeSelect;
