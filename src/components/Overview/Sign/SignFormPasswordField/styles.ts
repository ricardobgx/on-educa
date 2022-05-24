import styled from 'styled-components';

export const ShowAndHidePasswordButton = styled.button`
  position: relative;
  margin-right: 15px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: none;

  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    background: currentColor;
    top: 0%;
    left: 0;
    width: 0%;
    height: 2px;
    transform: rotateZ(45deg) translate(0%);
    transition: all 0.2s linear;
  }

  &.password-hidden {
    ::before {
      top: 50%;

      transform: rotateZ(45deg) translate(-7%);

      width: 100%;
    }
  }
`;
