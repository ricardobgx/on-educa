import styled from 'styled-components';
import { smallIcon } from '../../../components';

export const NewDuelContentFoundCardBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AddContentButton = styled.button`
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  min-width: 40px;
  min-height: 30px;
  border: none;
  color: ${({ theme }) => theme.colors.boxColor};
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 700px) {
    margin: 0;
    margin-top: 10px;
  }
`;
export const AddContentButtonIcon = styled(smallIcon)``;
