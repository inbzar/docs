"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsContent = exports.TabsContentWrapper = exports.TabsTrigger = exports.TabsList = exports.Tabs = void 0;
const react_1 = __importDefault(require("react"));
const ui_1 = require("@medusajs/ui");
const clsx_1 = __importDefault(require("clsx"));
const Tabs = (props) => (react_1.default.createElement(ui_1.Tabs, Object.assign({}, props)));
exports.Tabs = Tabs;
const TabsList = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Tabs.List, Object.assign({}, props, { className: (0, clsx_1.default)(className, "gap-docs_0.5") })));
};
exports.TabsList = TabsList;
const TabsTrigger = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement(ui_1.Tabs.Trigger, Object.assign({}, props, { className: (0, clsx_1.default)(className, "px-[10px] py-docs_0.25 data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base data-[state=active]:shadow-elevation-card-rest", "hover:text-ui-fg-base focus-visible:border-ui-border-interactive focus-visible:!shadow-borders-focus focus-visible:bg-ui-bg-base") })));
};
exports.TabsTrigger = TabsTrigger;
const TabsContentWrapper = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", Object.assign({}, props, { className: (0, clsx_1.default)(className, "mt-docs_0.5") })));
};
exports.TabsContentWrapper = TabsContentWrapper;
const TabsContent = (props) => react_1.default.createElement(ui_1.Tabs.Content, Object.assign({}, props));
exports.TabsContent = TabsContent;
