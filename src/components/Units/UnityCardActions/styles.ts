import styled from 'styled-components';

export const UnityCardActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    margin-top: 10px;
  }
`;
