import styled from 'styled-components';
import { inputSelect } from '../../../global/styles/components/inputComponents';

export const QuestionsPerContentSettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const QuestionsPerContentSettingSelect = styled(inputSelect)`
  margin-top: 20px;
  height: 40px;
  width: 160px;
  text-align: center;
  border: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.mainButtonTextColor};
  background: ${({ theme }) => theme.colors.mainButtonBgColor};
  cursor: pointer;
  border: 10px solid ${({ theme }) => theme.colors.mainButtonBgColor};
  border-top-width: 0;
  border-bottom-width: 0;
`;
export const QuestionsPerContentSettingOption = styled.option``;
