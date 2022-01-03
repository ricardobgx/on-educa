import styled from 'styled-components';
import { Button, paragraph, smallIcon } from '../../../components';

export const NewQuestionAlternativeCardBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  &:last-of-type {
    margin: 0;
  }
`;
export const NewQuestionAlternativeDetails = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
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
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
`;
export const DeleteAlternativeButtonIcon = styled(smallIcon)``;
export const RightAlternativeButton = styled(Button)`
  cursor: pointer;
  min-width: 40px;
  height: 100%;
  color: ${({ theme }) => theme.similarColors.rightQuestion};
  background: none;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme.similarColors.rightQuestion};
  transition: all 0.2s linear;
`;
export const RightAlternativeButtonIcon = styled(smallIcon)``;
