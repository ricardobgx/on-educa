import React from 'react';
import theme from '../../../global/styles/theme';
import {
  SubjectDetailSelectBox,
  SubjectDetailSelectLabel,
  SubjectDetailSelectOptionsList,
  SubjectDetailSelectOptionsListBox,
  SubjectDetailSelectOption,
  SubjectDetailSelectOptionLabel,
  RequiredFieldLabel,
} from './styles';

export interface ISubjectDetailSelectOption {
  id: string;
  title: string;
}

interface ISubjectDetailSelectProps {
  label: string;
  options: ISubjectDetailSelectOption[];
  selectedOption: string;
  setOption: (id: string) => void;
}

const SubjectDetailSelect = (props: ISubjectDetailSelectProps): JSX.Element => {
  const { label, options, selectedOption, setOption } = props;

  return (
    <SubjectDetailSelectBox>
      <SubjectDetailSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SubjectDetailSelectLabel>
      <SubjectDetailSelectOptionsList>
        <SubjectDetailSelectOptionsListBox>
          {options.map((option) => (
            <SubjectDetailSelectOption
              style={{
                background:
                  selectedOption === option.id ? theme.colors.textColor : '',
                color:
                  selectedOption === option.id ? theme.colors.boxColor : '',
              }}
              onClick={() => setOption(option.id)}
            >
              <SubjectDetailSelectOptionLabel>
                {option.title}
              </SubjectDetailSelectOptionLabel>
            </SubjectDetailSelectOption>
          ))}
        </SubjectDetailSelectOptionsListBox>
      </SubjectDetailSelectOptionsList>
    </SubjectDetailSelectBox>
  );
};

export default SubjectDetailSelect;
