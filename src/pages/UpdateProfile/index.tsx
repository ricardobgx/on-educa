/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import UpdateProfileActions from '../../components/UpdateProfile/UpdateProfileActions';
import UpdateProfileSections from '../../components/UpdateProfile/UpdateProfileSections';
import {
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_TEACHING_TYPE,
} from '../../static/defaultEntitiesValues';
import { RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, UpdateProfileBox } from './styles';

const UpdateProfile = (): JSX.Element => {
  /* GlobalRootState */

  const { people, aplication, student, teacher } = useSelector(
    (store: RootState) => store,
  );
  const { id, isStudent } = people;
  const { token } = aplication;

  /* LocalRootState */

  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [selectedTeachingTypeId, setSelectedTeachingTypeId] = useState('');
  const [selectedSchoolGradeId, setSelectedSchoolGradeId] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    setProfilePicture(people.profilePicture.path);

    setName(people.name);

    if (!isStudent) {
      const teachingType = teacher.teachingType || DEFAULT_TEACHING_TYPE;

      setSelectedTeachingTypeId(teachingType.id);
    } else {
      const schoolGrade = student.schoolGrade || DEFAULT_SCHOOL_GRADE;

      setSelectedSchoolGradeId(schoolGrade.id);
    }
    setEmail(people.email);
  }, [people]);

  const updateProfileActionsProps = {
    id,
    email,
    name,
    password: newPassword,
    profilePicture,
    schoolGradeId: selectedSchoolGradeId,
    teachingTypeId: selectedTeachingTypeId,
    isStudent,
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
    isStudent,
    test: '',
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
