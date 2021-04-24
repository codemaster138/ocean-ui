import { HTMLAttributes } from "react";
import styled from "styled-components";
import React from "react";

const StyledSeparator = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  border-top: 1px solid ${p => p.theme.accent_2};
  margin: 0;
  padding: 0;
`;

export function Separator(props: HTMLAttributes<any>) {
  return (
    <StyledSeparator className="separator"/>
  );
}