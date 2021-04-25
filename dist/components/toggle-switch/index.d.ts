import { PropsWithChildren } from 'react';
export interface ToggleSwitchProps {
    checked?: boolean;
    onToggle: (v: boolean) => void;
}
export default function ToggleSwitch(props: PropsWithChildren<ToggleSwitchProps>): JSX.Element;
