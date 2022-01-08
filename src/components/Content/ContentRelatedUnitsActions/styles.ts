import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ContentRelatedUnitsActionsBox = styled.div`
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
export const ContentsRelated = styled.div`
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
export const ContentsRelatedReferenceLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin: 5px;
`;
