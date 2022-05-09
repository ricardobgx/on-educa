import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriendRequestsByPeople } from '../../../../functions/friendRequest';
import {
  getPeople,
  loginPeople,
  setPeopleVariables,
  setUpPeopleType,
} from '../../../../functions/people';
import { showErrorMessage } from '../../../../functions/utils';
import OnEducaAPI from '../../../../services/api';
import { ActionCreators } from '../../../../store';
import { TSignFormType } from '../../../../types/TSignFormType';
import SignFormEmailField from '../SignFormEmailField';
import SignFormPasswordField from '../SignFormPasswordField';
import {
  SignForm,
  SignFormButton,
  SignFormButtonLabel,
  SignFormFields,
} from '../SignForms/styles';

const SignInForm: React.FC<ISignFormProps> = (props) => {
  const { signFormType, switchSignForm } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {
    loginPeople: loadPeople,
    loadIsStudent,
    loadToken,
    loadFriendRequests,
    loadStudent,
    loadTeacher,
    showFloatNotification,
    enableLoadingAnimation,
    disableLoadingAnimation,
  } = bindActionCreators(ActionCreators, dispatch);

  const login = async (): Promise<void> => {
    enableLoadingAnimation();

    const authResponse = await loginPeople(
      OnEducaAPI,
      { email, password },
      (err: AxiosError): void => {
        showErrorMessage(err, showFloatNotification);
        disableLoadingAnimation();
      },
    );

    if (!authResponse) return;

    const { id, token } = authResponse;

    const people = await getPeople(OnEducaAPI, id, token);

    if (!people) {
      disableLoadingAnimation();

      return;
    }

    loadToken(token);
    loadIsStudent(people.isStudent);
    loadPeople(people);

    await setUpPeopleType(
      OnEducaAPI,
      id,
      people.isStudent,
      token,
      loadStudent,
      loadTeacher,
    );
    const friendRequests = await getFriendRequestsByPeople(
      OnEducaAPI,
      id,
      token,
    );

    loadFriendRequests(friendRequests);
    setPeopleVariables(id, people.isStudent, token);
  };

  return (
    <SignForm
      className={`with-shadow bd-rd-30 form form-login ${
        signFormType === TSignFormType.SIGNIN ? 'is-active' : 'is-not-active'
      }`}
    >
      <SignFormFields className="sign-form-fields">
        <SignFormEmailField
          id="signin-email"
          label="E-mail"
          value={email}
          setValue={setEmail}
        />
        <SignFormPasswordField
          id="signin-password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
      </SignFormFields>
      <SignFormButton
        disabled={!email.trim() || !password.trim()}
        className="btn-login block-shadow-button main-action bd-rd-20"
        onClick={() => login()}
      >
        <SignFormButtonLabel>Entrar</SignFormButtonLabel>
      </SignFormButton>
      <SignFormButton
        onClick={() => switchSignForm()}
        className="btn-switch switcher block-shadow-button secondary-action bd-rd-20"
      >
        <SignFormButtonLabel>Cadastrar</SignFormButtonLabel>
      </SignFormButton>
    </SignForm>
  );
};

export default SignInForm;
