import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ContentPracticeButtonBox = styled(Link)`
  border: none;

  min-height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;
export const ContentPracticeButtonLabel = styled(paragraph)``;
