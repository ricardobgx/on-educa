import styled from 'styled-components';
import { Button, paragraph } from '../../../components';

export const ProfilePictureBox = styled.div`
  margin-top: 10px;
  display: flex;
`;
export const ProfilePicture = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  margin-right: 10px;
`;
export const ProfilePictureActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const UploadImageButton = styled(Button)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
`;
export const ProfilePictureActionLabel = styled(paragraph)``;
export const RemoveImageButton = styled(Button)`
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
`;
