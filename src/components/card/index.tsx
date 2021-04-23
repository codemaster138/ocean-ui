import styled from "styled-components";
import { UilTimes } from "@iconscout/react-unicons";
import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";

const StyledCard = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: ${(p: any) =>
    (p.width && (typeof p.width === "number" ? p.width + "px" : p.width)) ||
    "initial"};
  background: ${(p) => p.theme.accent_4};
  box-shadow: 0px 5px 10px ${(p) => p.theme.accent_3 + "80"};
  border-radius: 10px;
  position: relative;
  font-size: 13px;
  overflow: initial;
`;

const StyledCardBody: any = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${(p: any) => (p.compact ? "24px" : "40px")};
  padding-bottom: ${(p: any) =>
    p.hasFooter ? "0px" : p.compact ? "24px" : "40px"};

  p {
    color: ${(p: any) => p.theme.accent_1};
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
  position: relative;
  /* padding-top: ${(p: any) => (p.hasHeader ? "0px" : "40px")}; */
`;

const StyledCardFooter: any = styled.div`
  background: ${(p: any) => (p.compact ? "transparent" : p.theme.bg)};
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: ${(p: any) => (p.compact ? "0px" : "40px")};
  border-top: 1px solid
    ${(p: any) => (p.compact ? "transparent" : p.theme.accent_3)};
  width: 100%;
  box-sizing: border-box;
  padding: 16px ${(p: any) => (p.compact ? "24px" : "40px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  position: relative;
  gap: 20px;
`;

const StyledCardDismiss = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.accent_3};
  color: ${(p) => p.theme.fg};
  padding: 3px;

  position: absolute;
  top: -8px;
  left: calc(100% - 8px);

  transition: 300ms;

  svg {
    width: 10px;
    height: 10px;
    transition: 300ms;
  }

  &:hover {
    top: -7px;
    left: calc(100% - 7px);
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

export interface CardProps {
  dismiss?: () => void;
  compact?: boolean;
  footer?: ReactNode;
  footerStyle?: CSSProperties;
  width?: number;
}

export default function Card(props: CardProps & HTMLAttributes<any>) {
  return (
    <StyledCard {...{ ...props, children: undefined }}>
      {props.dismiss && (
        <StyledCardDismiss onClick={props.dismiss}>
          <UilTimes />
        </StyledCardDismiss>
      )}
      <StyledCardBody
        compact={props.compact}
        hasFooter={props.footer ? true : false}
      >
        {props.children}
      </StyledCardBody>
      {props.footer && (
        <StyledCardFooter compact={props.compact} style={props.footerStyle}>
          {props.footer}
        </StyledCardFooter>
      )}
    </StyledCard>
  );
}

export const CardHeading = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

export const CardForm = styled.form`
  width: 100%;
  margin: 0;
  padding: 0;

  & > :first-child {
    margin-top: 0;
  }
`;
