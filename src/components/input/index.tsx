import { ChangeEvent, FocusEvent, forwardRef, KeyboardEvent } from "react";
import styled from "styled-components";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import React, { useState } from "react";

const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInputLabel: any = styled.label`
  font-size: 13px;
  color: ${(p: any) => (p.error ? p.theme.col_red : p.theme.accent_1)};
  display: block;
  margin-top: ${(p: any) => (p.error ? "8px" : "24px")};
  margin-bottom: 8px;
`;

const StyledInput: any = styled.input`
  width: 100%;
  background-color: transparent;
  font-size: 15px;
  color: ${(p: any) => p.theme.fg};
  padding: 10px 18px;
  border-radius: 5px;
  border: 1px solid ${(p: any) => (p.error ? p.theme.col_red : p.theme.accent_2)};
  box-sizing: border-box;
  transition: 300ms;
  box-shadow: 0px 0px 0px 0px ${(p: any) => p.theme.primary + "a0"};

  &::placeholder {
    color: ${(p: any) => p.theme.accent_2};
  }

  &:focus {
    outline: none;
    border-color: ${(p: any) => p.theme.primary};
    box-shadow: 0px 0px 4px 0px ${(p: any) => p.theme.primary + "a0"};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const TogglePasswordButton = styled.a`
  text-decoration: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: calc(100% - 40px);
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 15px;
    color: ${(p: any) => p.theme.accent_1};
  }

  &:hover {
    svg {
      color: ${(p: any) => p.theme.accent_2};
    }
  }

  &:focus {
    outline: none;
  }
`;

const StyledInputInner = styled.div`
  position: relative;
`;

export interface InputProps {
  value?: string;
  update?: (value: string) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  onFocus?: (e: FocusEvent) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  disabled?: boolean;
  errorOutline?: boolean;
}

export default forwardRef(function (
  {
    value,
    update,
    label,
    placeholder,
    type,
    error,
    onFocus,
    onKeyDown,
    disabled,
    errorOutline,
  }: InputProps,
  ref
) {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <StyledInputContainer className="input-container">
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInputInner>
        <StyledInput
          class="input-container_input"
          onFocus={onFocus}
          ref={ref}
          error={error ? true : false || errorOutline}
          type={type === "password" ? (passwordShown ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={(e: ChangeEvent) => update?.((e.target as any).value)}
          onKeyDown={onKeyDown}
          disabled={disabled}
        />
        {type === "password" && (
          <TogglePasswordButton onClick={() => setPasswordShown(!passwordShown)}>
            {passwordShown ? <UilEyeSlash /> : <UilEye />}
          </TogglePasswordButton>
        )}
      </StyledInputInner>
      {error && <StyledInputLabel error>{error}</StyledInputLabel>}
    </StyledInputContainer>
  );
});
