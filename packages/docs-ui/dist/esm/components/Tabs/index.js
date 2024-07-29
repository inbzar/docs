"use client";
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
import { Tabs as UiTabs } from "@medusajs/ui";
import clsx from "clsx";
export const Tabs = (props) => (React.createElement(UiTabs, Object.assign({}, props)));
export const TabsList = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(UiTabs.List, Object.assign({}, props, { className: clsx(className, "gap-docs_0.5") })));
};
export const TabsTrigger = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(UiTabs.Trigger, Object.assign({}, props, { className: clsx(className, "px-[10px] py-docs_0.25 data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base data-[state=active]:shadow-elevation-card-rest", "hover:text-ui-fg-base focus-visible:border-ui-border-interactive focus-visible:!shadow-borders-focus focus-visible:bg-ui-bg-base") })));
};
export const TabsContentWrapper = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({}, props, { className: clsx(className, "mt-docs_0.5") })));
};
export const TabsContent = (props) => React.createElement(UiTabs.Content, Object.assign({}, props));
