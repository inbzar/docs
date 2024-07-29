"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkWithBasePath = getLinkWithBasePath;
function getLinkWithBasePath(path, basePath) {
    return `${basePath || ""}${path}`;
}
