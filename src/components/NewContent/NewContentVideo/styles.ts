import styled from 'styled-components';
import {
  DetailBoxInput,
  FlexColumnBox,
} from '../../../pages/NewContent/styles';

export const NewContentVideoBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-right: 40px;

  @media (max-width: 900px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const VideoInput = styled(DetailBoxInput)``;

export const NewContentVideoPreview = styled.iframe`
  background: #000000;
  /* box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor}; */
  border-radius: 10px;
  width: calc(60vw - 80px);
  height: 30vw;
  border: none;
  margin-top: 20px;

  @media (max-width: 900px) {
    width: 100%;
    height: calc(40vw);
  }
`;
