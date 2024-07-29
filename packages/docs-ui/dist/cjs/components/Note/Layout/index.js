"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteLayout = void 0;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const NoteLayout = ({ type, title, children, icon, }) => {
    const isDefaultStyle = type === "default" ||
        type === "success" ||
        type === "error" ||
        type === "check";
    const isWarningStyle = type === "warning";
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("p-docs_1 border border-solid  rounded shadow-none", isDefaultStyle &&
            "bg-medusa-tag-neutral-bg border-medusa-tag-neutral-border", isWarningStyle && "bg-medusa-tag-red-bg border-medusa-tag-red-border", "[&_a]:no-underline [&_a]:text-medusa-fg-interactive hover:[&_a]:text-medusa-fg-interactive-hover ", "mb-docs_2 alert") },
        react_1.default.createElement("div", { className: (0, clsx_1.default)("flex") },
            react_1.default.createElement("span", { className: (0, clsx_1.default)("inline-block h-1.5 w-1.5 mr-1") }, icon),
            react_1.default.createElement("div", { className: (0, clsx_1.default)(isDefaultStyle && "text-medusa-tag-neutral-text", isWarningStyle && "text-medusa-tag-red-text", "text-medium flex-1 [&>*:last-child]:mb-0", "[&>p>code]:px-docs_0.5 [&>p>code]:text-code-label") },
                title && (react_1.default.createElement("span", { className: (0, clsx_1.default)("text-compact-medium-plus block mb-docs_0.125", isDefaultStyle && "text-medusa-fg-base", isWarningStyle && "text-medusa-tag-red-text") }, title)),
                children))));
};
exports.NoteLayout = NoteLayout;
