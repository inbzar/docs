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
exports.Toggle = void 0;
const ui_1 = require("@medusajs/ui");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const Toggle = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Switch, Object.assign({}, props, { className: (0, clsx_1.default)(className, "bg-ui-bg-switch-off hover:bg-ui-bg-switch-off-hover data-[state=unchecked]:hover:after:bg-switch-off-hover-gradient", "before:shadow-details-switch-background focus-visible:shadow-details-switch-background-focus data-[state=checked]:bg-ui-bg-interactive", "disabled:!bg-ui-bg-disabled group relative inline-flex items-center rounded-full outline-none transition-all before:absolute", "before:inset-0 before:rounded-full before:content-[''] after:absolute after:inset-0 after:rounded-full after:content-['']", "disabled:cursor-not-allowed", 
        // eslint-disable-next-line react/prop-types
        props.size !== "small" &&
            "h-[18px] w-[32px] [&_span]:h-[14px] [&_span]:w-[14px]", "[&_span]:bg-medusa-fg-on-color [&_span]:shadow-details-switch-handle [&_span]:group-disabled:bg-ui-fg-disabled [&_span]:pointer-events-none", "[&_span]:rounded-full [&_span]:group-disabled:shadow-none [&_span]:transition-transform", "[&_span]:data-[state=checked]:translate-x-docs_1 [&_span]:data-[state=unchecked]:translate-x-docs_0.125") })));
};
exports.Toggle = Toggle;
