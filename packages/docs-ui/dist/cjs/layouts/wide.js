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
exports.WideLayout = void 0;
const react_1 = __importDefault(require("react"));
const root_1 = require("./root");
const clsx_1 = __importDefault(require("clsx"));
const __1 = require("..");
const WideLayout = (_a) => {
    var { children, showPagination } = _a, props = __rest(_a, ["children", "showPagination"]);
    return (react_1.default.createElement(root_1.RootLayout, Object.assign({}, props, { mainWrapperClasses: (0, clsx_1.default)(props.mainWrapperClasses, "mx-auto flex px-1.5") }),
        react_1.default.createElement("main", { className: "lg:w-ref-main relative mt-4 w-full flex-1 lg:mt-7" },
            children,
            showPagination && react_1.default.createElement(__1.Pagination, null))));
};
exports.WideLayout = WideLayout;
