import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledToggleContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  cursor: pointer;

  * {
    transition: 300ms;
  }
`;

const StyledToggleLabel = styled.span`
  margin-left: 12px;
  font-size: 13px;
  padding-bottom: 1px;
  color: ${(p: any) => p.theme.accent_1};
  transition: 300ms;

  &.toggle__label--checked {
    color: ${(p: any) => p.theme.fg};
  }
`;

const StyledToggle: any = styled.button`
  border: 1px solid ${(p: any) => p.theme.accent_2};
  border-radius: 16px;
  height: 16px;
  width: 32px;
  background: transparent;
  cursor: pointer;
  transition: 300ms;
  position: relative;
  transition: 300ms;

  &:before {
    content: "";
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${(p: any) => p.theme.accent_2};
    transition: 300ms;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  &:hover {
    border-color: ${(p: any) => p.theme.accent_1};

    &:before {
      background: ${(p: any) => p.theme.accent_1};
    }
  }

  &.toggle__toggle--checked {
    border-color: ${(p: any) => p.theme.primary};
    background: ${(p: any) => p.theme.primary};

    &::before {
      left: 18px;
      background: ${(p: any) => p.theme.on_primary};
    }
  }
`;

export interface ToggleSwitchProps {
  checked?: boolean;
  onToggle: (v: boolean) => void;
}

export default function ToggleSwitch(props: PropsWithChildren<ToggleSwitchProps>) {
  return (
    <StyledToggleContainer className="toggle">
      <StyledToggleLabel className={`toggle__label${props.checked ? ' toggle__label--checked' : ''}`}>{ props.children }</StyledToggleLabel>
      <StyledToggle onClick={() => props.onToggle(!props.checked)} className={`toggle__toggle${props.checked ? ' toggle__toggle--checked' : ''}`}/>
    </StyledToggleContainer>
  );
}