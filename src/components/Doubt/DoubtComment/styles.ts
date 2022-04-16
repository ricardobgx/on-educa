import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DoubtCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.textColor};

  &:last-of-type {
    margin-bottom: 0px;
  }
`;
export const DoubtCommentContent = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const DoubtCommentHeader = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;
export const DoubtCommentOwner = styled.div`
  display: flex;
  align-items: center;
`;
export const OwnerPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const OwnerName = styled(paragraph)`
  font-weight: bold;
  height: 25px;
  margin-right: 40px;
`;
export const DoubtCommentDate = styled(paragraph)`
  color: ;
`;
