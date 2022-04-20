import styled from 'styled-components';

export const NewContentReferencesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vw;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 20px;

  @media (max-width: 900px) {
    height: 100%;
  }
`;
