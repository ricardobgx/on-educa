import styled from 'styled-components';

// Buttons

export const Button = styled.button`
  min-height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
  cursor: pointer;
`;