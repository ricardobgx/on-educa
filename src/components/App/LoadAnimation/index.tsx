import React from 'react';
import { LoadAnimationBox, LoadIcon } from './components';

const LoadAnimation = (): JSX.Element => (
  <LoadAnimationBox>
    <LoadIcon className="fas fa-book" />
    <LoadIcon className="fas fa-gamepad" />
    <LoadIcon className="fas fa-chalkboard-teacher" />
  </LoadAnimationBox>
);

export default LoadAnimation;
