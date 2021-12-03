import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inputText, paragraph, smallIcon } from '../../../components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const UnitsActionsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 95;

  @media (max-width: 700px) {
    position: relative;
    flex-wrap: wrap;
  }
`;
export const NewUnityButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;

  @media (min-width: 400px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const NewUnityButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const NewUnityButtonIcon = styled(smallIcon)``;
export const SearchUnits = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const SearchUnitsInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 20px;
`;
export const SearchUnitsInput = styled(inputText)`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const ClearSearchUnitsInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ClearSearchUnitsInputButtonIcon = styled(smallIcon)``;
export const SearchUnitsButton = styled.button`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
`;
export const SearchUnitsButtonIcon = styled(smallIcon)``;
export const UnitsFiltersButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;

  @media (min-width: 400px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const UnitsFiltersButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const UnitsFiltersButtonIcon = styled(smallIcon)``;
