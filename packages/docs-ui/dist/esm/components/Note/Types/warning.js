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
import { NoteLayout } from "../Layout";
import { ExclamationCircleSolid } from "@medusajs/icons";
import clsx from "clsx";
export const WarningNote = (_a) => {
    var { title = "Warning", icon } = _a, props = __rest(_a, ["title", "icon"]);
    return (React.createElement(NoteLayout, Object.assign({ title: title, icon: icon || (React.createElement(ExclamationCircleSolid, { className: clsx("inline-block mr-docs_0.125 text-medusa-tag-red-icon") })) }, props)));
};
