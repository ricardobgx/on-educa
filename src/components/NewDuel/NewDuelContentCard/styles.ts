import styled from 'styled-components';
import { SectionBox } from '../../../global/styles/components/boxComponents';

export const NewDuelContentCardBox = styled(SectionBox)`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 15px 20px;
  margin-bottom: 20px;

  background: ${({ theme }) => theme.colors.boxColor};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
