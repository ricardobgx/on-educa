import styled from 'styled-components';

export const DoubtsBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
`;
export const DoubtsList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 350px;
  overflow: auto;
  padding: 5px;
`;
