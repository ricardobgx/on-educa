import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const QuestionActionsBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const QuestionActionButton = styled(Button)`
  width: 100%;
`;
export const QuestionActionButtonLabel = styled(paragraph)``;
