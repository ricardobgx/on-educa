import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const UpdateProfilePictureShadow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.boxShadowColor};
  z-index: 97;
`;
export const UpdateProfilePictureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 10px;
  padding: 20px;
`;
export const ProfilePicture = styled.div``;
export const ProfilePictureImg = styled.img`
  background: ${({ theme }) => theme.colors.boxShadowColor};
  width: 300px;
  border-radius: 10px;
`;
export const SelectImageInput = styled.input`
  display: none;
`;
export const SelectImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  min-height: 40px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;
export const SelectImageButtonLabel = styled(paragraph)`
  margin-right: 5px;
`;
export const UpdateProfilePictureActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CancelUpdatePictureButton = styled(Button)`
  width: calc(50% - 10px);
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;
export const CancelUpdatePictureButtonLabel = styled(paragraph)``;
export const UpdatePictureButton = styled(Button)`
  width: calc(50% - 10px);
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
`;
export const UpdatePictureButtonLabel = styled(paragraph)``;
