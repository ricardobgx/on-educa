import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../global/styles/components/textComponents';

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
  gap: 40px;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const SubjectsActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  margin: 20px;

  @media (max-width: 900px) {
    gap: 20px;
    flex-direction: column;
  }
`;
export const CancelButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 40px;
`;
export const CancelButtonLabel = styled(paragraph)``;
export const SelectUnityButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 40px;

  border: none;

  cursor: pointer;
`;
export const SelectUnityButtonLabel = styled(paragraph)``;
