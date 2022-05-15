import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, RootState } from '../../../store';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
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
  ContentsNumber,
  ContentsNumberLabel,
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
    <UnityCardBox
      className="supplies-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <UnityCardDetails
        className="block-shadow-button secondary-action bd-rd-10"
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
            <SmallMaterialIconOutlined color="" icon="update" />
          </UpdateDate>
          <ContentsNumber>
            <ContentsNumberLabel>
              {contents.length} conteúdo(s)
            </ContentsNumberLabel>
            <SmallMaterialIconOutlined color="" icon="description" />
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
