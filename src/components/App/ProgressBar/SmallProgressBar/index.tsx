import React from 'react';
import { ProgressBarBox, ProgressBarInnerBar } from '../styles';

const SmallProgressBar = (props: IProgressBarProps): JSX.Element => {
  const { now, max } = props;

  return (
    <ProgressBarBox className="small-bar">
      <ProgressBarInnerBar
        style={{
          width: `${(now / max) * 100}%`,
        }}
      />
    </ProgressBarBox>
  );
};

export default SmallProgressBar;
