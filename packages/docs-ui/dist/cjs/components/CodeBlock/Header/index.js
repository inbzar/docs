"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlockHeader = void 0;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const providers_1 = require("../../../providers");
const components_1 = require("../../../components");
const CodeBlockHeader = ({ children, title, blockStyle = "loud", badgeLabel, badgeColor, }) => {
    const { colorMode } = (0, providers_1.useColorMode)();
    const borderColor = (0, react_1.useMemo)(() => (0, clsx_1.default)(blockStyle === "loud" && [
        colorMode === "light" && "border-medusa-code-border",
        colorMode === "dark" && "border-medusa-border-base",
    ], blockStyle === "subtle" && [
        colorMode === "light" && "border-medusa-border-base",
        colorMode === "dark" && "border-medusa-code-border",
    ]), [blockStyle, colorMode]);
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("py-docs_0.75 rounded-t-docs_DEFAULT px-docs_1 mb-0", "flex gap-docs_2 items-start justify-between", blockStyle === "loud" && [
            colorMode === "light" && "bg-medusa-code-bg-header",
            colorMode === "dark" && "bg-medusa-bg-base",
        ], blockStyle === "subtle" && [
            colorMode === "light" && "bg-medusa-bg-component",
            colorMode === "dark" && "bg-medusa-code-bg-header",
        ], borderColor && `border border-b-0 ${borderColor}`) },
        children,
        title && (react_1.default.createElement("div", { className: (0, clsx_1.default)("txt-compact-small-plus", blockStyle === "loud" && [
                colorMode === "light" && "text-medusa-code-text-subtle",
                colorMode === "dark" && "text-medusa-fg-muted",
            ], blockStyle === "subtle" && [
                colorMode === "light" && "text-medusa-fg-subtle",
                colorMode === "dark" && "text-medusa-code-text-subtle",
            ]) }, title)),
        badgeLabel && (react_1.default.createElement(components_1.Badge, { variant: badgeColor || "orange", className: "font-base" }, badgeLabel))));
};
exports.CodeBlockHeader = CodeBlockHeader;
