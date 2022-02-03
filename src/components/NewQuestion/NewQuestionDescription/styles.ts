import styled from 'styled-components';
import { inputTextArea } from '../../../global/styles/components/inputComponents';
import { FlexColumnBox } from '../../../pages/NewContent/styles';

export const NewQuestionDescriptionBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  margin-right: 40px;
  height: 100%;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;
export const NewQuestionDescriptionInput = styled(inputTextArea)`
  min-width: calc(60vw - 80px);
  max-width: calc(60vw - 80px);
  min-height: calc(100% - 30px);
  max-height: 30vw;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.hoverColor};
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-align: justify;

  @media (max-width: 900px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 40vw;
    max-height: 40vw;
  }
`;
