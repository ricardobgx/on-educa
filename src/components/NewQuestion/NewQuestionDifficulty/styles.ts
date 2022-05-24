import styled from 'styled-components';
import { SectionBoxWithBackground } from '../../../global/styles/components/boxComponents';
import { inputSelect } from '../../../global/styles/components/inputComponents';

export const NewQuestionDifficultyBox = styled(SectionBoxWithBackground)`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const NewQuestionDifficultySelect = styled(inputSelect)`
  height: 40px;
  width: 100%;
  min-width: 300px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  border-right: 10px solid transparent;
  cursor: pointer;
`;
export const NewQuestionDifficultyOption = styled.option``;
