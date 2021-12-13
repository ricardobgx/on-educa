import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IUnity } from '../../../interfaces/IUnity';
import { ActionCreators, State } from '../../../store';
import {
  UnityCardBox,
  UnityDetails,
  UnityTitle,
  SubjectLabel,
  UnitySchoolGrade,
  SchoolGradeLabel,
  TeachingTypeLabel,
  UnityAdditionalDetails,
  UpdateDate,
  UpdateDateLabel,
  UpdateDateIcon,
  ContentsNumber,
  ContentsNumberLabel,
  ContentsNumberIcon,
} from './styles';

const UnityCard = (props: IUnity): JSX.Element => {
  const { id, title, contents } = props;

  const dispatch = useDispatch();

  const { loadUnity } = bindActionCreators(ActionCreators, dispatch);

  const { teachingType, schoolGrade, subject } = useSelector(
    (store: State) => store,
  );

  return (
    <UnityCardBox to={`/units/${id}`} onClick={() => loadUnity(props)}>
      <UnityDetails>
        <UnityTitle>{title}</UnityTitle>
        <SubjectLabel>Disciplina: {subject.name}</SubjectLabel>
      </UnityDetails>
      <UnitySchoolGrade>
        <SchoolGradeLabel>Série: {schoolGrade.index}º ano</SchoolGradeLabel>
        <TeachingTypeLabel>Nível: {teachingType.title}</TeachingTypeLabel>
      </UnitySchoolGrade>
      <UnityAdditionalDetails>
        <UpdateDate>
          <UpdateDateLabel>28/11/2021</UpdateDateLabel>
          <UpdateDateIcon className="fas fa-clock" />
        </UpdateDate>
        <ContentsNumber>
          <ContentsNumberLabel>
            {contents.length} conteúdo(s)
          </ContentsNumberLabel>
          <ContentsNumberIcon className="fas fa-book" />
        </ContentsNumber>
      </UnityAdditionalDetails>
    </UnityCardBox>
  );
};

export default UnityCard;
