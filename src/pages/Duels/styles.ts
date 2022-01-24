import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../global/styles/components/textComponents';
import { smallIcon } from '../../global/styles/components/iconComponents';
import { inputText } from '../../global/styles/components/inputComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const DuelsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const DuelsList = styled.div`
  margin-top: 20px;
  min-height: calc(100vh - 285px);
  max-height: calc(100vh - 285px);
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    min-height: calc(100vh - 405px);
    max-height: calc(100vh - 405px);
  }
  @media (min-width: 400px) and (max-width: 700px) {
    min-height: calc(100vh - 345px);
    max-height: calc(100vh - 345px);
  }
`;
export const DuelsListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  padding: 20px;
`;
