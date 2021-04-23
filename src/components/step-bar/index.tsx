import styled from "styled-components";
import React from "react";

const StyledStepBar: any = styled.div`
  height: 24px;
  width: ${(p: any) => p.width ? (typeof p.width === "number" ? (p.width + "px") : p.width) : 'initial'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  margin-bottom: 40px;
  position: relative;
  transition: 300ms;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 0px;
    border-top: 1px solid ${(p: any) => p.theme.accent_2};
  }

  &::after {
    transition: 300ms;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 0px;
    width: ${(p: any) => ((p.current - 1) / (p.steps - 1)) * 100}%;
    border-top: 1px solid ${p => p.theme.primary};
  }
`;

const StyledStep: any = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  padding: 0;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p: any) => p.current ? p.theme.primary : p.theme.accent_4};
  color: ${(p: any) => p.current ? p.theme.on_primary : p.theme.fg};
  border: 1px solid ${(p: any) => p.current ? p.theme.primary : p.theme.accent_2};
  z-index: 10;
`;

export interface StepBarProps {
  width?: number | string;
  current: number;
  steps: number;
}

export default function StepBar({ steps, current, width }: StepBarProps) {
  return (
    <StyledStepBar width={width} steps={steps} current={current}>
      {new Array(steps).fill(0).map((_step, i) => (
        <StyledStep key={i} current={i + 1 <= current}>{i + 1}</StyledStep>
      ))}
    </StyledStepBar>
  );
}
