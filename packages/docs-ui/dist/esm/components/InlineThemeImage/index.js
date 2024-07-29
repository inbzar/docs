import React from "react";
import clsx from "clsx";
import { ThemeImage } from "../..";
export const InlineThemeImage = (props) => {
    return (React.createElement(ThemeImage, Object.assign({}, props, { width: 20, height: 20, className: clsx(props.className, "inline") })));
};
