"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsBrowser = void 0;
const react_1 = require("react");
const useIsBrowser = () => {
    const [isBrowser, setIsBrowser] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsBrowser(typeof window !== "undefined");
    }, []);
    return isBrowser;
};
exports.useIsBrowser = useIsBrowser;
