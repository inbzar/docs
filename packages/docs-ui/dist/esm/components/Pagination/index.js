"use client";
import React from "react";
import { usePagination } from "../../providers";
import { Card } from "../Card";
import { ChevronLeft, ChevronRight } from "@medusajs/icons";
export const Pagination = () => {
    const { previousPage, nextPage } = usePagination();
    return (React.createElement("div", { className: "flex justify-between" },
        previousPage && (React.createElement(Card, { title: previousPage.title, startIcon: React.createElement(ChevronLeft, null), showLinkIcon: false, href: previousPage.link, className: "max-w-[45%] ml-0 mr-auto" })),
        nextPage && (React.createElement(Card, { title: nextPage.title, endIcon: React.createElement(ChevronRight, null), showLinkIcon: false, href: nextPage.link, className: "max-w-[45%] mr-0 ml-auto" }))));
};
