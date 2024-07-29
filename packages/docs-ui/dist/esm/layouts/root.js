import React from "react";
import clsx from "clsx";
import { Sidebar } from "../components";
export const RootLayout = ({ ProvidersComponent, NavbarComponent, children, sidebarProps, htmlClassName, bodyClassName, mainWrapperClasses, }) => {
    return (React.createElement("html", { lang: "en", className: clsx("h-full w-full", htmlClassName) },
        React.createElement("head", null),
        React.createElement("body", { className: clsx("bg-docs-bg font-base text-medium w-full", "text-medusa-fg-subtle", "h-screen overflow-hidden", bodyClassName) },
            React.createElement(ProvidersComponent, null,
                React.createElement(NavbarComponent, null),
                React.createElement("div", { className: "w-full h-[calc(100%-57px)] overflow-y-scroll overflow-x-hidden", id: "main" },
                    React.createElement("div", { className: clsx("max-w-xxl w-full", mainWrapperClasses) },
                        React.createElement(Sidebar, Object.assign({}, sidebarProps)),
                        children))))));
};
