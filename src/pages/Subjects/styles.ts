import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const SelectSubjectsDetails = styled.div`
  display: flex;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const SubjectsActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 0;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const CancelButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
  min-height: 40px;
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const CancelButtonLabel = styled(paragraph)``;
export const SelectUnityButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  min-height: 40px;
  border: none;
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const SelectUnityButtonLabel = styled(paragraph)``;
