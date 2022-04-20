import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { IPeopleParams } from '../../../dto/IPeopleParams';
import { getPeople, updatePeople } from '../../../functions/people';
import { updateStudent } from '../../../functions/student';
import { updateTeacher } from '../../../functions/teacher';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, State } from '../../../store';
import {
  UpdateProfileActionsBox,
  CancelUpdateProfileButton,
  CancelUpdateProfileButtonLabel,
  ConfirmUpdateProfileButton,
  ConfirmUpdateProfileButtonLabel,
} from './styles';

interface IUpdateProfileActionsProps {
  id: string;
  email: string;
  name: string;
  password: string;
  profilePicture: string;
  schoolGradeId: string;
  teachingTypeId: string;
  isStudent: boolean;
  token: string;
}

const UpdateProfileActions = (
  props: IUpdateProfileActionsProps,
): JSX.Element => {
  /* Global State */

  const dispatch = useDispatch();
  const { loginPeople } = bindActionCreators(ActionCreators, dispatch);
  const { student, teacher } = useSelector((store: State) => store);

  const {
    id,
    email,
    name,
    profilePicture,
    password,
    schoolGradeId,
    teachingTypeId,
    isStudent,
    token,
  } = props;

  const [updateCompleted, setUpdateCompleted] = useState(false);

  const peopleParams = {
    id,
    email: email === '' ? undefined : email,
    name: name === '' ? undefined : name,
    profilePicture: profilePicture === '' ? undefined : profilePicture,
    password: password === '' ? undefined : password,
    schoolGradeId: isStudent ? schoolGradeId : undefined,
    teachingTypeId: !isStudent ? teachingTypeId : undefined,
  } as IPeopleParams;

  const updateSucess = (): void => {
    getPeople(OnEducaAPI, id, loginPeople, token);
    setUpdateCompleted(true);
  };

  const updateError = (): void => {
    console.log('erro');
  };

  const updatePeopleSucess = async (): Promise<void> => {
    if (isStudent) {
      await updateStudent(
        OnEducaAPI,
        student.id,
        { schoolGradeId },
        token,
        updateSucess,
        updateError,
      );
    } else {
      await updateTeacher(
        OnEducaAPI,
        teacher.id,
        { teachingTypeId },
        token,
        updateSucess,
        updateError,
      );
    }
  };

  return (
    <UpdateProfileActionsBox>
      <CancelUpdateProfileButton to={`/profile/${id}`}>
        <CancelUpdateProfileButtonLabel>
          Cancelar
        </CancelUpdateProfileButtonLabel>
      </CancelUpdateProfileButton>
      <ConfirmUpdateProfileButton
        onClick={() =>
          updatePeople(
            OnEducaAPI,
            id,
            peopleParams,
            token,
            updatePeopleSucess,
            updateError,
          )
        }
      >
        <ConfirmUpdateProfileButtonLabel>
          Atualizar
        </ConfirmUpdateProfileButtonLabel>
      </ConfirmUpdateProfileButton>
      {updateCompleted && <Redirect to={`/profile/${id}`} />}
    </UpdateProfileActionsBox>
  );
};

export default UpdateProfileActions;
