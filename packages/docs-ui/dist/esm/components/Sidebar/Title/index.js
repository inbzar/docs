import React from "react";
import Link from "next/link";
import clsx from "clsx";
export const SidebarTitle = ({ item }) => {
    return (React.createElement(Link, Object.assign({ className: clsx("flex items-center justify-between gap-docs_0.5 rounded-docs_sm px-docs_0.5 py-[6px] hover:no-underline", "border border-transparent", "text-medusa-fg-subtle text-medium-plus"), href: item.isPathHref && item.path ? item.path : `#${item.path}`, replace: !item.isPathHref, shallow: !item.isPathHref }, item.linkProps),
        React.createElement("span", null, item.childSidebarTitle || item.title),
        item.additionalElms));
};
