import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { Button } from '../../../global/styles/components/buttonComponents';

export const QuestionCardActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    margin-top: 10px;
  }
`;
export const EditQuestionButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  margin-bottom: 10px;

  @media (max-width: 900px) {
    margin: 0;
    width: calc(50% - 5px);
  }
`;
export const EditQuestionButtonIcon = styled(smallIcon)``;
export const DeleteQuestionButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.similarColors.warningColor};
  color: ${({ theme }) => theme.colors.whiteColor};

  @media (max-width: 900px) {
    width: calc(50% - 5px);
  }
`;
export const DeleteQuestionButtonIcon = styled(smallIcon)``;
