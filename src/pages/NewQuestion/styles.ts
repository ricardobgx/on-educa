import styled from 'styled-components';
import { paragraph } from '../../global/styles/components/textComponents';
import { inputText } from '../../global/styles/components/inputComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const NewQuestionBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
`;

/* Templates */

export const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailBoxInput = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border-radius: 5px;
  border: none;
  height: 40px;
  padding: 10px;
`;

/* Page Question box */

export const NewQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

/* Main details (name and reference of Question, video) */

export const NewQuestionMainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  height: 540px;

  @media (max-width: 900px) {
    flex-wrap: wrap-reverse;
    height: unset;
  }
`;

export const NewQuestionReferencesAndDifficulty = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

/* Name and reference of Question */

export const NewQuestionNameAndReference = styled(FlexColumnBox)`
  width: calc(40vw - 60px);
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

/* Question attachments */

export const NewQuestionAdditionalDetails = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
