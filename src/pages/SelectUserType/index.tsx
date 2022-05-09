/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SignPageHeader from '../../components/SignPageHeader';
import { ActionCreators, RootState } from '../../store';
import OnlineLearning from '../../svgs/OnlineLearning';
import Teaching from '../../svgs/Teaching';
import {
  SelectUserTypeBox,
  UserTypes,
  UserType,
  UserTypeLabel,
} from './styles';

const SelectUserType: React.FC = () => {
  const { theme, signUp } = useSelector((store: RootState) => store);
  const { name, email, password } = signUp;

  const dispatch = useDispatch();
  const { loadSignUpUserTypeData } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const pageHistory = useHistory();

  const verifySignUpProgress = (): void => {
    if (!email.trim() || !name.trim() || !password.trim()) {
      pageHistory.push('/sign');
    }
  };

  const selectUserType = (isStudent: boolean): void => {
    loadSignUpUserTypeData({ isStudent });

    if (isStudent) pageHistory.push('/select-school-grade');
    else pageHistory.push('/select-teaching-type');
  };

  useEffect(() => {
    verifySignUpProgress();
  }, []);

  return (
    <SelectUserTypeBox>
      <SignPageHeader title="Qual sua função?" canBack backLink="/sign" />
      <UserTypes>
        <UserType onClick={() => selectUserType(true)}>
          <OnlineLearning fill={theme.colors.mainButtonBgColor} />
          <UserTypeLabel>Aluno</UserTypeLabel>
        </UserType>
        <UserType onClick={() => selectUserType(false)}>
          <Teaching fill={theme.colors.mainButtonBgColor} />
          <UserTypeLabel>Professor</UserTypeLabel>
        </UserType>
      </UserTypes>
    </SelectUserTypeBox>
  );
};

export default SelectUserType;
