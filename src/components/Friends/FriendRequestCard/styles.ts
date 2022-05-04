import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FriendRequestCardBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FriendRequestCardPeople = styled(Link)`
  display: flex;

  width: 100%;
`;
