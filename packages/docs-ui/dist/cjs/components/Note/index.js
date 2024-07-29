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
exports.Note = void 0;
const react_1 = __importDefault(require("react"));
const warning_1 = require("./Types/warning");
const default_1 = require("./Types/default");
const sucess_1 = require("./Types/sucess");
const error_1 = require("./Types/error");
const checks_1 = require("./Types/checks");
const Note = (_a) => {
    var { type = "default" } = _a, props = __rest(_a, ["type"]);
    switch (type) {
        case "warning":
            return react_1.default.createElement(warning_1.WarningNote, Object.assign({ type: type }, props));
        case "success":
            return react_1.default.createElement(sucess_1.SuccessNote, Object.assign({ type: type }, props));
        case "error":
            return react_1.default.createElement(error_1.ErrorNote, Object.assign({ type: type }, props));
        case "check":
            return react_1.default.createElement(checks_1.CheckNote, Object.assign({ type: type }, props));
        default:
            return react_1.default.createElement(default_1.DefaultNote, Object.assign({ type: type }, props));
    }
};
exports.Note = Note;
