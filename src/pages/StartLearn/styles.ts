import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../components';

export const PageBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const StartLearnBox = styled.div`
  width: 100%;
  min-height: calc(100vh - 230px);
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    min-height: unset;
    max-height: unset;
  }
`;
export const LearnSettings = styled.div`
  display: flex;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const LearnSettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  width: 100%;
  margin: 20px;
  padding: 20px;
  min-height: calc(100vh - 310px);
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 1150px) {
    min-height: unset;
  }
`;
export const LearnSettingsBoxLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin-bottom: 20px;
`;
export const LearnOptionBox = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LearnOptionBoxLabel = styled(paragraph)`
  display: flex;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const LearnOptionBoxRequiredFieldLabel = styled(paragraph)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.similarColors.warningColor};
  font-weight: bold;
`;
export const LearnOptionSelect = styled.select`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  padding: 0 10px;
  width: 300px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-right: 10px solid ${({ theme }) => theme.colors.textColor};

  @media (max-width: 1150px) {
    width: 100%;
    height: 40px;
  }
`;
export const LearnOptionSelectOption = styled.option``;
export const StartLearnButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.textColor};
  margin: 20px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
`;
export const StartLearnButtonLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
  /* font-weight: bold; */
`;
