import styled from 'styled-components';
import { paragraph } from '../../components';

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
  }
`;
export const NewDuelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;

  @media (max-width: 700px) {
    width: 160px;
  }
`;
export const NewDuelButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const NewDuelButtonIcon = styled.i`
  font-size: 1rem;
`;
export const SearchDuels = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 20px;
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
export const SearchDuelsInput = styled.input`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const ClearSearchDuelsInputButton = styled.button`
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const ClearSearchDuelsInputButtonIcon = styled.i`
  font-size: 1rem;
`;
export const SearchDuelsButton = styled.button`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
`;
export const SearchDuelsButtonIcon = styled.i`
  font-size: 1rem;
`;
export const DuelsFiltersButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;

  @media (max-width: 700px) {
    width: 160px;
  }
`;
export const DuelsFiltersButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const DuelsFiltersButtonIcon = styled.i`
  font-size: 1rem;
`;
export const DuelsList = styled.div``;
