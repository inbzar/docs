const commonOptions = {
    loaded: true,
    isPathHref: true,
};
export function sidebarAttachHrefCommonOptions(sidebar) {
    return sidebar.map((item) => (Object.assign(Object.assign(Object.assign({}, commonOptions), item), { children: sidebarAttachHrefCommonOptions(item.children || []) })));
}
