import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      // web fonts
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff')
          format('woff');
        font-style: normal;
        font-weight: 100;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff')
          format('woff');
        font-style: normal;
        font-weight: 200;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff')
          format('woff');
        font-style: normal;
        font-weight: 300;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
          format('woff');
        font-style: normal;
        font-weight: 400;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
          format('woff');
        font-style: normal;
        font-weight: 500;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
          format('woff');
        font-style: normal;
        font-weight: 600;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
          format('woff');
        font-style: normal;
        font-weight: 700;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff')
          format('woff');
        font-style: normal;
        font-weight: 800;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff')
          format('woff');
        font-style: normal;
        font-weight: 900;
      }
      // global styles
      * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
      }
      body {
        color: #202020;
        font-family: 'Pretendard';
        letter-spacing: -0.02em;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input,
      button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: 'Pretendard';
      }
      textarea {
        border: none;
        outline: none;
        font-family: 'Pretendard';
        overflow: auto;
        resize: none;
      }
      ul {
        list-style: none;
      }
      li {
        list-style-type: none;
      }
      :focus {
        outline: none;
      }
    `}
  />
);

export default GlobalStyles;
