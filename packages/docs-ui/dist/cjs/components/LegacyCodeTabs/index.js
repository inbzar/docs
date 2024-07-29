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
exports.LegacyCodeTabs = void 0;
const components_1 = require("../../components");
const hooks_1 = require("../../hooks");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const providers_1 = require("../../providers");
const Header_1 = require("../CodeBlock/Header");
const LegacyCodeTabs = ({ tabs, className, group = "client", title, blockStyle = "loud", }) => {
    var _a;
    const { colorMode } = (0, providers_1.useColorMode)();
    const { selectedTab, changeSelectedTab } = (0, hooks_1.useTabs)({
        tabs,
        group,
    });
    const tabRefs = (0, react_1.useMemo)(() => [], []);
    const codeTabSelectorRef = (0, react_1.useRef)(null);
    const codeTabsWrapperRef = (0, react_1.useRef)(null);
    const { blockElementScrollPositionUntilNextRender } = (0, hooks_1.useScrollPositionBlocker)();
    const changeTabSelectorCoordinates = (0, react_1.useCallback)((selectedTabElm) => {
        if (!(codeTabSelectorRef === null || codeTabSelectorRef === void 0 ? void 0 : codeTabSelectorRef.current) || !(codeTabsWrapperRef === null || codeTabsWrapperRef === void 0 ? void 0 : codeTabsWrapperRef.current)) {
            return;
        }
        const selectedTabsCoordinates = selectedTabElm.getBoundingClientRect();
        const tabsWrapperCoordinates = codeTabsWrapperRef.current.getBoundingClientRect();
        codeTabSelectorRef.current.style.left = `${selectedTabsCoordinates.left - tabsWrapperCoordinates.left}px`;
        codeTabSelectorRef.current.style.width = `${selectedTabsCoordinates.width}px`;
        codeTabSelectorRef.current.style.height = `${selectedTabsCoordinates.height}px`;
    }, []);
    (0, react_1.useEffect)(() => {
        if ((codeTabSelectorRef === null || codeTabSelectorRef === void 0 ? void 0 : codeTabSelectorRef.current) && tabRefs.length) {
            const selectedTabElm = tabRefs.find((tab) => (tab === null || tab === void 0 ? void 0 : tab.getAttribute("aria-selected")) === "true");
            if (selectedTabElm) {
                changeTabSelectorCoordinates(selectedTabElm.parentElement || selectedTabElm);
            }
        }
    }, [codeTabSelectorRef, tabRefs, changeTabSelectorCoordinates, selectedTab]);
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("relative my-docs_1 w-full max-w-full overflow-auto", className), ref: codeTabsWrapperRef },
        react_1.default.createElement("span", { className: (0, clsx_1.default)("xs:absolute xs:border xs:border-solid", "xs:transition-all xs:duration-200 xs:ease-ease xs:top-[13px] xs:rounded-full", blockStyle === "loud" && [
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
        react_1.default.createElement(Header_1.CodeBlockHeader, { title: ((_a = selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.code) === null || _a === void 0 ? void 0 : _a.title) || title },
            react_1.default.createElement("ul", { className: (0, clsx_1.default)("!list-none flex gap-docs_0.25 items-center", "p-0 mb-0") }, tabs.map((tab, index) => (react_1.default.createElement("li", { key: index },
                react_1.default.createElement("button", { className: (0, clsx_1.default)("text-compact-small-plus xs:border-0 py-docs_0.25 px-docs_0.75 relative rounded-full border", (!selectedTab || selectedTab.value !== tab.value) && [
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
        react_1.default.createElement(react_1.default.Fragment, null,
            (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.code) && (react_1.default.createElement(components_1.CodeBlock, Object.assign({}, selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.code, { title: undefined, className: (0, clsx_1.default)("!mt-0 !rounded-t-none", selectedTab.code.className) }))),
            (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.codeBlock) && react_1.default.createElement(react_1.default.Fragment, null, selectedTab.codeBlock))));
};
exports.LegacyCodeTabs = LegacyCodeTabs;
