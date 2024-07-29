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
exports.Npm2YarnCode = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
const npm_to_yarn_1 = __importDefault(require("npm-to-yarn"));
const Npm2YarnCode = (_a) => {
    var { npmCode } = _a, rest = __rest(_a, ["npmCode"]);
    // convert npm code
    const yarnCode = (0, npm_to_yarn_1.default)(npmCode, "yarn").replaceAll(/([^\s])&&/g, "$1 &&");
    const pnpmCode = (0, npm_to_yarn_1.default)(npmCode, "pnpm").replaceAll(/([^\s])&&/g, "$1 &&");
    const lang = "bash";
    const { title = "" } = rest, codeOptions = __rest(rest, ["title"]);
    return (react_1.default.createElement(__1.LegacyCodeTabs, { group: "npm2yarn", title: title, tabs: [
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
exports.Npm2YarnCode = Npm2YarnCode;
