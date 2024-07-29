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
import { CodeMdx, Details, Kbd, Note, Card, CardList, LegacyLink, DetailsSummary, ZoomImg, } from "../../components";
import clsx from "clsx";
import { Text } from "@medusajs/ui";
export const MDXComponents = {
    code: CodeMdx,
    kbd: Kbd,
    Kbd,
    Note,
    details: Details,
    Details: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Details, Object.assign({}, props, { className: clsx(className, "my-docs_1") }));
    },
    Summary: DetailsSummary,
    Card,
    CardList,
    h1: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (React.createElement("h1", Object.assign({ className: clsx("h1-docs [&_code]:!h1-docs [&_code]:!font-mono mb-docs_1 text-medusa-fg-base", className) }, props)));
    },
    h2: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("h2", Object.assign({ className: clsx("h2-docs [&_code]:!h2-docs [&_code]:!font-mono mb-docs_1 mt-docs_4 text-medusa-fg-base", props.id && "group/h2", className) }, props),
            children,
            props.id && (
            // TODO replace with Link once we move away from Docusaurus
            React.createElement(LegacyLink, { href: `#${props.id}`, className: "opacity-0 group-hover/h2:opacity-100 transition-opacity ml-docs_0.5 inline-block" }, "#"))));
    },
    h3: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("h3", Object.assign({ className: clsx("h3-docs [&_code]:!h3-docs [&_code]:!font-mono mb-docs_0.5 mt-docs_3 text-medusa-fg-base", props.id && "group/h3", className) }, props),
            children,
            props.id && (
            // TODO replace with Link once we move away from Docusaurus
            React.createElement(LegacyLink, { href: `#${props.id}`, className: "opacity-0 group-hover/h3:opacity-100 transition-opacity ml-docs_0.5 inline-block" }, "#"))));
    },
    h4: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (React.createElement("h4", Object.assign({ className: clsx("mb-docs_0.5 text-medusa-fg-base text-h4", className) }, props)));
    },
    p: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (React.createElement("p", Object.assign({ className: clsx("text-medusa-fg-subtle [&:not(:last-child)]:mb-docs_1.5 last:!mb-0", className) }, props)));
    },
    ul: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("ul", Object.assign({}, props, { className: clsx("list-disc px-docs_1 mb-docs_1.5 [&_ul]:mb-0 [&_ol]:mb-0 [&_p]:!mb-0", className) }), children));
    },
    ol: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("ol", Object.assign({}, props, { className: clsx("list-decimal px-docs_1 mb-docs_1.5 [&_ul]:mb-0 [&_ol]:mb-0 [&_p]:!mb-0", className) }), children));
    },
    li: (_a) => {
        var { className, children } = _a, props = __rest(_a, ["className", "children"]);
        return (React.createElement("li", Object.assign({ className: clsx("text-medusa-fg-subtle", className) }, props),
            React.createElement(Text, { as: "span" }, children)));
    },
    hr: (_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (React.createElement("hr", Object.assign({ className: clsx("my-docs_2 h-[1px] w-full border-0 bg-medusa-border-base", className) }, props)));
    },
    img: (props) => {
        // omit key to resolve errors
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { key } = props, rest = __rest(props, ["key"]);
        return React.createElement(ZoomImg, Object.assign({}, rest));
    },
};
