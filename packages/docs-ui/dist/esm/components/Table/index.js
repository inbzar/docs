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
import { Table as UiTable } from "@medusajs/ui";
import clsx from "clsx";
const Root = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(UiTable, Object.assign({ className: clsx(className, "table-fixed mb-docs_1", "[&_pre_span]:!max-w-full [&_pre_span]:!break-words [&_pre_span]:!whitespace-break-spaces") }, props)));
};
const HeaderCell = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(UiTable.HeaderCell, Object.assign({ className: clsx(className, "text-left pr-docs_1.5 h-docs_3 break-words") }, props)));
};
const Row = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(UiTable.Row, Object.assign({ className: clsx(className, "[&_td:last-child]:pr-docs_1.5 [&_th:last-child]:pr-docs_1.5 [&_td:first-child]:pl-docs_1.5 [&_th:first-child]:pl-docs_1.5") }, props)));
};
const Cell = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(UiTable.Cell, Object.assign({ className: clsx(className, "pr-docs_1.5 h-docs_3 break-words") }, props)));
};
const Table = Object.assign(Root, {
    Row,
    Cell,
    Header: UiTable.Header,
    HeaderCell,
    Body: UiTable.Body,
});
export { Table };
