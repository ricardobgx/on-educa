import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const NewQuestionAlternativeCardBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  animation: 0.2s linear fadeIn;

  &:last-of-type {
    margin: 0;
  }
`;
export const NewQuestionAlternativeDetails = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 40px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
export const NewQuestionAlternativeDescription = styled(paragraph)``;
export const NewQuestionAlternativeActions = styled.div`
  display: flex;
`;
export const DeleteAlternativeButton = styled(Button)`
  cursor: pointer;
  min-width: 40px;
  height: 100%;
`;
export const DeleteAlternativeButtonIcon = styled(smallIcon)``;
export const RightAlternativeButton = styled(Button)`
  cursor: pointer;
  min-width: 40px;
  height: 100%;
  margin-right: 10px;
  transition: all 0.2s linear;
`;
export const RightAlternativeButtonIcon = styled(smallIcon)``;
