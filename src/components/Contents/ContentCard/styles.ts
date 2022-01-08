import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const ContentCardBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ContentCardDetails = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
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
  margin-bottom: 5px;
`;
export const SubjectLabel = styled(paragraph)``;
export const ContentSchoolGrade = styled(ContentCardDetailsBox)`
  align-items: center;

  @media (max-width: 900px) {
    margin: 15px 0;
    align-items: flex-start;
  }
`;
export const SchoolGradeLabel = styled(paragraph)`
  margin-bottom: 5px;
`;
export const TeachingTypeLabel = styled(paragraph)``;
export const ContentAdditionalDetails = styled(ContentCardDetailsBox)`
  align-items: flex-end;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const ContentAdditionalDetailsBox = styled.div`
  display: flex;
  align-items: center;
`;
export const UpdateDate = styled(ContentAdditionalDetailsBox)`
  margin-bottom: 5px;
`;
export const UpdateDateLabel = styled(paragraph)`
  margin-right: 5px;
`;
export const UpdateDateIcon = styled(smallIcon)`
  width: 20px;
  text-align: center;
`;
export const ContentsNumber = styled(ContentAdditionalDetailsBox)``;
export const ContentsNumberLabel = styled(paragraph)`
  margin-right: 5px;
`;
export const ContentsNumberIcon = styled(smallIcon)`
  width: 20px;
  text-align: center;
`;
