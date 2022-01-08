import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const ContentsActionsBox = styled.div`
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
export const NewContentButton = styled(Link)`
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
    margin-bottom: 10px;
  }
`;
export const NewContentButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const NewContentButtonIcon = styled(smallIcon)``;
export const SearchContents = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const SearchContentsInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 20px;
`;
export const SearchContentsInput = styled(inputText)`
  background: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const ClearSearchContentsInputButton = styled.button`
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
export const ClearSearchContentsInputButtonIcon = styled(smallIcon)``;
export const SearchContentsButton = styled.button`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
`;
export const SearchContentsButtonIcon = styled(smallIcon)``;
export const ContentsFiltersButton = styled.button`
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
export const ContentsFiltersButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const ContentsFiltersButtonIcon = styled(smallIcon)``;
