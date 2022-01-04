import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContentInfo = styled.div`
  margin: 20px;
  display: flex;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const ContentVideoBox = styled.div`
  min-width: 60%;
  height: calc(100vh - 225px);

  @media (max-width: 1150px) {
    width: 100%;
    height: calc((100vw - 80px) / 1.75);
  }
`;
export const ContentVideo = styled.iframe`
  min-width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const RelatedContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 100%;
  height: calc(100vh - 225px);
  max-height: calc(100vh - 225px);

  @media (max-width: 1150px) {
    margin: 40px 0 0 0;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 15px;
  height: 100%;

  @media (max-width: 1150px) {
    min-height: 500px;
    max-height: 500px;
  }
`;
export const SchoolSubjectAndGradeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin: 5px;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 5px;
  margin: 5px 0;
`;
export const PracticeButton = styled(Link)`
  background: ${({ theme }) => theme.colors.textColor};
  border: none;
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  margin-top: 20px;
`;
export const PracticeButtonLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
  /* font-weight: bold; */
`;
export const ContentDescription = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const ContentDescriptionBox = styled.div`
  width: calc(60% - 20px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const ContentAttachmentsBox = styled.div`
  width: calc(40% - 60px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 15px;
  border-radius: 10px;
`;
export const DescriptionBox = styled.div`
  width: 100%;
  height: 0px;
  overflow: auto;
  transition: all 0.4s linear;
`;
export const DescriptionText = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: justify;
  margin: 5px;
`;
export const Attachments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 15px;
  border-radius: 10px;

  @media (max-width: 1150px) {
    margin: 0;
    margin-top: 20px;
  }
`;
export const AttachmentsBox = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  transition: all 0.4s linear;
`;
export const Doubts = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
`;
export const DoubtsBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 350px;
  overflow: auto;
  padding: 5px;
`;
