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
exports.MarkdownContent = void 0;
const react_1 = __importDefault(require("react"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const components_1 = require("../../components");
const clsx_1 = __importDefault(require("clsx"));
const MarkdownContent = (_a) => {
    var { children, components } = _a, props = __rest(_a, ["children", "components"]);
    return (react_1.default.createElement(react_markdown_1.default, Object.assign({ components: components || Object.assign(Object.assign({}, components_1.MDXComponents), { pre: (_a) => {
                var { className, children } = _a, props = __rest(_a, ["className", "children"]);
                return (react_1.default.createElement("pre", Object.assign({ className: (0, clsx_1.default)("p-0 bg-transparent", className) }, props), children));
            }, 
            // TODO replace with Link once we move away from Docusaurus
            a: components_1.LegacyLink }) }, props), children));
};
exports.MarkdownContent = MarkdownContent;
