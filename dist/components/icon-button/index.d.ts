import { ButtonHTMLAttributes, ReactNode } from "react";
export interface IconButtonProps {
    badge?: ReactNode;
    badgeColor?: string;
    badgeTextColor?: string;
    primary?: boolean;
    light?: boolean;
}
export default function IconButton(props: IconButtonProps & ButtonHTMLAttributes<any>): JSX.Element;
