import styled from "styled-components";
import React, { ButtonHTMLAttributes } from "react";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  cursor: pointer;
  border: ${(p: any) => ((p.primary || p.destructive) ? "0" : "1")}px solid
    ${(p: any) => (p.primary ? "transparent" : p.theme.accent_2)};
  background: ${(p: any) => (p.primary ? p.theme.primary : (p.destructive ? p.theme.col_red : "transparent"))};
  color: ${(p: any) => (p.primary ? p.theme.on_primary : (p.destructive ? "#ffffff" : p.theme.fg))};
  padding: ${(p: any) => ((p.primary || p.destructive) ? "9px 17px" : "8px 16px")};
  border-radius: 5px;
  transition: 300ms;
  font-size: 13px;
  width: ${(p: any) => (p.wide ? "100%" : "initial")};
  flex-grow: ${(p: any) => (p.wide ? "1" : "initial")};

  svg {
    margin: 0 10px;
    height: 13px;
    width: auto;
  }

  & > :first-child {
    margin-left: 0;
  }

  & > :last-child {
    margin-right: 0;
  }

  &:hover {
    border-color: ${(p: any) => (p.primary ? "transparent" : p.theme.accent_3)};
    opacity: 0.9;
  }
`;

export interface ButtonProps {
  primary?: boolean;
  wide?: boolean;
  destructive?: boolean;
}

export default function Button(props: ButtonProps & ButtonHTMLAttributes<any>) {
  return (
    <StyledButton
      {...{
        ...props,
        className:
          (props.className || "") +
          ` button${
            props.primary
              ? " button--primary"
              : props.destructive
              ? " button--destructive"
              : ""
          }`,
      }}
    />
  );
}
