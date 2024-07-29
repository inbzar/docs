import React from "react";
import clsx from "clsx";
export const NoteLayout = ({ type, title, children, icon, }) => {
    const isDefaultStyle = type === "default" ||
        type === "success" ||
        type === "error" ||
        type === "check";
    const isWarningStyle = type === "warning";
    return (React.createElement("div", { className: clsx("p-docs_1 border border-solid  rounded shadow-none", isDefaultStyle &&
            "bg-medusa-tag-neutral-bg border-medusa-tag-neutral-border", isWarningStyle && "bg-medusa-tag-red-bg border-medusa-tag-red-border", "[&_a]:no-underline [&_a]:text-medusa-fg-interactive hover:[&_a]:text-medusa-fg-interactive-hover ", "mb-docs_2 alert") },
        React.createElement("div", { className: clsx("flex") },
            React.createElement("span", { className: clsx("inline-block h-1.5 w-1.5 mr-1") }, icon),
            React.createElement("div", { className: clsx(isDefaultStyle && "text-medusa-tag-neutral-text", isWarningStyle && "text-medusa-tag-red-text", "text-medium flex-1 [&>*:last-child]:mb-0", "[&>p>code]:px-docs_0.5 [&>p>code]:text-code-label") },
                title && (React.createElement("span", { className: clsx("text-compact-medium-plus block mb-docs_0.125", isDefaultStyle && "text-medusa-fg-base", isWarningStyle && "text-medusa-tag-red-text") }, title)),
                children))));
};
