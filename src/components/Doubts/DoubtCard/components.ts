import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const DoubtBox = styled(Link)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
export const DoubtInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DoubtInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const DoubtDescription = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const DoubtReference = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;
export const DoubtReferenceBox = styled.div`
  display: flex;
  margin-top: 5px;
`;
export const DoubtReferenceLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
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
  margin-left: 10px;
`;
