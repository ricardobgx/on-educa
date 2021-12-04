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
  options: ISubject[];
  selectedOption: string;
  setOption: (id: string) => void;
}

const SubjectSelect = (props: ISubjectSelectProps): JSX.Element => {
  const { label, options, selectedOption, setOption } = props;

  return (
    <SubjectSelectBox>
      <SubjectSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SubjectSelectLabel>
      <SubjectSelectOptionsList>
        <SubjectSelectOptionsListBox>
          {options.map((option) => (
            <SubjectSelectOption
              key={option.id}
              style={{
                background:
                  selectedOption === option.id ? theme.colors.textColor : '',
                color:
                  selectedOption === option.id ? theme.colors.boxColor : '',
              }}
              onClick={() => setOption(option.id)}
            >
              <SubjectSelectOptionLabel>{option.name}</SubjectSelectOptionLabel>
            </SubjectSelectOption>
          ))}
        </SubjectSelectOptionsListBox>
      </SubjectSelectOptionsList>
    </SubjectSelectBox>
  );
};

export default SubjectSelect;
