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
exports.SuccessNote = void 0;
const react_1 = __importDefault(require("react"));
const Layout_1 = require("../Layout");
const icons_1 = require("@medusajs/icons");
const clsx_1 = __importDefault(require("clsx"));
const SuccessNote = (_a) => {
    var { title = "Sucess", icon } = _a, props = __rest(_a, ["title", "icon"]);
    return (react_1.default.createElement(Layout_1.NoteLayout, Object.assign({ title: title, icon: icon || (react_1.default.createElement(icons_1.Check, { className: (0, clsx_1.default)("inline-block mr-docs_0.125 text-medusa-tag-green-icon") })) }, props)));
};
exports.SuccessNote = SuccessNote;
