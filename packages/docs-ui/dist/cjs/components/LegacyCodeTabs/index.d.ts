import { CodeBlockProps, CodeBlockStyle } from "../../components";
import { BaseTabType } from "../../hooks";
import React from "react";
export type LegacyTabType = {
    code?: CodeBlockProps;
    codeBlock?: React.ReactNode;
} & BaseTabType;
export type LegacyCodeTabsProps = {
    tabs: LegacyTabType[];
    className?: string;
    group?: string;
    title?: string;
    blockStyle?: CodeBlockStyle;
};
export declare const LegacyCodeTabs: ({ tabs, className, group, title, blockStyle, }: LegacyCodeTabsProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map