import React from 'react';
import { useHistory } from 'react-router-dom';
import SignPageHeader from '../../components/SignPageHeader';
import OnlineLearning from '../../svgs/OnlineLearning';
import Teaching from '../../svgs/Teaching';
import {
  SelectUserTypeBox,
  UserTypes,
  UserType,
  UserTypeLabel,
} from './styles';

const SelectUserType: React.FC = () => {
  const pageHistory = useHistory();

  return (
    <SelectUserTypeBox>
      <SignPageHeader title="Qual sua função?" canBack={false} backLink="/" />
      <UserTypes>
        <UserType onClick={() => pageHistory.push('/select-school-grade')}>
          <OnlineLearning fill="#6C63FF" />
          <UserTypeLabel>Aluno</UserTypeLabel>
        </UserType>
        <UserType onClick={() => pageHistory.push('/select-teaching-type')}>
          <Teaching fill="#6C63FF" />
          <UserTypeLabel>Professor</UserTypeLabel>
        </UserType>
      </UserTypes>
    </SelectUserTypeBox>
  );
};

export default SelectUserType;
