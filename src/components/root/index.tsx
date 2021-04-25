import { PropsWithChildren } from "react";
import styled, { ThemeProvider } from "styled-components";
import React from "react";

interface OceanRootProps {
  theme: { [key: string]: any };
}

const StyledOceanRoot: any = styled.div`
  width: 100%;
  background: ${(p) => p.theme.bg};
  box-sizing: border-box;

  .button + .button,
  .icon-button + .button {
    margin-left: 16px;
  }

  * + .checkbox,
  * + .separator,
  * + .radio,
  * + .div,
  * + .toggle,
  * + .option-switch {
    margin-top: 16px;
  }

  * {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function OceanRoot({
  theme,
  children,
}: PropsWithChildren<OceanRootProps>) {
  return (
    <ThemeProvider theme={theme}>
      <StyledOceanRoot>{children}</StyledOceanRoot>
    </ThemeProvider>
  );
}
