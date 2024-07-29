import React from "react";
export type NoteProps = {
    type?: "default" | "warning" | "success" | "error" | "check";
    title?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
};
export declare const Note: ({ type, ...props }: NoteProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map