import styled from 'styled-components';

export const SignBox = styled.div`
  width: 33%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SignTypeLabel = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
`;
export const SignTypeButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0.25rem 0;
  cursor: pointer;
`;
