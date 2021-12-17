import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { IUserParams } from '../../../dto/IUserParams';
import { getUser, isStudent, updateUser } from '../../../functions/user';
import OnEducaAPI from '../../../services/api';
import { ActionCreators } from '../../../store';
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
  userType: string;
  token: string;
}

const UpdateProfileActions = (
  props: IUpdateProfileActionsProps,
): JSX.Element => {
  /* Global State */

  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(ActionCreators, dispatch);

  const {
    id,
    email,
    name,
    profilePicture,
    password,
    schoolGradeId,
    teachingTypeId,
    userType,
    token,
  } = props;

  const [updateCompleted, setUpdateCompleted] = useState(false);

  const userParams = {
    id,
    email: email === '' ? undefined : email,
    name: name === '' ? undefined : name,
    profilePicture: profilePicture === '' ? undefined : profilePicture,
    password: password === '' ? undefined : password,
    schoolGradeId: isStudent(userType) ? schoolGradeId : undefined,
    teachingTypeId: !isStudent(userType) ? teachingTypeId : undefined,
  } as IUserParams;

  const updateSucess = (): void => {
    getUser(OnEducaAPI, userType, id, loginUser, token);
    setUpdateCompleted(true);
  };

  const updateError = (): void => {
    console.log('erro');
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
          updateUser(
            OnEducaAPI,
            userType,
            id,
            userParams,
            token,
            updateSucess,
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
