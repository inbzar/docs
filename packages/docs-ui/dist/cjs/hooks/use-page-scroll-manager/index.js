"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageScrollManager = void 0;
const navigation_1 = require("next/navigation");
const use_scroll_utils_1 = require("../use-scroll-utils");
const react_1 = require("react");
const utils_1 = require("../../utils");
const usePageScrollManager = () => {
    const pathname = (0, navigation_1.usePathname)();
    const { scrollableElement } = (0, use_scroll_utils_1.useScrollController)();
    const [checkedPageReload, setCheckedPageReload] = (0, react_1.useState)(false);
    const isPageReloaded = () => (window.performance.navigation &&
        window.performance.navigation.type === 1) ||
        window.performance
            .getEntriesByType("navigation")
            .map((nav) => nav.type)
            .includes("reload");
    (0, react_1.useEffect)(() => {
        if (!scrollableElement || !checkedPageReload) {
            return;
        }
        if ((0, utils_1.getScrolledTop)(scrollableElement) !== 0 && !location.hash) {
            scrollableElement === null || scrollableElement === void 0 ? void 0 : scrollableElement.scrollTo({
                top: 0,
            });
        }
        else if (location.hash) {
            // retrieve and scroll to element
            const targetElm = scrollableElement && typeof document !== "undefined"
                ? document.getElementById(location.hash.replace("#", ""))
                : undefined;
            targetElm === null || targetElm === void 0 ? void 0 : targetElm.scrollIntoView();
        }
    }, [pathname, scrollableElement]);
    (0, react_1.useEffect)(() => {
        if (!scrollableElement || checkedPageReload) {
            return;
        }
        if (isPageReloaded()) {
            const loadedScrollPosition = localStorage.getItem("scrollPos");
            if (loadedScrollPosition) {
                scrollableElement === null || scrollableElement === void 0 ? void 0 : scrollableElement.scrollTo({
                    top: parseInt(loadedScrollPosition),
                });
            }
            localStorage.removeItem("scrollPos");
        }
        setCheckedPageReload(true);
        window.addEventListener("beforeunload", () => {
            const scrollPos = (0, utils_1.isElmWindow)(scrollableElement)
                ? scrollableElement.screenY
                : scrollableElement === null || scrollableElement === void 0 ? void 0 : scrollableElement.scrollTop;
            if (scrollPos) {
                localStorage.setItem("scrollPos", `${(0, utils_1.isElmWindow)(scrollableElement)
                    ? scrollableElement.screenY
                    : scrollableElement === null || scrollableElement === void 0 ? void 0 : scrollableElement.scrollTop}`);
            }
        });
    }, [scrollableElement]);
};
exports.usePageScrollManager = usePageScrollManager;
