"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNavbarItems = getNavbarItems;
const __1 = require("..");
function getNavbarItems({ basePath, activePath, }) {
    return __1.navbarItems.map((item) => (Object.assign(Object.assign({}, item), { isActive: activePath === item.href, href: `${basePath}${item.href}` })));
}
