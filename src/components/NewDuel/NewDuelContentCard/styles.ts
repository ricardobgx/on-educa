import styled from 'styled-components';
import { SectionBox } from '../../../global/styles/components/boxComponents';

export const NewDuelContentCardBox = styled(SectionBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
