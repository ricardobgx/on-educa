/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import UpdateProfileActions from '../../components/UpdateProfile/UpdateProfileActions';
import UpdateProfileSections from '../../components/UpdateProfile/UpdateProfileSections';
import { isStudent } from '../../functions/user';
import { State } from '../../store';
import { DEFAULT_SCHOOL_GRADE } from '../../store/reducers/schoolGrade';
import { DEFAULT_TEACHING_TYPE } from '../../store/reducers/teachingType';
import { Page } from '../components';
import { PageBox, UpdateProfileBox } from './styles';

const UpdateProfile = (): JSX.Element => {
  /* Global State */

  const { user, aplication } = useSelector((store: State) => store);
  const { id } = user;
  const { userType, token } = aplication;

  /* Local State */

  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [selectedTeachingTypeId, setSelectedTeachingTypeId] = useState('');
  const [selectedSchoolGradeId, setSelectedSchoolGradeId] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    setProfilePicture(user.profilePicture);
    setName(user.name);
    if (!isStudent(userType)) {
      const teachingType = user.teachingType || DEFAULT_TEACHING_TYPE;
      setSelectedTeachingTypeId(teachingType.id);
    } else {
      const schoolGrade = user.schoolGrade || DEFAULT_SCHOOL_GRADE;
      setSelectedSchoolGradeId(schoolGrade.id);
    }
    setEmail(user.email);
  }, [user]);

  const updateProfileActionsProps = {
    id,
    email,
    name,
    password: newPassword,
    profilePicture,
    schoolGradeId: selectedSchoolGradeId,
    userType,
    token,
  };

  const updateProfileSectionProps = {
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
    userType,
  };

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Atualizar conta" backLink={`/profile/${id}`} />
        <UpdateProfileBox>
          <UpdateProfileSections {...updateProfileSectionProps} />
          <UpdateProfileActions {...updateProfileActionsProps} />
        </UpdateProfileBox>
      </PageBox>
    </Page>
  );
};

export default UpdateProfile;
