import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
export const NewDuelBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 20px;
`;
export const NewDuelDetails = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const NewDuelActions = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const CancelNewDuelButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const CancelNewDuelButtonLabel = styled(paragraph)``;
export const CreateNewDuelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.boxColor};
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const CreateNewDuelButtonLabel = styled(paragraph)``;
