import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;
`;

/* Conteiner geral */

export const FriendsBox = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* Templates */

const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
const FriendsBoxContainer = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 15px;
  margin: 20px;
`;
const FriendsListContainer = styled.div`
  padding: 5px;
  overflow: auto;
  height: calc(100vh - 250px);

  @media (max-width: 900px) {
    height: 450px;
  }
`;

/* Componentes */

export const MyFriends = styled(FriendsContainer)``;
export const MyFriendsBox = styled(FriendsBoxContainer)``;
export const MyFriendsList = styled(FriendsListContainer)``;
export const FriendRequests = styled(FriendsContainer)``;
export const FriendRequestsBox = styled(FriendsBoxContainer)``;
export const FriendRequestsList = styled(FriendsListContainer)``;
