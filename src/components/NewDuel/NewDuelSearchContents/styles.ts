import styled from 'styled-components';
import { inputText, smallIcon } from '../../../components';

export const NewDuelSearchContentsBox = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  position: relative;
  display: flex;
`;
export const SearchContentsBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  position: relative;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  transition: all 0.2s linear;
`;
export const SearchContentsInput = styled(inputText)`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;
export const ClearContentsButton = styled.button`
  background: ${({ theme }) => theme.colors.textColor};
  border: none;
  color: ${({ theme }) => theme.colors.boxColor};
  height: 23px;
  min-width: 23px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5px;
`;
export const ClearContentsButtonIcon = styled(smallIcon)``;
export const SearchContentsButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  height: 40px;
  min-width: 40px;
  cursor: pointer;
`;
export const SearchContentsButtonIcon = styled(smallIcon)``;
export const ContentsFound = styled.div`
  padding: 15px;
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 2px 3px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 0 0 5px 5px;
  animation: fadeIn 0.1s linear;
`;
export const ContentsFoundList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 150px;
  padding: 5px;
  overflow: auto;
`;
