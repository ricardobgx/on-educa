import styled from 'styled-components';
import { Button } from '../../../../global/styles/components/buttonComponents';
import { mediumIcon } from '../../../../global/styles/components/iconComponents';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const SelectSocialDetailBox = styled(Button)`
  background: none;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 96;

  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.textColor};
    width: 0%;
    height: 3px;
    position: absolute;
    bottom: 0;
    right: 0%;
    border-radius: 5px;
    transition: all 0.2s linear;
  }

  &.selected-detail::before {
    left: 0%;
    right: unset;
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 50px;
  }

  @media (min-width: 900px) {
    & span,
    & i {
      display: none;
    }
  }
`;
export const SelectSocialDetailLabel = styled(paragraph)`
  font-weight: bold;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const SelectSocialDetailIcon = styled(mediumIcon)``;
