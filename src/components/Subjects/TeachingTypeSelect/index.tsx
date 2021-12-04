import React from 'react';
import theme from '../../../global/styles/theme';
import {
  TeachingTypeSelectBox,
  TeachingTypeSelectLabel,
  TeachingTypeSelectOptionsList,
  TeachingTypeSelectOptionsListBox,
  TeachingTypeSelectOption,
  TeachingTypeSelectOptionLabel,
  RequiredFieldLabel,
} from './styles';

export interface ITeachingTypeSelectOption {
  id: string;
  title: string;
}

interface ITeachingTypeSelectProps {
  label: string;
  options: ITeachingTypeSelectOption[];
  selectedOption: string;
  setOption: (id: string) => void;
}

const TeachingTypeSelect = (props: ITeachingTypeSelectProps): JSX.Element => {
  const { label, options, selectedOption, setOption } = props;

  return (
    <TeachingTypeSelectBox>
      <TeachingTypeSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </TeachingTypeSelectLabel>
      <TeachingTypeSelectOptionsList>
        <TeachingTypeSelectOptionsListBox>
          {options.map((option) => (
            <TeachingTypeSelectOption
              key={option.id}
              style={{
                background:
                  selectedOption === option.id ? theme.colors.textColor : '',
                color:
                  selectedOption === option.id ? theme.colors.boxColor : '',
              }}
              onClick={() => setOption(option.id)}
            >
              <TeachingTypeSelectOptionLabel>
                {option.title}
              </TeachingTypeSelectOptionLabel>
            </TeachingTypeSelectOption>
          ))}
        </TeachingTypeSelectOptionsListBox>
      </TeachingTypeSelectOptionsList>
    </TeachingTypeSelectBox>
  );
};

export default TeachingTypeSelect;
