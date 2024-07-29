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
import { LegacyCodeTabs } from "../..";
import convert from "npm-to-yarn";
export const Npm2YarnCode = (_a) => {
    var { npmCode } = _a, rest = __rest(_a, ["npmCode"]);
    // convert npm code
    const yarnCode = convert(npmCode, "yarn").replaceAll(/([^\s])&&/g, "$1 &&");
    const pnpmCode = convert(npmCode, "pnpm").replaceAll(/([^\s])&&/g, "$1 &&");
    const lang = "bash";
    const { title = "" } = rest, codeOptions = __rest(rest, ["title"]);
    return (React.createElement(LegacyCodeTabs, { group: "npm2yarn", title: title, tabs: [
            {
                label: "npm",
                value: "npm",
                code: Object.assign({ source: npmCode, lang }, codeOptions),
            },
            {
                label: "yarn",
                value: "yarn",
                code: Object.assign({ source: yarnCode, lang }, codeOptions),
            },
            {
                label: "pnpm",
                value: "pnpm",
                code: Object.assign({ source: pnpmCode, lang }, codeOptions),
            },
        ] }));
};
