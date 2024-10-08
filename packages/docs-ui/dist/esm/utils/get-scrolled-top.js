import { isElmWindow } from "./is-elm-window";
export function getScrolledTop(elm) {
    if (!elm) {
        return 0;
    }
    return isElmWindow(elm) ? elm.scrollY : elm.scrollTop;
}
