import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

/* Acoes no perfil */

// Atualizar perfil

export const ProfileActionsBox = styled.div``;

export const EditProfileButton = styled(Link)`
  padding: 0 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  min-height: 40px;
  max-height: 40px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  cursor: pointer;
`;
export const EditProfileButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
