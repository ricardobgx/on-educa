import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const NewInterativeRoomActionsBox = styled.div`
  display: flex;
  gap: 40px;

  margin: 20px;
`;
export const NewInterativeRoomActionsButton = styled(Button)`
  width: 100%;
`;
export const CancelCreateInterativeRoomButton = styled(
  NewInterativeRoomActionsButton,
)``;
export const CancelCreateInterativeRoomButtonLabel = styled(paragraph)``;
export const CreateInterativeRoomButton = styled(
  NewInterativeRoomActionsButton,
)``;
export const CreateInterativeRoomButtonLabel = styled(paragraph)``;
