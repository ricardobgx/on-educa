import styled from 'styled-components';
import { paragraph } from '../../../components';
import { FlexColumnBox } from '../../../pages/NewContent/styles';

export const NewContentAttachmentsBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
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
  background: lightseagreen;
  min-height: calc(20vw - 50px);

  @media (max-width: 900px) {
    min-height: calc(40vw - 50px);
  }
`;
export const NewAttachmentButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  height: 40px;
  cursor: pointer;
`;
export const NewAttachmentButtonLabel = styled(paragraph)``;
