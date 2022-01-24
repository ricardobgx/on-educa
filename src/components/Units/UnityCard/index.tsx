import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IUnity } from '../../../interfaces/IUnity';
import { ActionCreators, State } from '../../../store';
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
  const { id, title, contents } = unity;

  const dispatch = useDispatch();

  const { loadUnity } = bindActionCreators(ActionCreators, dispatch);

  const { teachingType, schoolGrade, subject } = useSelector(
    (store: State) => store,
  );

  return (
    <UnityCardBox style={{ animationDelay: `${index * 0.2}s` }}>
      <UnityCardDetails to={`/units/${id}`} onClick={() => loadUnity(unity)}>
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
      </UnityCardDetails>
      <UnityCardActions
        unity={unity}
        setUnity={setUnity}
        setUpdateUnityIsVisible={setUpdateUnityIsVisible}
        setDeleteUnityIsVisible={setDeleteUnityIsVisible}
      />
    </UnityCardBox>
  );
};

export default UnityCard;
