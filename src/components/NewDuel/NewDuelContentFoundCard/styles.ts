import styled from 'styled-components';

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
  min-width: 40px;
  min-height: 30px;
  border: none;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 700px) {
    margin: 0;
    margin-top: 10px;
  }
`;
