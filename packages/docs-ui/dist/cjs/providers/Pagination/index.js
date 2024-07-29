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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = exports.PaginationProvider = exports.PaginationContext = void 0;
const react_1 = __importStar(require("react"));
const Sidebar_1 = require("../Sidebar");
const usehooks_1 = require("@uidotdev/usehooks");
exports.PaginationContext = (0, react_1.createContext)(null);
const PaginationProvider = ({ children }) => {
    const { items, activePath } = (0, Sidebar_1.useSidebar)();
    const combinedItems = (0, react_1.useMemo)(() => [...items.top, ...items.bottom], [items]);
    const previousActivePath = (0, usehooks_1.usePrevious)(activePath);
    const [nextPage, setNextPage] = (0, react_1.useState)();
    const [prevPage, setPrevPage] = (0, react_1.useState)();
    const getFirstChild = (item) => {
        const children = getChildrenWithPages(item);
        if (!(children === null || children === void 0 ? void 0 : children.length)) {
            return undefined;
        }
        return children[0].path ? children[0] : getFirstChild(children[0]);
    };
    const getChildrenWithPages = (item) => {
        var _a;
        return (_a = item.children) === null || _a === void 0 ? void 0 : _a.filter((childItem) => { var _a; return childItem.path !== undefined || ((_a = getChildrenWithPages(childItem)) === null || _a === void 0 ? void 0 : _a.length); });
    };
    const getPrevItem = (items, index) => {
        let foundItem;
        items
            .slice(0, index)
            .reverse()
            .some((item) => {
            var _a;
            if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                foundItem = getPrevItem(item.children, item.children.length);
            }
            else if (item.path) {
                foundItem = item;
            }
            return foundItem !== undefined;
        });
        return foundItem;
    };
    const getNextItem = (items, index) => {
        let foundItem;
        items.slice(index + 1).some((item) => {
            var _a;
            if (item.path) {
                foundItem = item;
            }
            else if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                foundItem = getNextItem(item.children, -1);
            }
            return foundItem !== undefined;
        });
        return foundItem;
    };
    const searchItems = (currentItems) => {
        const result = {
            foundActive: false,
        };
        result.foundActive = currentItems.some((item, index) => {
            var _a, _b;
            if (item.path === activePath) {
                if (index !== 0) {
                    result.prevItem = getPrevItem(currentItems, index);
                }
                if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                    result.nextItem = getFirstChild(item);
                }
                if (!result.nextItem && index !== currentItems.length - 1) {
                    result.nextItem = getNextItem(currentItems, index);
                }
                return true;
            }
            if ((_b = item.children) === null || _b === void 0 ? void 0 : _b.length) {
                const childrenResult = searchItems(item.children);
                if (childrenResult.foundActive) {
                    result.prevItem = childrenResult.prevItem;
                    result.nextItem = childrenResult.nextItem;
                    if (!result.prevItem) {
                        result.prevItem = item.path
                            ? item
                            : getPrevItem(currentItems, index);
                    }
                    if (!result.nextItem && index !== currentItems.length - 1) {
                        result.nextItem = getNextItem(currentItems, index);
                    }
                    return true;
                }
            }
            return false;
        });
        return result;
    };
    (0, react_1.useEffect)(() => {
        if (activePath !== previousActivePath) {
            const result = searchItems(combinedItems);
            setPrevPage(result.prevItem
                ? {
                    title: result.prevItem.title,
                    link: result.prevItem.path || "",
                }
                : undefined);
            setNextPage(result.nextItem
                ? {
                    title: result.nextItem.title,
                    link: result.nextItem.path || "",
                }
                : undefined);
        }
    }, [activePath, previousActivePath]);
    return (react_1.default.createElement(exports.PaginationContext.Provider, { value: {
            previousPage: prevPage,
            nextPage,
        } }, children));
};
exports.PaginationProvider = PaginationProvider;
const usePagination = () => {
    const context = (0, react_1.useContext)(exports.PaginationContext);
    if (!context) {
        throw new Error("usePagination must be used inside a PaginationProvider");
    }
    return context;
};
exports.usePagination = usePagination;
