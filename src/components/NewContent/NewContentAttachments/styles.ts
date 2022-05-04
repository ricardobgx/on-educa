import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';
import { FlexColumnBox } from '../../../pages/NewContent/styles';

export const NewContentAttachmentsBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  width: calc(40vw - 80px);

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }
`;
export const NewContentAttachmentsList = styled.div`
  margin-bottom: 10px;
`;
export const NewContentAttachmentsListBox = styled(FlexColumnBox)`
  padding: 5px;
  overflow: auto;
  background: none;
  min-height: calc(20vw - 50px);

  @media (max-width: 900px) {
    min-height: calc(40vw - 50px);
  }
`;
export const NewAttachmentButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
`;
export const NewAttachmentButtonLabel = styled(paragraph)``;
