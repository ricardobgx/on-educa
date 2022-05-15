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
  opacity: 0;
  animation: 0.2s fadeIn linear forwards;
`;
export const UpdateProfilePictureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
`;
export const ProfilePicture = styled.div``;
export const ProfilePictureImg = styled.img`
  background: ${({ theme }) => theme.colors.boxShadowColor};

  width: 300px;
  min-width: 300px;
  min-height: 300px;
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
`;
export const CancelUpdatePictureButtonLabel = styled(paragraph)``;
export const UpdatePictureButton = styled(Button)`
  width: calc(50% - 10px);
`;
export const UpdatePictureButtonLabel = styled(paragraph)``;
