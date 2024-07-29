"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarTitle = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const clsx_1 = __importDefault(require("clsx"));
const SidebarTitle = ({ item }) => {
    return (react_1.default.createElement(link_1.default, Object.assign({ className: (0, clsx_1.default)("flex items-center justify-between gap-docs_0.5 rounded-docs_sm px-docs_0.5 py-[6px] hover:no-underline", "border border-transparent", "text-medusa-fg-subtle text-medium-plus"), href: item.isPathHref && item.path ? item.path : `#${item.path}`, replace: !item.isPathHref, shallow: !item.isPathHref }, item.linkProps),
        react_1.default.createElement("span", null, item.childSidebarTitle || item.title),
        item.additionalElms));
};
exports.SidebarTitle = SidebarTitle;
