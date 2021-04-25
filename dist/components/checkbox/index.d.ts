import { PropsWithChildren } from "react";
export interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onToggle?: (value: boolean) => void;
}
export default function (props: PropsWithChildren<CheckboxProps>): JSX.Element;
