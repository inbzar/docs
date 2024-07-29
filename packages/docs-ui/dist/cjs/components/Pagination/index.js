"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const react_1 = __importDefault(require("react"));
const providers_1 = require("../../providers");
const Card_1 = require("../Card");
const icons_1 = require("@medusajs/icons");
const Pagination = () => {
    const { previousPage, nextPage } = (0, providers_1.usePagination)();
    return (react_1.default.createElement("div", { className: "flex justify-between" },
        previousPage && (react_1.default.createElement(Card_1.Card, { title: previousPage.title, startIcon: react_1.default.createElement(icons_1.ChevronLeft, null), showLinkIcon: false, href: previousPage.link, className: "max-w-[45%] ml-0 mr-auto" })),
        nextPage && (react_1.default.createElement(Card_1.Card, { title: nextPage.title, endIcon: react_1.default.createElement(icons_1.ChevronRight, null), showLinkIcon: false, href: nextPage.link, className: "max-w-[45%] mr-0 ml-auto" }))));
};
exports.Pagination = Pagination;
