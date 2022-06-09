import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';
import { FlexColumnBox } from '../../../pages/NewContent/styles';

export const NewQuestionAlternativesBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  width: 100%;
`;
export const NewQuestionAlternativesList = styled.div`
  margin-bottom: 10px;
`;
export const NewQuestionAlternativesListBox = styled(FlexColumnBox)`
  padding: 5px;
  overflow: auto;
  min-height: calc(20vw - 50px);
  max-height: calc(20vw - 50px);

  @media (max-width: 900px) {
    min-height: calc(40vw - 50px);
    max-height: calc(40vw - 50px);
  }
`;
export const NewAttachment = styled.div`
  display: flex;
`;
export const NewAttachmentInput = styled(inputText)`
  width: 100%;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  border: none;
  margin-right: 10px;
  padding: 0 10px;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    opacity: 0.5;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    opacity: 0.5;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    opacity: 0.5;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    opacity: 0.5;
  }
`;
export const NewAttachmentButton = styled(Button)`
  min-width: 40px;
  cursor: pointer;
`;
export const NewAttachmentButtonIcon = styled(smallIcon)``;
