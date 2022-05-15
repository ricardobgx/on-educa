import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const TeamsResultsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DuelActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const BackToDuelButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  border: none;
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
    margin-bottom: 20px;
  }
`;
export const BackToDuelButtonLabel = styled(paragraph)``;

export const QuitDuelButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const QuitDuelButtonLabel = styled(paragraph)``;
export const DeleteDuelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  border: none;
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const DeleteDuelButtonLabel = styled(paragraph)``;
