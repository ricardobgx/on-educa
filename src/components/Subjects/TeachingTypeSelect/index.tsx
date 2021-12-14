import React from 'react';
import theme from '../../../global/styles/theme';
import { ITeachingType } from '../../../interfaces/ITeachingType';
import {
  TeachingTypeSelectBox,
  TeachingTypeSelectLabel,
  TeachingTypeSelectOptionsList,
  TeachingTypeSelectOptionsListBox,
  TeachingTypeSelectOption,
  TeachingTypeSelectOptionLabel,
  RequiredFieldLabel,
} from './styles';

interface ITeachingTypeSelectProps {
  label: string;
  teachingTypes: ITeachingType[];
  teachingTypeSelectedId: string;
  setTeachingTypeSelected: (value: ITeachingType) => void;
}

const TeachingTypeSelect = (props: ITeachingTypeSelectProps): JSX.Element => {
  const {
    label,
    teachingTypes,
    teachingTypeSelectedId,
    setTeachingTypeSelected,
  } = props;

  const sortTeachingTypes = (
    teachingTypeA: ITeachingType,
    teachingTypeB: ITeachingType,
  ): number => {
    if (teachingTypeA.title > teachingTypeB.title) return 1;
    if (teachingTypeA.title < teachingTypeB.title) return -1;
    return 0;
  };

  const sortedTeachingTypes = teachingTypes.sort(sortTeachingTypes);

  return (
    <TeachingTypeSelectBox>
      <TeachingTypeSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </TeachingTypeSelectLabel>
      <TeachingTypeSelectOptionsList>
        <TeachingTypeSelectOptionsListBox>
          {sortedTeachingTypes.map((teachingType) => (
            <TeachingTypeSelectOption
              key={teachingType.id}
              style={{
                background:
                  teachingTypeSelectedId === teachingType.id
                    ? theme.colors.textColor
                    : '',
                color:
                  teachingTypeSelectedId === teachingType.id
                    ? theme.colors.boxColor
                    : '',
              }}
              onClick={() => setTeachingTypeSelected(teachingType)}
            >
              <TeachingTypeSelectOptionLabel>
                {teachingType.title}
              </TeachingTypeSelectOptionLabel>
            </TeachingTypeSelectOption>
          ))}
        </TeachingTypeSelectOptionsListBox>
      </TeachingTypeSelectOptionsList>
    </TeachingTypeSelectBox>
  );
};

export default TeachingTypeSelect;
