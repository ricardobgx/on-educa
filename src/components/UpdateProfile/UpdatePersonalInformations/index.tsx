/* eslint-disable */

import React from 'react';
import {
  UpdateProfileSection,
  UpdateProfileSectionBox,
  UpdateProfileSectionBoxLabel,
  UpdateProfileSectionLabel,
  UpdateProfileSectionsBox,
} from '../styles';
import UpdateProfileSchoolGrade from '../UpdateProfileSchoolGrade';
import UpdateProfileTeachingType from '../UpdateProfileTeachingType';
import UpdateProfileTextInputSection from '../UpdateProfileTextInputSection';

export interface IUpdatePersonalInformationsProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (email: string) => void;
  selectedTeachingTypeId: string;
  setSelectedTeachingTypeId: (value: string) => void;
  selectedSchoolGradeId: string;
  setSelectedSchoolGradeId: (value: string) => void;
  isStudent: boolean;
}

const UpdatePersonalInformations = (
  props: IUpdatePersonalInformationsProps,
): JSX.Element => {
  const {
    name,
    setName,
    email,
    setEmail,
    selectedTeachingTypeId,
    setSelectedTeachingTypeId,
    selectedSchoolGradeId,
    setSelectedSchoolGradeId,
    isStudent,
  } = props;

  return (
    <UpdateProfileSection className="with-shadow bd-rd-30">
      <UpdateProfileSectionLabel>
        Informações pessoais
      </UpdateProfileSectionLabel>
      <UpdateProfileSectionsBox>
        <UpdateProfileTextInputSection
          label="Nome"
          inputType="text"
          value={name}
          setValue={setName}
        />
        <UpdateProfileTextInputSection
          label="E-mail"
          inputType="email"
          value={email}
          setValue={setEmail}
        />
        {isStudent ? (
          <UpdateProfileSchoolGrade
            selectedSchoolGradeId={selectedSchoolGradeId}
            setSelectedSchoolGradeId={setSelectedSchoolGradeId}
          />
        ) : (
          <UpdateProfileTeachingType
            selectedTeachingTypeId={selectedTeachingTypeId}
            setSelectedTeachingTypeId={setSelectedTeachingTypeId}
          />
        )}
      </UpdateProfileSectionsBox>
    </UpdateProfileSection>
  );
};

export default UpdatePersonalInformations;
