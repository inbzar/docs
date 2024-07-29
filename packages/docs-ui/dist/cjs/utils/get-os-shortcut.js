"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOsShortcut = getOsShortcut;
function getOsShortcut() {
    const isMacOs = typeof navigator !== "undefined"
        ? navigator.userAgent.toLowerCase().indexOf("mac") !== 0
        : true;
    return isMacOs ? "⌘" : "Ctrl";
}
