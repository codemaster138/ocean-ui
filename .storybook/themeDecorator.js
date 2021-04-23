import styled, { ThemeProvider } from "styled-components";
import lightTheme from "../src/themes/light";

const DecoContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(p) => p.theme.bg};
  box-sizing: border-box;
  padding: 24px;

  * {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={lightTheme}>
    <DecoContainer>{storyFn()}</DecoContainer>
  </ThemeProvider>
);

export default ThemeDecorator;
