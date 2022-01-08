import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const QuestionsActionsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 95;

  @media (max-width: 700px) {
    position: relative;
    flex-wrap: wrap;
  }
`;
export const NewQuestionButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const NewQuestionButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const NewQuestionButtonIcon = styled(smallIcon)``;
export const SearchQuestions = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const SearchQuestionsInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 20px;
`;
export const SearchQuestionsInput = styled(inputText)`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const ClearSearchQuestionsInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ClearSearchQuestionsInputButtonIcon = styled(smallIcon)``;
export const SearchQuestionsButton = styled.button`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
`;
export const SearchQuestionsButtonIcon = styled(smallIcon)``;
export const QuestionsFiltersButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  cursor: pointer;

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const QuestionsFiltersButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const QuestionsFiltersButtonIcon = styled(smallIcon)``;
