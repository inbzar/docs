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
import { WarningNote } from "./Types/warning";
import { DefaultNote } from "./Types/default";
import { SuccessNote } from "./Types/sucess";
import { ErrorNote } from "./Types/error";
import { CheckNote } from "./Types/checks";
export const Note = (_a) => {
    var { type = "default" } = _a, props = __rest(_a, ["type"]);
    switch (type) {
        case "warning":
            return React.createElement(WarningNote, Object.assign({ type: type }, props));
        case "success":
            return React.createElement(SuccessNote, Object.assign({ type: type }, props));
        case "error":
            return React.createElement(ErrorNote, Object.assign({ type: type }, props));
        case "check":
            return React.createElement(CheckNote, Object.assign({ type: type }, props));
        default:
            return React.createElement(DefaultNote, Object.assign({ type: type }, props));
    }
};
