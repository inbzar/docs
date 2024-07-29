import React from "react";
import { Badge, LegacyLink, Tooltip } from "../../components";
export const ExpandableNotice = ({ type = "request", link, badgeContent = "expandable", badgeClassName, }) => {
    return (React.createElement(Tooltip, { tooltipChildren: React.createElement(React.Fragment, null,
            "If this ",
            type,
            " accepts an ",
            React.createElement("code", null, "expand"),
            " ",
            type === "request" ? "parameter" : "property or option",
            ",",
            React.createElement("br", null),
            " this field can be ",
            React.createElement(LegacyLink, { href: link }, "expanded"),
            " ",
            "into an object."), clickable: true },
        React.createElement(Badge, { variant: "blue", className: badgeClassName }, badgeContent)));
};
