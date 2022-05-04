import styled from 'styled-components';
import { SectionBox } from '../../global/styles/components/boxComponents';
import {
  inputSelect,
  inputText,
} from '../../global/styles/components/inputComponents';
import { paragraph } from '../../global/styles/components/textComponents';

export const UpdateProfileSectionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
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
  margin-top: 20px;
`;
export const UpdateProfileSectionBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const UpdateProfileInputText = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.inputTextBgColor};
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border: none;
  height: 40px;
  padding: 0 10px;
  margin-top: 10px;
`;
export const UpdateProfileSelect = styled(inputSelect)`
  color: ${({ theme }) => theme.colors.mainButtonTextColor};
  background: ${({ theme }) => theme.colors.mainButtonBgColor};
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border-right: 10px solid transparent;
  height: 40px;
  padding: 0 10px;
  margin-top: 10px;
`;
export const UpdateProfileOption = styled.option``;
