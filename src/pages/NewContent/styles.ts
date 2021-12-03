import styled from 'styled-components';
import { inputText, paragraph } from '../../components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

/* General components */

export const RequiredField = styled(paragraph)`
  color: ${({ theme }) => theme.similarColors.warningColor};
`;

/* Templates */

const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
`;

const DetailBoxInput = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border-radius: 5px;
  border: none;
  height: 40px;
  padding: 10px;
`;

/* Page content box */

export const NewContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

/* Main details (name and reference of content, video) */

export const NewContentMainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    flex-wrap: wrap-reverse;
  }
`;

/* Name and reference of content */

export const NewContentNameAndReference = styled(FlexColumnBox)`
  width: calc(40vw - 60px);
`;

/* Content name */

export const NewContentName = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const NameLabel = styled(DetailBoxLabel)``;

export const NameInput = styled(DetailBoxInput)``;

/* Content reference */

export const NewContentReference = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vw;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
`;

export const NewContentReferenceBox = styled.div`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ReferenceLabel = styled(DetailBoxLabel)``;

export const NewContentReferenceSelect = styled.select`
  height: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  border-right: 10px solid transparent;
`;

export const NewContentReferenceSelectOption = styled.option``;

/* Content video */

export const NewContentVideo = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-right: 40px;
`;

export const VideoLabel = styled(DetailBoxLabel)``;

export const VideoInput = styled(DetailBoxInput)``;

export const NewContentVideoPreview = styled.iframe`
  background: #000000;
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border-radius: 10px;
  width: calc(60vw - 80px);
  height: 30vw;
  border: none;
  margin-top: 20px;
`;

/* Content attachments */

export const NewContentAdditionalDetails = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const NewContentDescription = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-right: 40px;
`;
export const NewContentDescriptionLabel = styled(DetailBoxLabel)``;
export const NewContentDescriptionInput = styled.textarea`
  min-width: calc(60vw - 80px);
  max-width: calc(60vw - 80px);
  min-height: 20vw;
  max-height: 20vw;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border-radius: 5px;
  border: none;
  padding: 10px;
`;
export const NewContentAttachments = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  width: calc(40vw - 80px);
`;
export const NewContentAttachmentsLabel = styled(DetailBoxLabel)``;
export const NewContentAttachmentsList = styled.div`
  margin-bottom: 10px;
`;
export const NewContentAttachmentsListBox = styled(FlexColumnBox)`
  padding: 5px;
  overflow: auto;
  background: lightseagreen;
  min-height: calc(20vw - 50px);
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
