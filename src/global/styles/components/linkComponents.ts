import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  cursor: pointer;
  text-decoration: none;
`;
