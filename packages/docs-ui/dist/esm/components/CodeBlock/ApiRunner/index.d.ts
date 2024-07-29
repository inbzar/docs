import React from "react";
import { ApiMethod } from "types";
type ApiRunnerProps = {
    apiMethod: ApiMethod;
    apiUrl: string;
    pathData?: Record<string, unknown>;
    queryData?: Record<string, unknown>;
    bodyData?: Record<string, unknown>;
};
export declare const ApiRunner: ({ apiMethod, apiUrl, pathData, bodyData, queryData, }: ApiRunnerProps) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map