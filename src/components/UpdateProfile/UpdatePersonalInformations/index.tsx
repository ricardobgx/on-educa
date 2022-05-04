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
import {
  ProfilePicture,
  ProfilePictureActionLabel,
  ProfilePictureActions,
  ProfilePictureBox,
  RemoveImageButton,
  UploadImageButton,
} from './styles';

export interface IUpdatePersonalInformationsProps {
  name: string;
  setName: (value: string) => void;
  profilePicture: string;
  setProfilePicture: (value: string) => void;
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
    profilePicture,
    setProfilePicture,
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
