"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isElmWindow = isElmWindow;
function isElmWindow(elm) {
    return typeof window !== "undefined" && elm === window;
}
