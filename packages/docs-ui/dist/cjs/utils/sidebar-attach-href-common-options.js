"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sidebarAttachHrefCommonOptions = sidebarAttachHrefCommonOptions;
const commonOptions = {
    loaded: true,
    isPathHref: true,
};
function sidebarAttachHrefCommonOptions(sidebar) {
    return sidebar.map((item) => (Object.assign(Object.assign(Object.assign({}, commonOptions), item), { children: sidebarAttachHrefCommonOptions(item.children || []) })));
}
