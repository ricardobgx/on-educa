import React from 'react';
import { useHistory } from 'react-router-dom';
import SignPageHeader from '../../components/SignPageHeader';
import Exams from '../../svgs/Exams';
import OnlineLearning from '../../svgs/OnlineLearning';
import PrimarySchool from '../../svgs/PrimarySchool';
import Teaching from '../../svgs/Teaching';
import {
  SelectTeachingTypeBox,
  TeachingTypes,
  TeachingType,
  TeachingTypeLabel,
} from './styles';

const SelectTeachingType: React.FC = () => {
  const pageHistory = useHistory();

  return (
    <SelectTeachingTypeBox>
      <SignPageHeader
        title="Qual seu nível de ensino?"
        canBack={false}
        backLink="/"
      />
      <TeachingTypes>
        <TeachingType onClick={() => pageHistory.push('/sign')}>
          <PrimarySchool fill="#6C63FF" />
          <TeachingTypeLabel>Aluno</TeachingTypeLabel>
        </TeachingType>
        <TeachingType onClick={() => pageHistory.push('/sign')}>
          <Exams fill="#6C63FF" />
          <TeachingTypeLabel>Professor</TeachingTypeLabel>
        </TeachingType>
      </TeachingTypes>
    </SelectTeachingTypeBox>
  );
};

export default SelectTeachingType;
