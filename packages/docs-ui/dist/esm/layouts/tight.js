var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { RootLayout } from "./root";
import clsx from "clsx";
import { Pagination } from "..";
export const TightLayout = (_a) => {
    var { children, showPagination } = _a, props = __rest(_a, ["children", "showPagination"]);
    return (React.createElement(RootLayout, Object.assign({}, props, { mainWrapperClasses: clsx(props.mainWrapperClasses, "grid grid-cols-1 px-docs_1.5 lg:mx-auto lg:grid-cols-[280px_1fr]") }),
        React.createElement("div", { className: clsx("relative flex w-full flex-1 items-start justify-center", " px-docs_1 pb-docs_2 pt-docs_7 md:px-docs_2 lg:px-docs_4 lg:py-docs_7") },
            React.createElement("main", { className: "h-full w-full lg:max-w-[720px] lg:px-px" },
                children,
                showPagination && React.createElement(Pagination, null)))));
};
