import { navbarItems } from "..";
export function getNavbarItems({ basePath, activePath, }) {
    return navbarItems.map((item) => (Object.assign(Object.assign({}, item), { isActive: activePath === item.href, href: `${basePath}${item.href}` })));
}
