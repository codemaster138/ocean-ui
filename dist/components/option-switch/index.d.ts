import { PropsWithChildren, ReactNode } from "react";
export declare const StyledOptionSwitchContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledOptionSwitchWrapper: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const StyledOptionSwitchLabel: import("styled-components").StyledComponent<"span", any, {}, never>;
export interface OptionSwitchProps {
    label?: string | ReactNode;
}
export default function OptionSwitch(props: PropsWithChildren<OptionSwitchProps>): JSX.Element;
export declare const StyledSwitchOption: import("styled-components").StyledComponent<"button", any, {}, never>;
export interface SwitchOptionProps {
    selected?: boolean;
    onClick: () => void;
}
export declare function SwitchOption(props: PropsWithChildren<SwitchOptionProps>): JSX.Element;
