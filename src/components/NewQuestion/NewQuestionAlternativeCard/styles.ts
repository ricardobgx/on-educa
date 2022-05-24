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
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
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
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.flagColors.redColor};
`;
export const DeleteAlternativeButtonIcon = styled(smallIcon)``;
export const RightAlternativeButton = styled(Button)`
  cursor: pointer;
  min-width: 40px;
  height: 100%;
  color: ${({ theme }) => theme.flagColors.greenColor};
  background: none;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme.flagColors.greenColor};
  transition: all 0.2s linear;
`;
export const RightAlternativeButtonIcon = styled(smallIcon)``;
