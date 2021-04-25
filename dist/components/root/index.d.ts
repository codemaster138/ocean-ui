import { PropsWithChildren } from "react";
interface OceanRootProps {
    theme: {
        [key: string]: any;
    };
}
export default function OceanRoot({ theme, children, }: PropsWithChildren<OceanRootProps>): JSX.Element;
export {};
