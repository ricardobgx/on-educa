import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const UnityCardActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    margin-top: 10px;
  }
`;
export const EditUnityButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 900px) {
    margin: 0;
    width: calc(50% - 5px);
  }
`;
export const EditUnityButtonIcon = styled(smallIcon)``;
export const DeleteUnityButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.similarColors.warningColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  cursor: pointer;

  @media (max-width: 900px) {
    width: calc(50% - 5px);
  }
`;
export const DeleteUnityButtonIcon = styled(smallIcon)``;
