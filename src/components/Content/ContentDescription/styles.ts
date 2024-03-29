import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ContentDescriptionBox = styled.div`
  width: calc(60% - 20px);

  @media (max-width: 1150px) {
    width: calc(100% - 40px);
  }
`;
export const ContentDescriptionData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 10px;
`;
export const ContentDescriptionDataBox = styled.div`
  width: 100%;
  height: 0px;
  overflow: auto;
  transition: all 0.4s linear;
`;
export const ContentDescriptionDataText = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  text-align: justify;
  margin: 5px;
`;
