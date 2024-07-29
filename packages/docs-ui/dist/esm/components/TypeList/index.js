var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import clsx from "clsx";
import React, { Suspense, lazy } from "react";
import { Loading } from "../../components";
const TypeListItems = lazy(() => __awaiter(void 0, void 0, void 0, function* () { return import("./Items"); }));
export const TypeList = (_a) => {
    var { types, className, siteUrl, sectionTitle, expandUrl, pathname } = _a, props = __rest(_a, ["types", "className", "siteUrl", "sectionTitle", "expandUrl", "pathname"]);
    return (React.createElement("div", Object.assign({ className: clsx("bg-docs-bg-surface shadow-card-rest rounded my-docs_1", className) }, props),
        React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
            React.createElement(TypeListItems, { types: types, expandUrl: expandUrl, sectionTitle: sectionTitle, siteUrl: siteUrl, pathname: pathname }))));
};
