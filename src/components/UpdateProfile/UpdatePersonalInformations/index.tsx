import React from 'react';
import {
  UpdateProfileSection,
  UpdateProfileSectionBox,
  UpdateProfileSectionBoxLabel,
  UpdateProfileSectionLabel,
  UpdateProfileSectionsBox,
} from '../styles';
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
  } = props;

  return (
    <UpdateProfileSection>
      <UpdateProfileSectionLabel>
        Informações pessoais
      </UpdateProfileSectionLabel>
      <UpdateProfileSectionsBox>
        <UpdateProfileSectionBox>
          <UpdateProfileSectionBoxLabel>
            Foto de perfil
          </UpdateProfileSectionBoxLabel>
          <ProfilePictureBox>
            <ProfilePicture src={profilePicture} />
            <ProfilePictureActions>
              <UploadImageButton>
                <ProfilePictureActionLabel>
                  Upload de imagem
                </ProfilePictureActionLabel>
              </UploadImageButton>
              <RemoveImageButton>
                <ProfilePictureActionLabel>
                  Remover imagem
                </ProfilePictureActionLabel>
              </RemoveImageButton>
            </ProfilePictureActions>
          </ProfilePictureBox>
        </UpdateProfileSectionBox>
        <UpdateProfileTextInputSection
          label="Nome"
          inputType="text"
          value={name}
          setValue={setName}
        />
        <UpdateProfileTeachingType
          selectedTeachingTypeId={selectedTeachingTypeId}
          setSelectedTeachingTypeId={setSelectedTeachingTypeId}
        />
      </UpdateProfileSectionsBox>
    </UpdateProfileSection>
  );
};

export default UpdatePersonalInformations;
