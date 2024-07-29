"use client";
import React from "react";
import { useScrollPositionBlocker } from "../../../hooks";
import { useColorMode } from "../../../providers";
import clsx from "clsx";
export const CodeTab = ({ label, value, isSelected = false, blockStyle = "loud", changeSelectedTab, pushRef, }) => {
    const { colorMode } = useColorMode();
    const { blockElementScrollPositionUntilNextRender } = useScrollPositionBlocker();
    return (React.createElement("li", null,
        React.createElement("button", { className: clsx("text-compact-small-plus xs:border-0 py-docs_0.25 px-docs_0.75 relative rounded-full border", !isSelected && [
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
