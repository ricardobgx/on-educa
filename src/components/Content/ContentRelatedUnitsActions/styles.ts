import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ContentRelatedUnitsActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 100%;
  height: calc(100vh - 220px);
  max-height: calc(100vh - 20px);

  @media (max-width: 1150px) {
    margin: 40px 0 0 0;
    height: calc(50vh + 55px);
    max-height: calc(50vh + 55px);
  }
`;
export const ContentsRelated = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  border-radius: 5px;
  height: 100%;

  @media (max-width: 1150px) {
    height: unset;
    min-height: 50vh;
    max-height: 50vh;
  }
`;
export const ContentsRelatedReferenceLabel = styled(paragraph)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-weight: bold;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
`;
