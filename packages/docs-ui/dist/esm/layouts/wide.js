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
export const WideLayout = (_a) => {
    var { children, showPagination } = _a, props = __rest(_a, ["children", "showPagination"]);
    return (React.createElement(RootLayout, Object.assign({}, props, { mainWrapperClasses: clsx(props.mainWrapperClasses, "mx-auto flex px-1.5") }),
        React.createElement("main", { className: "lg:w-ref-main relative mt-4 w-full flex-1 lg:mt-7" },
            children,
            showPagination && React.createElement(Pagination, null))));
};
