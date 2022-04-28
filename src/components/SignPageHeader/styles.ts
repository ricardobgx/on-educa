import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediumIcon } from '../../global/styles/components/iconComponents';

export const SignPageHeaderBox = styled.div`
  display: flex;
  align-items: center;

  color: #6c63ff;
`;
export const SignPageHeaderBackButton = styled(Link)`
  position: absolute;
  left: 40px;

  color: #6c63ff;
`;
export const SignPageHeaderBackButtonIcon = styled(mediumIcon)``;
export const SignPageHeaderLabel = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
`;
