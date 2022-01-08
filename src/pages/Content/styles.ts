import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContentVideoAndRelatedContents = styled.div`
  margin: 20px;
  display: flex;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const ContentDescriptionAndAttachments = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
