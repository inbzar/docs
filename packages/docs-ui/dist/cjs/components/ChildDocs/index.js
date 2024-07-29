"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildDocs = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
const ChildDocs = ({ onlyTopLevel = false }) => {
    const { currentItems } = (0, __1.useSidebar)();
    const getTopLevelElms = (items) => (react_1.default.createElement(__1.CardList, { items: (items === null || items === void 0 ? void 0 : items.map((childItem) => ({
            title: childItem.title,
            href: childItem.path,
            showLinkIcon: false,
        }))) || [] }));
    const getAllLevelsElms = (items) => items === null || items === void 0 ? void 0 : items.map((item, key) => {
        var _a, _b;
        const HeadingComponent = ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)
            ? __1.MDXComponents["h2"]
            : undefined;
        return (react_1.default.createElement(react_1.default.Fragment, { key: key },
            HeadingComponent && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(HeadingComponent, null, item.title),
                react_1.default.createElement(__1.CardList, { items: ((_b = item.children) === null || _b === void 0 ? void 0 : _b.map((childItem) => ({
                        title: childItem.title,
                        href: childItem.path,
                        showLinkIcon: false,
                    }))) || [] }))),
            !HeadingComponent && (react_1.default.createElement(__1.Card, { title: item.title, href: item.path, showLinkIcon: false }))));
    });
    const getElms = (items) => {
        return onlyTopLevel ? getTopLevelElms(items) : getAllLevelsElms(items);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        getElms(currentItems === null || currentItems === void 0 ? void 0 : currentItems.top),
        getElms(currentItems === null || currentItems === void 0 ? void 0 : currentItems.bottom)));
};
exports.ChildDocs = ChildDocs;
