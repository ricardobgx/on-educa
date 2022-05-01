import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const QuestionActionsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AnswerQuestionButton = styled.button`
  margin-bottom: 20px;
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  cursor: pointer;

  :disabled {
    box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.mainButtonShadowColor} !important;
    pointer-events: none;
    opacity: 0.6;

    p {
      transform: translateY(0px);
    }
  }
`;
export const AnswerQuestionButtonLabel = styled(paragraph)``;
export const SkipQuestionButton = styled.button`
  min-height: 40px;
  border: none;
  /* font-weight: bold; */
  cursor: pointer;
`;
export const SkipQuestionButtonLabel = styled(paragraph)``;
