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
import { SparklesSolid } from "@medusajs/icons";
import clsx from "clsx";
import React from "react";
export const AiAssistantCommandIcon = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ className: clsx("bg-button-inverted bg-medusa-button-inverted dark:bg-button-inverted-dark", "rounded-md p-[2px] text-medusa-fg-on-inverted flex", className) }, props),
        React.createElement(SparklesSolid, null)));
};
