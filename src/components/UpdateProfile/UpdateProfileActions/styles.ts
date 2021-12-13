import styled from 'styled-components';
import { Button, paragraph } from '../../../components';

export const UpdateProfileActionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const UpdateProfileActionButton = styled(Button)`
  width: calc(50% - 20px);

  @media (max-width: 900px) {
    width: 100%;

    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;
export const CancelUpdateProfileButton = styled(UpdateProfileActionButton)`
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const CancelUpdateProfileButtonLabel = styled(paragraph)``;
export const ConfirmUpdateProfileButton = styled(UpdateProfileActionButton)`
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ConfirmUpdateProfileButtonLabel = styled(paragraph)``;
