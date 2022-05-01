import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SignPageHeader from '../../components/SignPageHeader';
import { RootState } from '../../store';
import Exams from '../../svgs/Exams';
import PrimarySchool from '../../svgs/PrimarySchool';
import {
  SelectTeachingTypeBox,
  TeachingTypes,
  TeachingType,
  TeachingTypeLabel,
} from './styles';

const SelectTeachingType: React.FC = () => {
  const { theme } = useSelector((store: RootState) => store);

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
          <PrimarySchool fill={theme.colors.textColor} />
          <TeachingTypeLabel>Aluno</TeachingTypeLabel>
        </TeachingType>
        <TeachingType onClick={() => pageHistory.push('/sign')}>
          <Exams fill={theme.colors.textColor} />
          <TeachingTypeLabel>Professor</TeachingTypeLabel>
        </TeachingType>
      </TeachingTypes>
    </SelectTeachingTypeBox>
  );
};

export default SelectTeachingType;
