import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediumIcon } from '../../global/styles/components/iconComponents';

export const SignPageHeaderBox = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.textColor};
`;
export const SignPageHeaderBackButton = styled(Link)`
  position: absolute;
  left: 40px;

  color: ${({ theme }) => theme.colors.textColor};
`;
export const SignPageHeaderBackButtonIcon = styled(mediumIcon)``;
export const SignPageHeaderLabel = styled.h2`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 70vw;
    text-align: center;
    margin: 0 auto;
  }
`;
