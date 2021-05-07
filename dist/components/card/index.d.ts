import { CSSProperties, HTMLAttributes, ReactNode } from "react";
export interface CardProps {
    dismiss?: () => void;
    compact?: boolean;
    footer?: ReactNode;
    footerStyle?: CSSProperties;
    width?: number;
    subcard?: boolean;
}
export default function Card(props: CardProps & HTMLAttributes<any>): JSX.Element;
export declare const CardForm: import("styled-components").StyledComponent<"form", any, {}, never>;
