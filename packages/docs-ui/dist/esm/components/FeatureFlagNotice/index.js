import React from "react";
import { Badge, LegacyLink, Tooltip } from "../../components";
export const FeatureFlagNotice = ({ featureFlag, type = "endpoint", tooltipTextClassName, badgeClassName, badgeContent = "feature flag", }) => {
    return (React.createElement(Tooltip, { tooltipChildren: React.createElement("span", { className: tooltipTextClassName },
            "To use this ",
            type,
            ", make sure to",
            React.createElement("br", null),
            React.createElement(LegacyLink, { href: "https://docs.medusajs.com/development/feature-flags/toggle", target: "__blank" },
                "enable its feature flag: ",
                React.createElement("code", null, featureFlag))), clickable: true },
        React.createElement(Badge, { variant: "green", className: badgeClassName }, badgeContent)));
};
