import React from "react";
export type CommonProps = {
    expandUrl?: string;
    sectionTitle?: string;
    siteUrl?: string;
    pathname?: string;
};
export type Type = {
    name: string;
    type: string;
    optional?: boolean;
    defaultValue?: string;
    description?: string;
    featureFlag?: string;
    expandable: boolean;
    children?: Type[];
};
type ParameterTypesType = {
    types: Type[];
    sectionTitle?: string;
} & CommonProps & React.HTMLAttributes<HTMLDivElement>;
export declare const TypeList: ({ types, className, siteUrl, sectionTitle, expandUrl, pathname, ...props }: ParameterTypesType) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map