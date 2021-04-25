import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

export const StyledOptionSwitchContainer = styled.div`
  padding: 4px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.accent_3};
  box-shadow: 0px 5px 10px ${(p) => p.theme.accent_3 + "80"};
  display: inline-block;
`;

export const StyledOptionSwitchWrapper = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
`;

export const StyledOptionSwitchLabel = styled.span`
  font-size: 13px;
  padding-bottom: 1px;
  color: ${(p: any) => p.theme.accent_1};
`;

export interface OptionSwitchProps {
  label?: string | ReactNode;
}

export default function OptionSwitch(
  props: PropsWithChildren<OptionSwitchProps>
) {
  return (
    <StyledOptionSwitchWrapper className="option-switch">
      { props.label && <StyledOptionSwitchLabel>{props.label}</StyledOptionSwitchLabel> }
      <StyledOptionSwitchContainer {...props} />
    </StyledOptionSwitchWrapper>
  );
}

export const StyledSwitchOption = styled.button`
  border: none;
  background-color: ${(p: any) =>
    p.selected ? p.theme.accent_2 : p.theme.accent_3};
  color: ${(p: any) => (p.selected ? p.theme.fg : p.theme.accent_1)};
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  cursor: pointer;
`;

export interface SwitchOptionProps {
  selected?: boolean;
  onClick: () => void;
}

export function SwitchOption(props: PropsWithChildren<SwitchOptionProps>) {
  return <StyledSwitchOption {...props} />;
}
