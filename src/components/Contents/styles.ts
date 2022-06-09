import styled from 'styled-components';
import { inputText } from '../../global/styles/components/inputComponents';
import { paragraph } from '../../global/styles/components/textComponents';

export const ContentPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 40vw;

  color: ${({ theme }) => theme.colors.textColors.secondaryColor};

  @media (max-width: 900px) and (min-width: 600px) {
    width: 60vw;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const ContentPopupInput = styled(inputText)`
  border: none;

  height: 40px;
  width: 100%;
  padding: 0 10px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.textInputBgColor};
`;
export const ContentPopupLabel = styled(paragraph)`
  text-align: center;
`;
export const ContentPopupActions = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ContentPopupButton = styled.button`
  border: none;
  height: 40px;
  width: 100%;
  cursor: pointer;
`;
export const ContentPopupButtonLabel = styled(paragraph)``;
