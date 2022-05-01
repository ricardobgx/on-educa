import React from 'react';
import {
  CorrectAnimationBox,
  CorrectAnimationBar,
  CorrectAnimationBars,
} from './styles';

const CorrectAnimation: React.FC = () => {
  return (
    <CorrectAnimationBox>
      <CorrectAnimationBars>
        <CorrectAnimationBar className="left-bar" />
        <CorrectAnimationBar className="right-bar" />
      </CorrectAnimationBars>
    </CorrectAnimationBox>
  );
};

export default CorrectAnimation;
