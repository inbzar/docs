import React from "react";
import { Highlight } from "..";
import { RenderProps, Token } from "prism-react-renderer";
type CodeBlockLineProps = {
    line: Token[];
    highlights?: Highlight[];
    lineNumber: number;
    showLineNumber: boolean;
    bgColorClassName: string;
    lineNumberColorClassName: string;
    noLineNumbers?: boolean;
} & Pick<RenderProps, "getLineProps" | "getTokenProps">;
export declare const CodeBlockLine: ({ line, highlights, lineNumber, getLineProps, getTokenProps, showLineNumber, bgColorClassName, lineNumberColorClassName, }: CodeBlockLineProps) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map