/// <reference types="react" />
export interface StepBarProps {
    width?: number | string;
    current: number;
    steps: number;
}
export default function StepBar({ steps, current, width }: StepBarProps): JSX.Element;
