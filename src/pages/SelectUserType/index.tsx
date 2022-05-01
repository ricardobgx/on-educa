import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SignPageHeader from '../../components/SignPageHeader';
import { RootState } from '../../store';
import OnlineLearning from '../../svgs/OnlineLearning';
import Teaching from '../../svgs/Teaching';
import {
  SelectUserTypeBox,
  UserTypes,
  UserType,
  UserTypeLabel,
} from './styles';

const SelectUserType: React.FC = () => {
  const { theme } = useSelector((store: RootState) => store);

  const pageHistory = useHistory();

  return (
    <SelectUserTypeBox>
      <SignPageHeader title="Qual sua função?" canBack={false} backLink="/" />
      <UserTypes>
        <UserType onClick={() => pageHistory.push('/select-school-grade')}>
          <OnlineLearning fill={theme.colors.mainButtonBgColor} />
          <UserTypeLabel>Aluno</UserTypeLabel>
        </UserType>
        <UserType onClick={() => pageHistory.push('/select-teaching-type')}>
          <Teaching fill={theme.colors.mainButtonBgColor} />
          <UserTypeLabel>Professor</UserTypeLabel>
        </UserType>
      </UserTypes>
    </SelectUserTypeBox>
  );
};

export default SelectUserType;
