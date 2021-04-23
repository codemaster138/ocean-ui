import { FocusEvent, KeyboardEvent } from "react";
import React from "react";
export declare const StyledInputLabel: any;
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
declare const _default: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;
export default _default;
