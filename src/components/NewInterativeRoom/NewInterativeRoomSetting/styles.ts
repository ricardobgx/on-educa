import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const NewInterativeRoomSettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  min-height: calc(100vh - 300px);
  max-height: calc(100vh - 300px);
  padding: 20px;
  width: 100%;

  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const NewInterativeRoomSettingLabel = styled(paragraph)`
  font-weight: bold;
`;
export const NewInterativeRoomSettingOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
export const NewInterativeRoomSettingOption = styled(Button)`
  /* width: 100%; */
  height: calc((100vh - 435px) / 4);
`;
export const NewInterativeRoomSettingOptionLabel = styled(paragraph)``;
