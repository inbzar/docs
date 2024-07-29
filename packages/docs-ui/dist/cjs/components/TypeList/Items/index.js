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
const react_1 = __importStar(require("react"));
const components_1 = require("../../../components");
const clsx_1 = __importDefault(require("clsx"));
const icons_1 = require("@medusajs/icons");
const utils_1 = require("../../../utils");
const __1 = require("../../..");
const TypeListItem = ({ typeItem, level = 1, expandUrl, elementKey, sectionTitle, siteUrl = "", pathname, }) => {
    var _a, _b;
    const isBrowser = (0, __1.useIsBrowser)();
    const groupName = (0, react_1.useMemo)(() => {
        switch (level) {
            case 1:
                return "group/typeOne";
            case 2:
                return "group/typeTwo";
            case 3:
                return "group/typeThree";
            case 4:
                return "group/typeFour";
        }
    }, [level]);
    const borderForGroupName = (0, react_1.useMemo)(() => {
        switch (level) {
            case 1:
                return "group-open/typeOne:border-solid group-open/typeOne:border-0 group-open/typeOne:border-b";
            case 2:
                return "group-open/typeTwo:border-solid group-open/typeTwo:border-0 group-open/typeTwo:border-b";
            case 3:
                return "group-open/typeThree:border-solid group-open/typeThree:border-0 group-open/typeThree:border-b";
            case 4:
                return "group-open/typeFour:border-solid group-open/typeFour:border-0 group-open/typeFour:border-b";
        }
    }, [level]);
    const rotateForGroupName = (0, react_1.useMemo)(() => {
        switch (level) {
            case 1:
                return "group-open/typeOne:rotate-90";
            case 2:
                return "group-open/typeTwo:rotate-90";
            case 3:
                return "group-open/typeThree:rotate-90";
            case 4:
                return "group-open/typeFour:rotate-90";
        }
    }, [level]);
    function getItemClassNames(details = true) {
        return (0, clsx_1.default)("odd:[&:not(:first-child):not(:last-child)]:!border-y last:not(:first-child):!border-t", "first:!border-t-0 first:not(:last-child):!border-b last:!border-b-0 even:!border-y-0", details && groupName, !details && borderForGroupName);
    }
    const formatId = (str) => {
        return str.replaceAll(" ", "_");
    };
    const typeId = (0, react_1.useMemo)(() => {
        return sectionTitle
            ? `#${formatId(sectionTitle)}-${formatId(typeItem.name)}-${level}-${elementKey}`
            : "";
    }, [sectionTitle, typeItem, elementKey]);
    const typePath = (0, react_1.useMemo)(() => `${pathname}${typeId}`, [pathname, typeId]);
    const typeUrl = (0, react_1.useMemo)(() => `${siteUrl}${typePath}`, [siteUrl, typePath]);
    const ref = (0, react_1.useRef)(null);
    const [isSelected, setIsSelected] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!typeId.length || !isBrowser) {
            return;
        }
        const shouldScroll = window.location.hash === typeId;
        if (shouldScroll && !isSelected && ref.current && !(0, utils_1.isInView)(ref.current)) {
            ref.current.scrollIntoView({
                block: "center",
            });
        }
        setIsSelected(shouldScroll);
    }, [typeId, isBrowser]);
    function getSummary(item, nested = true) {
        var _a;
        return (react_1.default.createElement(components_1.DetailsSummary, { subtitle: item.description || item.defaultValue ? (react_1.default.createElement(react_1.default.Fragment, null,
                item.description && (react_1.default.createElement(components_1.MarkdownContent, { allowedElements: ["a", "strong", "code", "ul", "ol", "li"], unwrapDisallowed: true, className: "text-medium" }, item.description)),
                item.defaultValue && (react_1.default.createElement("p", { className: "mt-0.5 mb-0" },
                    "Default: ",
                    react_1.default.createElement(components_1.InlineCode, null, item.defaultValue))))) : undefined, expandable: (((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0, hideExpandableIcon: true, className: (0, clsx_1.default)(getItemClassNames(false), "py-1 pr-1", level === 1 && "pl-1", level === 2 && "pl-3", level === 3 && "pl-[120px]", level === 4 && "pl-[160px]", !nested && "cursor-auto", isSelected && "animate-flash animate-bg-surface"), onClick: (e) => {
                const targetElm = e.target;
                if (targetElm.tagName.toLowerCase() === "a") {
                    window.location.href =
                        targetElm.getAttribute("href") || window.location.href;
                    return;
                }
            }, summaryRef: !nested ? ref : undefined, id: !nested && typeId ? typeId : "" },
            react_1.default.createElement("div", { className: "flex gap-0.5" },
                nested && (react_1.default.createElement(icons_1.TriangleRightMini, { className: (0, clsx_1.default)("text-medusa-fg-subtle transition-transform", rotateForGroupName) })),
                !nested && level > 1 && (react_1.default.createElement(icons_1.ArrowDownLeftMini, { className: (0, clsx_1.default)("text-medusa-fg-subtle flip-y") })),
                level === 1 && typeId.length > 0 && (react_1.default.createElement(components_1.CopyButton, { text: typeUrl, onCopy: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    } },
                    react_1.default.createElement(icons_1.Link, { className: (0, clsx_1.default)("text-medusa-fg-interactive hover:text-medusa-fg-interactive-hover") }))),
                react_1.default.createElement("div", { className: "flex gap-0.75 flex-wrap" },
                    react_1.default.createElement(components_1.InlineCode, null, (0, utils_1.decodeStr)(item.name)),
                    react_1.default.createElement("span", { className: "font-monospace text-compact-small-plus text-medusa-fg-subtle" },
                        react_1.default.createElement(components_1.MarkdownContent, { allowedElements: ["a"], unwrapDisallowed: true }, item.type)),
                    item.optional === false && (react_1.default.createElement("span", { className: (0, clsx_1.default)("text-compact-x-small-plus uppercase", "text-medusa-fg-error") }, "Required")),
                    item.featureFlag && (react_1.default.createElement(components_1.FeatureFlagNotice, { featureFlag: item.featureFlag, type: "type", badgeClassName: "!p-0 leading-none", badgeContent: react_1.default.createElement(icons_1.FlagMini, { className: "!text-medusa-tag-green-text" }) })),
                    item.expandable && (react_1.default.createElement(components_1.ExpandableNotice, { type: "method", link: expandUrl || "#", badgeClassName: "!p-0 leading-none", badgeContent: react_1.default.createElement(icons_1.ArrowsPointingOutMini, null) }))))));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        (((_a = typeItem.children) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0 && (react_1.default.createElement(components_1.Details, { summaryElm: getSummary(typeItem), className: (0, clsx_1.default)(getItemClassNames()), heightAnimation: true, id: typeId ? typeId : "" }, typeItem.children && (react_1.default.createElement(TypeListItems, { types: typeItem.children, level: level + 1, expandUrl: expandUrl })))),
        (((_b = typeItem.children) === null || _b === void 0 ? void 0 : _b.length) || 0) === 0 && getSummary(typeItem, false)));
};
const TypeListItems = (_a) => {
    var { types } = _a, rest = __rest(_a, ["types"]);
    return (react_1.default.createElement("div", null, types.map((typeItem, key) => (react_1.default.createElement(TypeListItem, Object.assign({ typeItem: typeItem, key: key, elementKey: key }, rest))))));
};
exports.default = TypeListItems;
