import styled from 'styled-components';

export const NewDuelSearchContentsBox = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  position: relative;
  display: flex;
`;
export const NewDuelSearchContentsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  z-index: 96;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const ContentsFound = styled.div`
  padding: 15px;
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputTextBgColor};
  box-shadow: 0px 1px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 0 0 10px 10px;
  animation: fadeIn 0.2s linear;
`;
export const ContentsFoundList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 150px;
  padding: 5px;
  overflow: auto;
`;

export const SearchContentsButton = styled.button`
  padding: 5px;
  background: none;
  color: ${({ theme }) => theme.colors.textColor};
  border: none;
  cursor: pointer;
`;
