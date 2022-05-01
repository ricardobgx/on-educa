import React from 'react';
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
    if (teachingTypeA.name > teachingTypeB.name) return 1;
    if (teachingTypeA.name < teachingTypeB.name) return -1;
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
              className={`block-shadow-button bd-rd-20 ${
                teachingType.id === teachingTypeSelectedId ? 'selected' : ''
              }`}
              onClick={() => setTeachingTypeSelected(teachingType)}
            >
              <SubjectSectionSelectOptionLabel>
                {teachingType.name}
              </SubjectSectionSelectOptionLabel>
            </SubjectSectionSelectOption>
          ))}
        </SubjectSectionSelectOptionsListBox>
      </SubjectSectionSelectOptionsList>
    </SubjectSectionSelectBox>
  );
};

export default TeachingTypeSelect;
