import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  justify-content: space-between;
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
export const ContentInfo = styled.div`
  margin: 20px;
`;
export const ContentVideo = styled.iframe`
  width: 60%;
  height: calc((100vw - 80px) * 0.6 / 1.75);
  border-radius: 10px;

  @media (max-width: 1150px) {
    width: 100%;
    height: calc((100vw - 80px) / 1.75);
  }
`;
