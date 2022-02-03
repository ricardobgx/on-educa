import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { Button } from '../../../global/styles/components/buttonComponents';

/* Question actions */

export const NewQuestionActionsBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const CancelCreateButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  height: 40px;
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
export const CancelCreateButtonLabel = styled(paragraph)``;
export const CreateQuestionButton = styled(Button)`
  width: calc(50% - 20px);

  @media (max-width: 900px) {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const CreateQuestionButtonLabel = styled(paragraph)``;
