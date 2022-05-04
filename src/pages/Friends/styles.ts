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
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 15px;
  margin: 20px;
`;
const FriendsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow: auto;
  height: calc(100vh - 250px);

  @media (max-width: 900px) {
    height: 450px;
  }
`;

/* Componentes */

export const PeoplesFound = styled(FriendsContainer)``;
export const PeoplesFoundBox = styled(FriendsBoxContainer)``;
export const PeoplesFoundList = styled(FriendsListContainer)`
  height: calc(100vh - 310px);

  @media (max-width: 900px) {
    height: 450px;
  }
`;
export const FriendRequests = styled(FriendsContainer)``;
export const FriendRequestsBox = styled(FriendsBoxContainer)``;
export const FriendRequestsList = styled(FriendsListContainer)``;
export const SearchPeoples = styled.div`
  margin: 20px;
  margin-bottom: 0;
  display: flex;

  & > div {
    width: 100%;
  }
`;
