import styled from 'styled-components';

export const FriendsListBox = styled.div`
  padding: 5px;
  padding-bottom: 20px;
  overflow: auto;
  height: 100%;
  max-height: 500px;

  @media (max-width: 900px) {
    height: 450px;
  }
`;
