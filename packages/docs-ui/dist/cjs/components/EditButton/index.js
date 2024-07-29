"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditButton = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
const EditButton = ({ filePath }) => {
    return (react_1.default.createElement(__1.Button, { variant: "secondary", className: "mb-docs_1" },
        react_1.default.createElement("a", { href: `https://github.com/medusajs/medusa/edit/develop${filePath}` }, "Edit this page")));
};
exports.EditButton = EditButton;
