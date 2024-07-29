"use client";
import { SidebarLeft, XMark } from "@medusajs/icons";
import clsx from "clsx";
import React from "react";
import { NavbarIconButton } from "../../IconButton";
export const NavbarMobileMenuButton = ({ buttonProps, mobileSidebarOpen, setMobileSidebarOpen, isLoading = false, }) => {
    return (React.createElement(NavbarIconButton, Object.assign({}, buttonProps, { className: clsx("mr-docs_1 lg:!hidden", buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), onClick: () => {
            if (!isLoading) {
                setMobileSidebarOpen((prevValue) => !prevValue);
            }
        } }),
        !mobileSidebarOpen && React.createElement(SidebarLeft, { className: "text-medusa-fg-muted" }),
        mobileSidebarOpen && React.createElement(XMark, { className: "text-medusa-fg-muted" })));
};
