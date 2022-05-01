import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, RootState } from '../../../store';
import UnityCardActions from '../UnityCardActions';
import {
  UnityCardBox,
  UnityCardDetails,
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

interface IUnityCardProps {
  index: number;
  unity: IUnity;
  setUnity: (value: IUnity) => void;
  setUpdateUnityIsVisible: (value: boolean) => void;
  setDeleteUnityIsVisible: (value: boolean) => void;
}

const UnityCard = (props: IUnityCardProps): JSX.Element => {
  const {
    index,
    unity,
    setUnity,
    setUpdateUnityIsVisible,
    setDeleteUnityIsVisible,
  } = props;
  const { id, name, contents } = unity;

  const dispatch = useDispatch();

  const { loadUnity } = bindActionCreators(ActionCreators, dispatch);

  const { aplication, teachingType, schoolGrade, subject } = useSelector(
    (store: RootState) => store,
  );
  const { isStudent } = aplication;

  return (
    <UnityCardBox style={{ animationDelay: `${index * 0.2}s` }}>
      <UnityCardDetails
        className="with-shadow bd-rd-20"
        to={`/units/${id}`}
        onClick={() => loadUnity(unity)}
      >
        <UnityDetails>
          <UnityTitle>{name}</UnityTitle>
          <SubjectLabel>Disciplina: {subject.name}</SubjectLabel>
        </UnityDetails>
        <UnitySchoolGrade>
          <SchoolGradeLabel>Série: {schoolGrade.index}º ano</SchoolGradeLabel>
          <TeachingTypeLabel>Nível: {teachingType.name}</TeachingTypeLabel>
        </UnitySchoolGrade>
        <UnityAdditionalDetails>
          <UpdateDate>
            <UpdateDateLabel>17/04/2022</UpdateDateLabel>
            <UpdateDateIcon className="fas fa-clock" />
          </UpdateDate>
          <ContentsNumber>
            <ContentsNumberLabel>
              {contents.length} conteúdo(s)
            </ContentsNumberLabel>
            <ContentsNumberIcon className="fas fa-book" />
          </ContentsNumber>
        </UnityAdditionalDetails>
      </UnityCardDetails>
      {!isStudent && (
        <UnityCardActions
          unity={unity}
          setUnity={setUnity}
          setUpdateUnityIsVisible={setUpdateUnityIsVisible}
          setDeleteUnityIsVisible={setDeleteUnityIsVisible}
        />
      )}
    </UnityCardBox>
  );
};

export default UnityCard;
