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
exports.MDXComponents = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const clsx_1 = __importDefault(require("clsx"));
const ui_1 = require("@medusajs/ui");
exports.MDXComponents = {
    code: components_1.CodeMdx,
    kbd: components_1.Kbd,
    Kbd: components_1.Kbd,
    Note: components_1.Note,
    details: components_1.Details,
    Details: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return react_1.default.createElement(components_1.Details, Object.assign({}, props, { className: (0, clsx_1.default)(className, "my-docs_1") }));
    },
    Summary: components_1.DetailsSummary,
    Card: components_1.Card,
    CardList: components_1.CardList,
    h1: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (react_1.default.createElement("h1", Object.assign({ className: (0, clsx_1.default)("h1-docs [&_code]:!h1-docs [&_code]:!font-mono mb-docs_1 text-medusa-fg-base", className) }, props)));
    },
    h2: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (react_1.default.createElement("h2", Object.assign({ className: (0, clsx_1.default)("h2-docs [&_code]:!h2-docs [&_code]:!font-mono mb-docs_1 mt-docs_4 text-medusa-fg-base", props.id && "group/h2", className) }, props),
            children,
            props.id && (
            // TODO replace with Link once we move away from Docusaurus
            react_1.default.createElement(components_1.LegacyLink, { href: `#${props.id}`, className: "opacity-0 group-hover/h2:opacity-100 transition-opacity ml-docs_0.5 inline-block" }, "#"))));
    },
    h3: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (react_1.default.createElement("h3", Object.assign({ className: (0, clsx_1.default)("h3-docs [&_code]:!h3-docs [&_code]:!font-mono mb-docs_0.5 mt-docs_3 text-medusa-fg-base", props.id && "group/h3", className) }, props),
            children,
            props.id && (
            // TODO replace with Link once we move away from Docusaurus
            react_1.default.createElement(components_1.LegacyLink, { href: `#${props.id}`, className: "opacity-0 group-hover/h3:opacity-100 transition-opacity ml-docs_0.5 inline-block" }, "#"))));
    },
    h4: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (react_1.default.createElement("h4", Object.assign({ className: (0, clsx_1.default)("mb-docs_0.5 text-medusa-fg-base text-h4", className) }, props)));
    },
    p: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (react_1.default.createElement("p", Object.assign({ className: (0, clsx_1.default)("text-medusa-fg-subtle [&:not(:last-child)]:mb-docs_1.5 last:!mb-0", className) }, props)));
    },
    ul: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (react_1.default.createElement("ul", Object.assign({}, props, { className: (0, clsx_1.default)("list-disc px-docs_1 mb-docs_1.5 [&_ul]:mb-0 [&_ol]:mb-0 [&_p]:!mb-0", className) }), children));
    },
    ol: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (react_1.default.createElement("ol", Object.assign({}, props, { className: (0, clsx_1.default)("list-decimal px-docs_1 mb-docs_1.5 [&_ul]:mb-0 [&_ol]:mb-0 [&_p]:!mb-0", className) }), children));
    },
    li: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (react_1.default.createElement("li", Object.assign({ className: (0, clsx_1.default)("text-medusa-fg-subtle", className) }, props),
            react_1.default.createElement(ui_1.Text, { as: "span" }, children)));
    },
    hr: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (react_1.default.createElement("hr", Object.assign({ className: (0, clsx_1.default)("my-docs_2 h-[1px] w-full border-0 bg-medusa-border-base", className) }, props)));
    },
    img: (props) => {
        // omit key to resolve errors
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { key } = props, rest = __rest(props, ["key"]);
        return react_1.default.createElement(components_1.ZoomImg, Object.assign({}, rest));
    },
};
