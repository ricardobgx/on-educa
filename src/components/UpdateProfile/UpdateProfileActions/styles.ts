import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { Button } from '../../../global/styles/components/buttonComponents';

export const UpdateProfileActionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const UpdateProfileActionButton = styled(Button)`
  cursor: pointer;
  width: calc(50% - 20px);

  @media (max-width: 900px) {
    width: 100%;

    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;
export const CancelUpdateProfileButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  border: none;
  width: calc(50% - 20px);

  @media (max-width: 900px) {
    width: 100%;

    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;
export const CancelUpdateProfileButtonLabel = styled(paragraph)``;
export const ConfirmUpdateProfileButton = styled(UpdateProfileActionButton)`
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ConfirmUpdateProfileButtonLabel = styled(paragraph)``;
