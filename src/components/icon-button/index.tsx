import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import React from "react";

const StyledIconButton: any = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background: ${(p: any) => (p.primary ? p.theme.primary : (p.light ? p.theme.accent_4 : p.theme.accent_3))};
  color: ${(p: any) => (p.primary ? p.theme.on_primary : p.theme.fg)};
  box-shadow: 0px 5px 10px
    ${(p: any) => (p.primary ? p.theme.primary + "40" : p.theme.accent_2 + (p.light ? "80" : "40"))};
  transition: 300ms;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover, &:focus {
    opacity: 0.9;
    box-shadow: 0px 6px 15px
      ${(p: any) => (p.primary ? p.theme.primary : p.theme.accent_2) + "9c"};
  }

  &:focus {
    outline: none;
  }
`;

const StyledIconButtonBadge: any = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  height: 16px;
  width: auto;
  font-size: 10px;
  padding: 0px 8px;
  border-radius: 16px;
  color: ${(p: any) => p.badgeTextColor ? (p.theme[p.badgeTextColor] || p.badgeTextColor) : p.theme.on_primary};
  background: ${(p: any) => p.badgeColor ? (p.theme[p.badgeColor] || p.badgeColor) : p.theme.primary};
  position: absolute;
  left: 100%;
  top: -8px;
  transform: translateX(-50%);
`;

export interface IconButtonProps {
  badge?: ReactNode;
  badgeColor?: string;
  badgeTextColor?: string;
  primary?: boolean;
  light?: boolean;
}

export default function IconButton(props: IconButtonProps & ButtonHTMLAttributes<any>) {
  return (
    <StyledIconButton {...{ ...props, className: (props.className || '' ) + ` icon-button${props.primary ? ' icon-button--primary' : ''}`, children: undefined}}>
      {props.badge && (
        <StyledIconButtonBadge badgeTextColor={props.badgeTextColor} badgeColor={props.badgeColor}>
          {props.badge}
        </StyledIconButtonBadge>
      )}
      {props.children}
    </StyledIconButton>
  );
}
