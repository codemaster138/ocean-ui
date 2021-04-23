import { ButtonHTMLAttributes } from "react";
export interface ButtonProps {
    primary?: boolean;
    wide?: boolean;
}
export default function Button(props: ButtonProps & ButtonHTMLAttributes<any>): JSX.Element;
