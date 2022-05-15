import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ContentCardBox = styled.div``;
export const ContentCardDetails = styled(Link)`
  display: flex;
  justify-content: space-between;

  gap: 10px;

  padding: 20px;
  margin-bottom: 20px;
  width: 100%;

  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const ContentCardDetailsBox = styled.div`
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
export const ContentDetails = styled(ContentCardDetailsBox)`
  align-items: flex-start;
`;
export const ContentTitle = styled(paragraph)`
  font-weight: bold;
`;
export const SubjectLabel = styled(paragraph)`
  @media (max-width: 900px) {
    display: none;
  }
`;
export const ContentSchoolGrade = styled(ContentCardDetailsBox)`
  align-items: center;

  @media (max-width: 900px) {
    display: none;

    /* margin: 15px 0;
    align-items: flex-start; */
  }
`;
export const SchoolGradeLabel = styled(paragraph)``;
export const TeachingTypeLabel = styled(paragraph)``;
export const ContentAdditionalDetails = styled(ContentCardDetailsBox)`
  align-items: flex-end;
  gap: 5px;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;
const ContentAdditionalDetailsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const UpdateDate = styled(ContentAdditionalDetailsBox)``;
export const UpdateDateLabel = styled(paragraph)``;
export const ContentsNumber = styled(ContentAdditionalDetailsBox)``;
export const ContentsNumberLabel = styled(paragraph)``;
