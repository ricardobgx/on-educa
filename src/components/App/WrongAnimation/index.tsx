import React from 'react';
import {
  WrongAnimationBox,
  WrongAnimationBar,
  WrongAnimationBars,
} from './styles';

const WrongAnimation: React.FC = () => {
  return (
    <WrongAnimationBox>
      <WrongAnimationBars>
        <WrongAnimationBar className="left-bar" />
        <WrongAnimationBar className="right-bar" />
      </WrongAnimationBars>
    </WrongAnimationBox>
  );
};

export default WrongAnimation;
