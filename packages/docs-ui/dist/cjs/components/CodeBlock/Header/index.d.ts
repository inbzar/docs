import React from "react";
import { CodeBlockStyle } from "..";
import { BadgeVariant } from "../../../components";
export type CodeBlockHeaderMeta = {
    badgeLabel?: string;
    badgeColor?: BadgeVariant;
};
type CodeBlockHeaderProps = {
    children?: React.ReactNode;
    title?: string;
    blockStyle?: CodeBlockStyle;
} & CodeBlockHeaderMeta;
export declare const CodeBlockHeader: ({ children, title, blockStyle, badgeLabel, badgeColor, }: CodeBlockHeaderProps) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map