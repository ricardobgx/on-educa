import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const DarkLogo: React.FC = () => {
  const { theme } = useSelector((store: RootState) => store);

  return (
    <svg
      width="2500"
      height="2500"
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="1250"
        cy="1250"
        r="1250"
        fill={theme.colors.mainButtonBgColor}
      />
      <rect
        x="842"
        y="638"
        width="816"
        height="268"
        rx="100"
        fill="url(#paint0_linear_930_9)"
      />
      <rect
        x="842"
        y="1594"
        width="816"
        height="268"
        rx="100"
        fill="url(#paint1_linear_930_9)"
      />
      <rect
        x="842"
        y="1116"
        width="571"
        height="268"
        rx="100"
        fill="url(#paint2_linear_930_9)"
      />
      <rect
        x="842"
        y="1862"
        width="1224"
        height="268"
        rx="100"
        transform="rotate(-90 842 1862)"
        fill="url(#paint3_linear_930_9)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_930_9"
          x1="1250"
          y1="638"
          x2="1250"
          y2="906"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.76" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_930_9"
          x1="1250"
          y1="1594"
          x2="1250"
          y2="1862"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.76" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_930_9"
          x1="1127.5"
          y1="1116"
          x2="1127.5"
          y2="1384"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.76" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_930_9"
          x1="2066"
          y1="1876.3"
          x2="886.361"
          y2="2103.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.83" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DarkLogo;
