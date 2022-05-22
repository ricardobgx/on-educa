import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const UnityCardBox = styled.div``;

export const UnityCardDetails = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  width: 100%;

  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const UnityCardDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;

  width: 33%;
  height: 100%;

  @media (max-width: 900px) {
    width: unset;
  }
`;
export const UnityDetails = styled(UnityCardDetailsBox)`
  align-items: flex-start;
`;
export const UnityTitle = styled(paragraph)`
  font-weight: bold;
`;
export const SubjectLabel = styled(paragraph)`
  @media (max-width: 900px) {
    display: none;
  }
`;
export const UnitySchoolGrade = styled(UnityCardDetailsBox)`
  align-items: center;

  @media (max-width: 900px) {
    display: none;

    /* margin: 15px 0;
    align-items: flex-start; */
  }
`;
export const SchoolGradeLabel = styled(paragraph)``;
export const TeachingTypeLabel = styled(paragraph)``;
export const UnityAdditionalDetails = styled(UnityCardDetailsBox)`
  align-items: flex-end;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const UnityAdditionalDetailsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const UpdateDate = styled(UnityAdditionalDetailsBox)``;
export const UpdateDateLabel = styled(paragraph)``;
export const ContentsNumber = styled(UnityAdditionalDetailsBox)``;
export const ContentsNumberLabel = styled(paragraph)``;
