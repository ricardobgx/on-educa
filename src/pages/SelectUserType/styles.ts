import styled from 'styled-components';

export const SelectUserTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
  padding-top: 12vh;
`;
export const UserTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
`;
export const UserType = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min-content;

  background: none;
  border: none;

  cursor: pointer;

  opacity: 0.7;

  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }

  & svg {
    height: 260px;
    margin-bottom: 20px;
  }

  :nth-child(1) svg {
    width: 360px;
  }

  :nth-child(2) svg {
    width: 352px;
  }

  @media (max-width: 1050px) {
    margin-top: 15vh;
  }
`;
export const UserTypeImage = styled.img``;
export const UserTypeLabel = styled.p`
  color: #6c63ff;

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
