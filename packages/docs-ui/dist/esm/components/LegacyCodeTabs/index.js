"use client";
import { CodeBlock } from "../../components";
import { useScrollPositionBlocker, useTabs } from "../../hooks";
import clsx from "clsx";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useColorMode } from "../../providers";
import { CodeBlockHeader } from "../CodeBlock/Header";
export const LegacyCodeTabs = ({ tabs, className, group = "client", title, blockStyle = "loud", }) => {
    var _a;
    const { colorMode } = useColorMode();
    const { selectedTab, changeSelectedTab } = useTabs({
        tabs,
        group,
    });
    const tabRefs = useMemo(() => [], []);
    const codeTabSelectorRef = useRef(null);
    const codeTabsWrapperRef = useRef(null);
    const { blockElementScrollPositionUntilNextRender } = useScrollPositionBlocker();
    const changeTabSelectorCoordinates = useCallback((selectedTabElm) => {
        if (!(codeTabSelectorRef === null || codeTabSelectorRef === void 0 ? void 0 : codeTabSelectorRef.current) || !(codeTabsWrapperRef === null || codeTabsWrapperRef === void 0 ? void 0 : codeTabsWrapperRef.current)) {
            return;
        }
        const selectedTabsCoordinates = selectedTabElm.getBoundingClientRect();
        const tabsWrapperCoordinates = codeTabsWrapperRef.current.getBoundingClientRect();
        codeTabSelectorRef.current.style.left = `${selectedTabsCoordinates.left - tabsWrapperCoordinates.left}px`;
        codeTabSelectorRef.current.style.width = `${selectedTabsCoordinates.width}px`;
        codeTabSelectorRef.current.style.height = `${selectedTabsCoordinates.height}px`;
    }, []);
    useEffect(() => {
        if ((codeTabSelectorRef === null || codeTabSelectorRef === void 0 ? void 0 : codeTabSelectorRef.current) && tabRefs.length) {
            const selectedTabElm = tabRefs.find((tab) => (tab === null || tab === void 0 ? void 0 : tab.getAttribute("aria-selected")) === "true");
            if (selectedTabElm) {
                changeTabSelectorCoordinates(selectedTabElm.parentElement || selectedTabElm);
            }
        }
    }, [codeTabSelectorRef, tabRefs, changeTabSelectorCoordinates, selectedTab]);
    return (React.createElement("div", { className: clsx("relative my-docs_1 w-full max-w-full overflow-auto", className), ref: codeTabsWrapperRef },
        React.createElement("span", { className: clsx("xs:absolute xs:border xs:border-solid", "xs:transition-all xs:duration-200 xs:ease-ease xs:top-[13px] xs:rounded-full", blockStyle === "loud" && [
                colorMode === "light" &&
                    "xs:border-medusa-code-border xs:bg-medusa-code-bg-base",
                colorMode === "dark" &&
                    "xs:border-medusa-border-base xs:bg-medusa-bg-component",
            ], blockStyle === "subtle" && [
                colorMode === "light" &&
                    "xs:border-medusa-border-base xs:bg-medusa-bg-base",
                colorMode === "dark" &&
                    "xs:border-medusa-code-border xs:bg-medusa-code-bg-base",
            ]), ref: codeTabSelectorRef }),
        React.createElement(CodeBlockHeader, { title: ((_a = selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.code) === null || _a === void 0 ? void 0 : _a.title) || title },
            React.createElement("ul", { className: clsx("!list-none flex gap-docs_0.25 items-center", "p-0 mb-0") }, tabs.map((tab, index) => (React.createElement("li", { key: index },
                React.createElement("button", { className: clsx("text-compact-small-plus xs:border-0 py-docs_0.25 px-docs_0.75 relative rounded-full border", (!selectedTab || selectedTab.value !== tab.value) && [
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
                    ], (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.value) === tab.value && [
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
                    ]), ref: (tabControl) => tabRefs.push(tabControl), onClick: (e) => {
                        blockElementScrollPositionUntilNextRender(e.target);
                        changeSelectedTab(tab);
                    }, "aria-selected": (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.value) === tab.value, role: "tab" }, tab.label)))))),
        React.createElement(React.Fragment, null,
            (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.code) && (React.createElement(CodeBlock, Object.assign({}, selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.code, { title: undefined, className: clsx("!mt-0 !rounded-t-none", selectedTab.code.className) }))),
            (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.codeBlock) && React.createElement(React.Fragment, null, selectedTab.codeBlock))));
};
