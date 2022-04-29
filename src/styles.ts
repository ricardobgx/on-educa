import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Sen', sans-serif;
    font-size: ${({ theme }) => theme.fontsSize.computer};
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.textColor};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) =>
      theme.colors.backgroundColor} inset;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    background: ${({ theme }) => theme.colors.boxColor};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 10px;
  }

  /* Animations */

  @keyframes leftSlideFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes bottomSlideFadeIn {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes showLayer {
	50% {
		z-index: 1;
	}
	100% {
		z-index: 1;
	}
}

@keyframes hideLayer {
	0% {
		z-index: 1;
	}
	49.999% {
		z-index: 1;
	}
}

@keyframes showLogin {
	0% {
		background: #d7e7f1;
		transform: translate(40%, 10px);
	}
	50% {
		transform: translate(0, 0);
	}
	100% {
		background-color: #fff;
		transform: translate(35%, -20px);
	}
}

@keyframes hideLogin {
	0% {
		background-color: #fff;
		transform: translate(35%, -20px);
	}
	50% {
		transform: translate(0, 0);
	}
	100% {
		background: #d7e7f1;
		transform: translate(40%, 10px);
	}
}

@keyframes showSignup {
	0% {
		background: #d7e7f1;
		transform: translate(-40%, 10px) scaleY(.8);
	}
	50% {
		transform: translate(0, 0) scaleY(.8);
	}
	100% {
		background-color: #fff;
		transform: translate(-35%, -20px) scaleY(1);
	}
}

@keyframes hideSignup {
	0% {
		background-color: #fff;
		transform: translate(-35%, -20px) scaleY(1);
	}
	50% {
		transform: translate(0, 0) scaleY(.8);
	}
	100% {
		background: #d7e7f1;
		transform: translate(-40%, 10px) scaleY(.8);
	}
}

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }

  /* Global components design */

  .with-shadow {
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  }

  .flex-box-row {
    display: flex;
    flex-direction: row;
  }

  .flex-box-column {
    display: flex;
    flex-direction: column;
  }

  .bd-rd-5 {
    border-radius: 5px;
  }

  .bd-rd-10 {
    border-radius: 10px;
  }

  .bd-rd-20 {
    border-radius: 20px;
  }

  .bd-rd-30 {
    border-radius: 30px;
  }

  .block-shadow-button {
    border: none;
    transition: all 0.2s linear;

    & p,
    & i,
    & span {
      transform: translateY(-1px);
      transition: all 0.2s linear;
    }

    &:hover {
      p,
      i,
      span {
        transform: translateY(0px);
      }
    }

    &.main-action {
      background: ${({ theme }) => theme.colors.mainButtonBgColor};
      color: ${({ theme }) => theme.colors.mainButtonTextColor};

      box-shadow: 0px 2px 0px 3px
        ${({ theme }) => theme.colors.mainButtonShadowColor};
    
      :hover {
        box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.mainButtonShadowColor};
      }
    }

    &.secondary-action {
      color: ${({ theme }) => theme.colors.secondaryButtonTextColor};
      background: ${({ theme }) => theme.colors.secondaryButtonBgColor};
      
      box-shadow: 0px 2px 0px 3px
        ${({ theme }) => theme.colors.secondaryButtonShadowColor};
    
      :hover {
        box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.secondaryButtonShadowColor};
      }
    }

    &.danger-action {
      color: ${({ theme }) => theme.colors.boxColor};
      background: ${({ theme }) => theme.similarColors.warningColor};
      
      box-shadow: 0px 2px 0px 3px
        ${({ theme }) => theme.colors.boxShadowColor};
    
      :hover {
        box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.boxShadowColor};
      }
    }
  }
`;
