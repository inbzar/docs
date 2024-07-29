import React from "react";
import { Button } from "../..";
export const EditButton = ({ filePath }) => {
    return (React.createElement(Button, { variant: "secondary", className: "mb-docs_1" },
        React.createElement("a", { href: `https://github.com/medusajs/medusa/edit/develop${filePath}` }, "Edit this page")));
};
