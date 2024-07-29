"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, } from "react";
import { useSidebar } from "../Sidebar";
import { usePrevious } from "@uidotdev/usehooks";
export const PaginationContext = createContext(null);
export const PaginationProvider = ({ children }) => {
    const { items, activePath } = useSidebar();
    const combinedItems = useMemo(() => [...items.top, ...items.bottom], [items]);
    const previousActivePath = usePrevious(activePath);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
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
    useEffect(() => {
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
    return (React.createElement(PaginationContext.Provider, { value: {
            previousPage: prevPage,
            nextPage,
        } }, children));
};
export const usePagination = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error("usePagination must be used inside a PaginationProvider");
    }
    return context;
};
