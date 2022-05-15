import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const QuestionCardBox = styled.div``;
export const QuestionCardDetails = styled(Link)`
  display: flex;
  justify-content: space-between;
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
const QuestionCardDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  height: 100%;

  @media (max-width: 900px) {
    width: unset;
  }
`;
export const QuestionDetails = styled(QuestionCardDetailsBox)`
  align-items: flex-start;
`;
export const QuestionTitle = styled(paragraph)`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const ContentLabel = styled(paragraph)``;
export const QuestionUnity = styled(QuestionCardDetailsBox)`
  align-items: center;

  @media (max-width: 900px) {
    margin: 15px 0;
    align-items: flex-start;
  }
`;
export const SubjectLabel = styled(paragraph)`
  margin-bottom: 5px;
`;
export const UnityLabel = styled(paragraph)``;
export const QuestionAdditionalDetails = styled(QuestionCardDetailsBox)`
  align-items: flex-end;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const QuestionAdditionalDetailsBox = styled.div`
  display: flex;
  align-items: center;
`;
export const UpdateDate = styled(QuestionAdditionalDetailsBox)`
  margin-bottom: 5px;
`;
export const UpdateDateLabel = styled(paragraph)`
  margin-right: 5px;
`;
export const UpdateDateIcon = styled(smallIcon)`
  width: 20px;
  text-align: center;
`;
export const QuestionsNumber = styled(QuestionAdditionalDetailsBox)``;
export const QuestionsNumberLabel = styled(paragraph)`
  margin-right: 5px;
`;
export const QuestionsNumberIcon = styled(smallIcon)`
  width: 20px;
  text-align: center;
`;
