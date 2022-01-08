import styled from 'styled-components';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const SignBox = styled.div`
  width: 33%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SignTypeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SignTypeButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0.25rem 0;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontsSize.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;
