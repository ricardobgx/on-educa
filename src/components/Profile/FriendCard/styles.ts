import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FriendCardBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const FriendPeople = styled(Link)`
  width: 100%;
`;
