"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const react_1 = __importDefault(require("react"));
const ui_1 = require("@medusajs/ui");
const clsx_1 = __importDefault(require("clsx"));
const Root = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Table, Object.assign({ className: (0, clsx_1.default)(className, "table-fixed mb-docs_1", "[&_pre_span]:!max-w-full [&_pre_span]:!break-words [&_pre_span]:!whitespace-break-spaces") }, props)));
};
const HeaderCell = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Table.HeaderCell, Object.assign({ className: (0, clsx_1.default)(className, "text-left pr-docs_1.5 h-docs_3 break-words") }, props)));
};
const Row = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Table.Row, Object.assign({ className: (0, clsx_1.default)(className, "[&_td:last-child]:pr-docs_1.5 [&_th:last-child]:pr-docs_1.5 [&_td:first-child]:pl-docs_1.5 [&_th:first-child]:pl-docs_1.5") }, props)));
};
const Cell = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Table.Cell, Object.assign({ className: (0, clsx_1.default)(className, "pr-docs_1.5 h-docs_3 break-words") }, props)));
};
const Table = Object.assign(Root, {
    Row,
    Cell,
    Header: ui_1.Table.Header,
    HeaderCell,
    Body: ui_1.Table.Body,
});
exports.Table = Table;
