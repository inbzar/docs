"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTab = void 0;
const react_1 = __importDefault(require("react"));
const hooks_1 = require("../../../hooks");
const providers_1 = require("../../../providers");
const clsx_1 = __importDefault(require("clsx"));
const CodeTab = ({ label, value, isSelected = false, blockStyle = "loud", changeSelectedTab, pushRef, }) => {
    const { colorMode } = (0, providers_1.useColorMode)();
    const { blockElementScrollPositionUntilNextRender } = (0, hooks_1.useScrollPositionBlocker)();
    return (react_1.default.createElement("li", null,
        react_1.default.createElement("button", { className: (0, clsx_1.default)("text-compact-small-plus xs:border-0 py-docs_0.25 px-docs_0.75 relative rounded-full border", !isSelected && [
                "text-medusa-code-text-subtle border-transparent",
                blockStyle === "loud" && [
                    colorMode === "light" &&
                        "text-medusa-code-text-subtle hover:bg-medusa-code-bg-base",
                    colorMode === "dark" &&
                        "text-medusa-fg-muted hover:bg-medusa-bg-component",
                ],
                blockStyle === "subtle" && [
                    colorMode === "light" &&
                        "text-medusa-fg-subtle hover:bg-medusa-bg-base",
                    colorMode === "dark" &&
                        "text-medusa-code-text-subtle hover:bg-medusa-code-bg-base",
                ],
            ], isSelected && [
                "xs:!bg-transparent",
                blockStyle === "loud" && [
                    colorMode === "light" &&
                        "border-medusa-code-border text-medusa-code-text-base",
                    colorMode === "dark" &&
                        "border-medusa-border-base text-medusa-fg-base",
                ],
                blockStyle === "subtle" && [
                    colorMode === "light" &&
                        "xs:border-medusa-border-base text-medusa-code-text-base",
                    colorMode === "dark" &&
                        "xs:border-medusa-code-border text-medusa-code-text-base",
                ],
            ]), ref: (tabButton) => pushRef === null || pushRef === void 0 ? void 0 : pushRef(tabButton), onClick: (e) => {
                blockElementScrollPositionUntilNextRender(e.target);
                changeSelectedTab === null || changeSelectedTab === void 0 ? void 0 : changeSelectedTab({ label, value });
            }, "aria-selected": isSelected, role: "tab" }, label)));
};
exports.CodeTab = CodeTab;
