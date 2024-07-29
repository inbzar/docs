"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarBack = void 0;
const react_1 = __importDefault(require("react"));
const providers_1 = require("../../../providers");
const clsx_1 = __importDefault(require("clsx"));
const icons_1 = require("@medusajs/icons");
const SidebarBack = () => {
    const { goBack } = (0, providers_1.useSidebar)();
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("my-docs_1.5 cursor-pointer", "flex items-center gap-docs_0.5 rounded-docs_sm px-docs_0.5 py-[6px] hover:no-underline", "border border-transparent", "text-medusa-fg-subtle text-medium-plus"), tabIndex: -1, onClick: goBack },
        react_1.default.createElement(icons_1.ArrowUturnLeft, { className: "mr-docs_0.5" }),
        react_1.default.createElement("span", null, "Back")));
};
exports.SidebarBack = SidebarBack;
