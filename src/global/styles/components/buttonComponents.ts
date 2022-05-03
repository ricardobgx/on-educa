import styled from 'styled-components';

// Buttons

export const Button = styled.button`
  min-height: 40px;
  border: none;
  cursor: pointer;
`;

export const BlockShadowButton = styled.button`
  border: none;

  & p {
    transform: translateY(-2px);
  }

  :hover p {
    transform: translateY(0px);
  }
`;
