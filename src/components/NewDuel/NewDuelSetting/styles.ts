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
  border-radius: 20px;
  cursor: pointer;
  border: 10px solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`;
export const NewDuelSettingOption = styled.option``;
