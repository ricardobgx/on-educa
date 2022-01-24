import styled from 'styled-components';

export const ContentAttachmentsBox = styled.div`
  width: calc(40% - 60px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const ContentAttachmentsData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 1150px) {
    margin: 0;
    margin-top: 20px;
  }
`;
export const ContentAttachmentsDataBox = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  transition: all 0.4s linear;
`;
