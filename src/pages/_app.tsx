import { AppProps } from 'next/app';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: #261f1f;
    box-sizing: border-box;
    font-family: "Fira Code", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica Neue, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: white;
    font-family: "Fira Code", sans-serif;
  }

  main {
    height: 100%;
  }

  #__next {
    height: 100%;
  }
`;

const theme: DefaultTheme = {
  colors: {
    primary: '#261f1f',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
