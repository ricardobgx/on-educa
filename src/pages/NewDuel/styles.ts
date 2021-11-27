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
export const NewDuelContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  width: calc(50% - 20px);
  min-height: calc(100vh - 285px);

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const NewDuelContentsLabel = styled(paragraph)`
  font-weight: bold;
`;
export const SearchContents = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
`;
export const SearchContentsInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
`;
export const ContentsFound = styled.div``;
export const SelectedContents = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
`;
export const SelectedContentsBox = styled.div`
  min-height: 150px;
  max-height: 150px;
  overflow: auto;
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: 300px;
    max-height: 300px;
  }
`;
export const NewDuelSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  width: calc(50% - 20px);
  min-height: calc(100vh - 285px);

  @media (max-width: 1150px) {
    width: 100%;
    min-height: unset;
  }
`;
export const NewDuelSettingsLabel = styled(paragraph)`
  font-weight: bold;
`;
export const NewDuelSettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const NewDuelSettingsSelect = styled.select`
  margin-top: 20px;
  height: 40px;
  width: 160px;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  border: 10px solid ${({ theme }) => theme.colors.textColor};
  border-top-width: 0;
  border-bottom-width: 0;
`;
export const NewDuelSettingsOption = styled.option``;
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
