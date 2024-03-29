import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Sen', sans-serif;
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.computer};
    transition: background .2s linear, color .2s linear;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.textColors.primaryColor};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) =>
      theme.colors.textInputBgColor} inset;
      border-radius: 20px;
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
    background: ${({ theme }) => theme.colors.hoverColor};
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

  @keyframes leftSlide {
    0% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes rightSlide {
    0% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(0%);
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
		background: ${({ theme }) => theme.colors.boxColor};
		transform: translate(40%, 10px);
	}
	50% {
		transform: translate(0, 0);
	}
	100% {
		background-color: ${({ theme }) => theme.colors.boxColor};
		transform: translate(35%, -20px);
	}
}

@keyframes hideLogin {
	0% {
		background-color: ${({ theme }) => theme.colors.boxColor};
		transform: translate(35%, -20px);
	}
	50% {
		transform: translate(0, 0);
	}
	100% {
		background: ${({ theme }) => theme.colors.boxColor};
		transform: translate(40%, 10px);
	}
}

@keyframes showSignup {
	0% {
		background: ${({ theme }) => theme.colors.boxColor};
		transform: translate(-40%, 10px) scaleY(.8);
	}
	50% {
		transform: translate(0, 0) scaleY(.8);
	}
	100% {
		background-color: ${({ theme }) => theme.colors.boxColor};
		transform: translate(-35%, -20px) scaleY(1);
	}
}

@keyframes hideSignup {
	0% {
		background-color: ${({ theme }) => theme.colors.boxColor};
		transform: translate(-35%, -20px) scaleY(1);
	}
	50% {
		transform: translate(0, 0) scaleY(.8);
	}
	100% {
		background: ${({ theme }) => theme.colors.boxColor};
		transform: translate(-40%, 10px) scaleY(.8);
	}
}

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.smartphone};
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

  .bd-rd-15 {
    border-radius: 15px;
  }

  .bd-rd-20 {
    border-radius: 20px;
  }

  .bd-rd-30 {
    border-radius: 30px;
  }

  .shadow-select {
    cursor: pointer;

    color: ${({ theme }) => theme.colors.textColors.secondaryColor};
    background: ${({ theme }) => theme.colors.boxColor};
    
    border-bottom: 2px solid transparent;
    
    transition: all 0.2s linear;
    
    box-shadow: 0px 1px 0px 2px
      ${({ theme }) => theme.colors.buttonColors.secondaryButtonShadowColor};
  
    :hover, :disabled {
      border-bottom: 0px solid transparent;
      
      box-shadow: 0px 0px 0px 1px
      ${({ theme }) => theme.colors.buttonColors.secondaryButtonShadowColor};
    }
  }

  .block-shadow-button {
    border: none;
    transition: all 0.2s linear;

    & p,
    & i,
    & span,
    & img {
      transform: translateY(-1px);
      transition: all 0.2s linear;
    }

    :hover, :disabled, &.selected {
      p,
      i,
      span,
      img {
        transform: translateY(0px);
      }
    }

    :disabled {
      opacity: .7 !important;
      pointer-events: none;
    }

    &.main-action {
      background: ${({ theme }) => theme.colors.mainColor};
      color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
      
      box-shadow: 0px 1px 0px 2px
        ${({ theme }) => theme.colors.buttonColors.mainButtonShadowColor};
    
      :hover, :disabled {
        box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.buttonColors.mainButtonShadowColor};
      }
    }

    &.secondary-action {
      color: ${({ theme }) => theme.colors.textColors.secondaryColor};
      background: ${({ theme }) => theme.colors.boxColor};
      
      box-shadow: 0px 1px 0px 2px
        ${({ theme }) => theme.colors.buttonColors.secondaryButtonShadowColor};
    
      :hover, :disabled {
        box-shadow: 0px 0px 0px 1px
        ${({ theme }) => theme.colors.buttonColors.secondaryButtonShadowColor};
      }

      &.selected {
        background: ${({ theme }) => theme.colors.mainColor};
        color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};

        box-shadow: 0px 0px 0px 1px
          ${({ theme }) => theme.colors.buttonColors.mainButtonShadowColor};
      }
    }
  }
`;
