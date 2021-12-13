/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import UpdateAccountInformations, {
  IUpdateAccountInformationsProps,
} from '../UpdateAccountInformations';
import UpdatePersonalInformations, {
  IUpdatePersonalInformationsProps,
} from '../UpdatePersonalInformations';
import { UpdateProfileSectionsBox } from './styles';

interface IUpdateProfileSectionsProps
  extends IUpdatePersonalInformationsProps,
    IUpdateAccountInformationsProps {}

const UpdateProfileSections = (
  props: IUpdateProfileSectionsProps,
): JSX.Element => {
  const {
    profilePicture,
    setProfilePicture,
    name,
    setName,
    selectedTeachingTypeId,
    setSelectedTeachingTypeId,
    selectedSchoolGradeId,
    setSelectedSchoolGradeId,
    email,
    setEmail,
    newPassword,
    setNewPassword,
  } = props;

  const updatePersonalInformationsProps = {
    profilePicture,
    setProfilePicture,
    name,
    setName,
    selectedTeachingTypeId,
    setSelectedTeachingTypeId,
    selectedSchoolGradeId,
    setSelectedSchoolGradeId,
  };

  const updateAccountInformationsProps = {
    email,
    setEmail,
    newPassword,
    setNewPassword,
  };

  return (
    <UpdateProfileSectionsBox>
      <UpdatePersonalInformations {...updatePersonalInformationsProps} />
      <UpdateAccountInformations {...updateAccountInformationsProps} />
    </UpdateProfileSectionsBox>
  );
};

export default UpdateProfileSections;
