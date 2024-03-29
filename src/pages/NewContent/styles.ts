import styled from 'styled-components';
import { paragraph } from '../../global/styles/components/textComponents';
import { inputText } from '../../global/styles/components/inputComponents';
import { LinkButton } from '../../global/styles/components/linkComponents';
import { Button } from '../../global/styles/components/buttonComponents';

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

export const NewContentBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
`;

/* Templates */

export const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailBoxInput = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
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
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

/* Content attachments */

export const NewContentAdditionalDetails = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

/* Content actions */

export const NewContentActions = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const CancelButton = styled(LinkButton)`
  width: calc(50% - 20px);

  @media (max-width: 900px) {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColors.primaryColor};

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
export const CancelButtonLabel = styled(paragraph)``;
export const CreateContentButton = styled(Button)`
  width: calc(50% - 20px);

  @media (max-width: 900px) {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const CreateContentButtonLabel = styled(paragraph)``;
