import styled from 'styled-components';
import { inputSelect } from '../../../global/styles/components/inputComponents';

export const NewDuelSettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const NewDuelSettingSelect = styled(inputSelect)`
  margin-top: 20px;
  height: 40px;
  width: 160px;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  border: 10px solid ${({ theme }) => theme.colors.textColor};
  border-top-width: 0;
  border-bottom-width: 0;
`;
export const NewDuelSettingOption = styled.option``;
