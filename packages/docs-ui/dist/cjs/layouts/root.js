"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootLayout = void 0;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const components_1 = require("../components");
const RootLayout = ({ ProvidersComponent, NavbarComponent, children, sidebarProps, htmlClassName, bodyClassName, mainWrapperClasses, }) => {
    return (react_1.default.createElement("html", { lang: "en", className: (0, clsx_1.default)("h-full w-full", htmlClassName) },
        react_1.default.createElement("head", null),
        react_1.default.createElement("body", { className: (0, clsx_1.default)("bg-docs-bg font-base text-medium w-full", "text-medusa-fg-subtle", "h-screen overflow-hidden", bodyClassName) },
            react_1.default.createElement(ProvidersComponent, null,
                react_1.default.createElement(NavbarComponent, null),
                react_1.default.createElement("div", { className: "w-full h-[calc(100%-57px)] overflow-y-scroll overflow-x-hidden", id: "main" },
                    react_1.default.createElement("div", { className: (0, clsx_1.default)("max-w-xxl w-full", mainWrapperClasses) },
                        react_1.default.createElement(components_1.Sidebar, Object.assign({}, sidebarProps)),
                        children))))));
};
exports.RootLayout = RootLayout;
