import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inputText, paragraph, smallIcon } from '../../components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const DuelsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
export const DuelsActions = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const DuelsActionsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 95;

  @media (max-width: 700px) {
    position: relative;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
export const NewDuelButton = styled(Link)`
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

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const NewDuelButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const NewDuelButtonIcon = styled(smallIcon)``;
export const SearchDuels = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const SearchDuelsInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 20px;
`;
export const SearchDuelsInput = styled(inputText)`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const ClearSearchDuelsInputButton = styled.button`
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
export const ClearSearchDuelsInputButtonIcon = styled(smallIcon)``;
export const SearchDuelsButton = styled.button`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
`;
export const SearchDuelsButtonIcon = styled(smallIcon)``;
export const DuelsFiltersButton = styled.button`
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

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const DuelsFiltersButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const DuelsFiltersButtonIcon = styled(smallIcon)``;
export const DuelsList = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  min-height: calc(100vh - 285px);
  max-height: calc(100vh - 285px);
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    min-height: calc(100vh - 405px);
    max-height: calc(100vh - 405px);
  }
  @media (min-width: 400px) and (max-width: 700px) {
    min-height: calc(100vh - 345px);
    max-height: calc(100vh - 345px);
  }
`;
export const DuelsListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  padding: 5px;
`;
