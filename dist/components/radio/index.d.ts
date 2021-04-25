import { PropsWithChildren } from "react";
export interface RadioProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onToggle?: (value: boolean) => void;
    groupName: string;
    value: string;
}
export default function Radio(props: PropsWithChildren<RadioProps>): JSX.Element;
