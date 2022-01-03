import styled from 'styled-components';
import { inputTextArea } from '../../../components';
import { FlexColumnBox } from '../../../pages/NewContent/styles';

export const NewContentDescriptionBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-right: 40px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;
export const NewContentDescriptionInput = styled(inputTextArea)`
  min-width: calc(60vw - 80px);
  max-width: calc(60vw - 80px);
  min-height: 20vw;
  max-height: 20vw;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  border-radius: 5px;
  border: none;
  padding: 10px;

  @media (max-width: 900px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 40vw;
    max-height: 40vw;
  }
`;
