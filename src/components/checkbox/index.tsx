import React, {
  PropsWithChildren,
  useState,
} from "react";
import { UilCheck } from "@iconscout/react-unicons";
import styled from "styled-components";

const StyledCheckboxContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  cursor: pointer;
`;

const StyledCheckbox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  background: transparent;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid ${(p: any) => p.theme.accent_2};
  transition: 300ms;

  svg {
    color: ${p => p.theme.on_primary};
    opacity: 0;
    width: 5px;
    height: 5px;
    transition: 300ms;
  }

  &:hover, &:focus {
    cursor: pointer;
    border-color: ${(p: any) => p.theme.accent_1};
  }

  &:focus {
    outline: none;
  }

  &.checkbox__checkbox--checked {
    border-color: ${(p: any) => p.theme.primary};
    background: ${(p: any) => p.theme.primary};

    svg {
      width: 14px;
      height: 14px;
      opacity: 1;
    }
  }
`;

const StyledCheckboxLabel = styled.span`
  margin-left: 12px;
  font-size: 13px;
  padding-bottom: 1px;
  color: ${(p: any) => p.theme.accent_1};
  transition: 300ms;

  &.checkbox__label--checked {
    color: ${(p: any) => p.theme.fg};
  }
`;

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onToggle?: (value: boolean) => void;
}

export default function(props: PropsWithChildren<CheckboxProps>) {
  const [checked, setChecked] = useState(props.defaultChecked || false);

  return (
    <StyledCheckboxContainer className="checkbox">
      <StyledCheckbox onClick={() => {
        setChecked(!checked);
        return !(props.checked ?? checked);
      }} className={(props.checked ?? checked) ? "checkbox__checkbox--checked": ""}>
        <UilCheck size="13"/>
      </StyledCheckbox>
      <StyledCheckboxLabel className={(props.checked ?? checked) ? "checkbox__label--checked": ""}>{props.children}</StyledCheckboxLabel>
    </StyledCheckboxContainer>
  );
}
