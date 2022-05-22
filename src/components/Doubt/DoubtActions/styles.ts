import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DoubtActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  position: absolute;
  right: 0%;
  top: 0%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  overflow: hidden;
  animation: fadeIn 0.2s linear;

  & button {
    display: flex;
    align-items: center;
    padding: 0 10px;
    background: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textColors.primaryColor};
    border-radius: 0;

    &:hover {
      background: ${({ theme }) => theme.colors.hoverColor};
    }
  }

  & i {
    margin-right: 10px;
    width: 15px;
  }
`;
export const UpdateDoubtStatusButton = styled(Button)``;
export const UpdateDoubtStatusButtonIcon = styled(smallIcon)``;
export const UpdateDoubtStatusButtonLabel = styled(paragraph)``;
export const DeleteDoubtButton = styled(Button)``;
export const DeleteDoubtButtonIcon = styled(smallIcon)``;
export const DeleteDoubtButtonLabel = styled(paragraph)``;
