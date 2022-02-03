import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DoubtBox = styled(Link)`
  background: ${({ theme }) => theme.colors.boxColor};
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};

  &:last-of-type {
    margin: 0;
  }
`;
export const DoubtInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const DoubtStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
export const DoubtStatusBox = styled.div`
  display: flex;
  align-items: center;
`;
export const DoubtStatusLabel = styled(paragraph)`
  font-weight: bold;
  margin-left: 10px;
  display: none;

  @media (max-width: 600px) {
    display: unset;
  }
`;
export const DoubtComments = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const DoubtCommentsNumber = styled(paragraph)`
  font-weight: bold;
  display: flex;
`;
export const DoubtCommentsIcon = styled.i`
  font-size: 25px;
  margin-left: 10px;
`;
export const DoubtInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DoubtDescription = styled(paragraph)`
  font-weight: bold;
`;
export const DoubtReference = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;
export const DoubtReferenceBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
export const DoubtReferenceLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 10px;
`;
export const DoubtReferenceIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DoubtContent = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const DoubtStatusIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 25px;
`;
