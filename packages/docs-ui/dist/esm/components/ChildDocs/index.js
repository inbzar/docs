"use client";
import React from "react";
import { Card, CardList, MDXComponents, useSidebar } from "../..";
export const ChildDocs = ({ onlyTopLevel = false }) => {
    const { currentItems } = useSidebar();
    const getTopLevelElms = (items) => (React.createElement(CardList, { items: (items === null || items === void 0 ? void 0 : items.map((childItem) => ({
            title: childItem.title,
            href: childItem.path,
            showLinkIcon: false,
        }))) || [] }));
    const getAllLevelsElms = (items) => items === null || items === void 0 ? void 0 : items.map((item, key) => {
        var _a, _b;
        const HeadingComponent = ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)
            ? MDXComponents["h2"]
            : undefined;
        return (React.createElement(React.Fragment, { key: key },
            HeadingComponent && (React.createElement(React.Fragment, null,
                React.createElement(HeadingComponent, null, item.title),
                React.createElement(CardList, { items: ((_b = item.children) === null || _b === void 0 ? void 0 : _b.map((childItem) => ({
                        title: childItem.title,
                        href: childItem.path,
                        showLinkIcon: false,
                    }))) || [] }))),
            !HeadingComponent && (React.createElement(Card, { title: item.title, href: item.path, showLinkIcon: false }))));
    });
    const getElms = (items) => {
        return onlyTopLevel ? getTopLevelElms(items) : getAllLevelsElms(items);
    };
    return (React.createElement(React.Fragment, null,
        getElms(currentItems === null || currentItems === void 0 ? void 0 : currentItems.top),
        getElms(currentItems === null || currentItems === void 0 ? void 0 : currentItems.bottom)));
};
