import styled from 'styled-components';
import { SectionBox } from '../../global/styles/components/boxComponents';
import { Button } from '../../global/styles/components/buttonComponents';
import {
  inputSelect,
  inputText,
} from '../../global/styles/components/inputComponents';
import { paragraph } from '../../global/styles/components/textComponents';

export const UpdateProfileSectionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
export const UpdateProfileSection = styled(SectionBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 20px);
  padding: 20px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: calc(100vh - 285px);

  @media (max-width: 1150px) {
    width: 100%;
    min-height: unset;
  }
`;
export const UpdateProfileSectionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const UpdateProfileSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
export const UpdateProfileSectionBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
export const UpdateProfileInputText = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.textInputBgColor};
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border: none;
  height: 40px;
  padding: 0 10px;
`;
export const UpdateProfileSelect = styled(inputSelect)`
  border-right: 10px solid transparent;
  height: 40px;
  padding: 0 10px;
`;
export const UpdateProfileOption = styled.option``;
export const UpdateProfileSectionBoxActions = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const UpdateProfileButton = styled(Button)`
  width: 100%;
`;
export const UpdateProfileButtonLabel = styled(paragraph)``;
export const UpdateProfileSectionBoxUpdateTextActions = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;

  & input {
    width: 100%;
  }

  & button {
    max-width: 40px;
  }
`;
