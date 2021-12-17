import React from 'react';
import theme from '../../../global/styles/theme';
import { ITeachingType } from '../../../interfaces/ITeachingType';
import {
  RequiredFieldLabel,
  SubjectSectionSelectBox,
  SubjectSectionSelectLabel,
  SubjectSectionSelectOption,
  SubjectSectionSelectOptionLabel,
  SubjectSectionSelectOptionsList,
  SubjectSectionSelectOptionsListBox,
} from '../styles';

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
    <SubjectSectionSelectBox>
      <SubjectSectionSelectLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </SubjectSectionSelectLabel>
      <SubjectSectionSelectOptionsList>
        <SubjectSectionSelectOptionsListBox>
          {sortedTeachingTypes.map((teachingType) => (
            <SubjectSectionSelectOption
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
              <SubjectSectionSelectOptionLabel>
                {teachingType.title}
              </SubjectSectionSelectOptionLabel>
            </SubjectSectionSelectOption>
          ))}
        </SubjectSectionSelectOptionsListBox>
      </SubjectSectionSelectOptionsList>
    </SubjectSectionSelectBox>
  );
};

export default TeachingTypeSelect;
