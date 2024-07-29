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
exports.TightLayout = void 0;
const react_1 = __importDefault(require("react"));
const root_1 = require("./root");
const clsx_1 = __importDefault(require("clsx"));
const __1 = require("..");
const TightLayout = (_a) => {
    var { children, showPagination } = _a, props = __rest(_a, ["children", "showPagination"]);
    return (react_1.default.createElement(root_1.RootLayout, Object.assign({}, props, { mainWrapperClasses: (0, clsx_1.default)(props.mainWrapperClasses, "grid grid-cols-1 px-docs_1.5 lg:mx-auto lg:grid-cols-[280px_1fr]") }),
        react_1.default.createElement("div", { className: (0, clsx_1.default)("relative flex w-full flex-1 items-start justify-center", " px-docs_1 pb-docs_2 pt-docs_7 md:px-docs_2 lg:px-docs_4 lg:py-docs_7") },
            react_1.default.createElement("main", { className: "h-full w-full lg:max-w-[720px] lg:px-px" },
                children,
                showPagination && react_1.default.createElement(__1.Pagination, null)))));
};
exports.TightLayout = TightLayout;
