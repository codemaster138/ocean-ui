import React, { createContext, PropsWithChildren, useState } from "react";
import styled from "styled-components";

const StyledRadioContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  cursor: pointer;
`;

const StyledRadioLabel = styled.span`
  margin-left: 12px;
  font-size: 13px;
  padding-bottom: 1px;
  color: ${(p: any) => p.theme.accent_1};
  transition: 300ms;

  &:hover {
    cursor: pointer;
    border-color: ${(p: any) => p.theme.accent_1};
  }

  transition: 300ms;
`;

const StyledRadio = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  border: 1px solid ${(p: any) => p.theme.accent_2};
  border-radius: 50%;
  transition: 300ms;
  position: relative;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    background-color: ${(p: any) => p.theme.on_primary};
    transition: 300ms;
    border-radius: 50%;
    opacity: 0;
    will-change: transform;
  }

  &:hover {
    cursor: pointer;
    border-color: ${(p: any) => p.theme.accent_1};
  }

  &:checked {
    border-color: ${(p: any) => p.theme.primary};
    background: ${(p: any) => p.theme.primary};

    &::before {
      content: "";
      width: 6px !important;
      height: 6px !important;
      position: absolute;
      left: 50%;
      top: 50%;
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    & + .radio__label  {
      color: ${(p: any) => p.theme.fg};
    }

    svg {
      width: 14px;
      height: 14px;
      opacity: 1;
    }
  }
`;

export interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onToggle?: (value: boolean) => void;
  groupName: string;
  value: string;
}

export default function Radio(props: PropsWithChildren<RadioProps>) {
  return (
    <StyledRadioContainer className="radio">
      <StyledRadio
        value={props.value}
        type="radio"
        name={props.groupName}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
      />
      <StyledRadioLabel className="radio__label">
        {props.children}
      </StyledRadioLabel>
    </StyledRadioContainer>
  );
}
/*
interface RadioGroupProps {
  defaultRadio?: string;
}

const RadioGroupContext = createContext<[string | undefined, (d: string) => void] | undefined>(undefined);

const StyledRadioGroup = styled.div``;

export function RadioGroup(props: PropsWithChildren<RadioGroupProps>) {
  const [currentRadio, setCurrentRadio] = useState(props.defaultRadio);

  return (
    <StyledRadioGroup className="radio-group">
      <RadioGroupContext.Provider value={[currentRadio, setCurrentRadio]}>
        { props.children }
      </RadioGroupContext.Provider>
    </StyledRadioGroup>
  );
}
*/
