var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import clsx from "clsx";
export const InlineIcon = (_a) => {
    var { Icon, alt } = _a, props = __rest(_a, ["Icon", "alt"]);
    return (React.createElement(Icon, Object.assign({}, props, { className: clsx("text-medusa-fg-subtle inline", props.className), "aria-label": alt })));
};
