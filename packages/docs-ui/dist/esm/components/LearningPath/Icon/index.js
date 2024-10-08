"use client";
import clsx from "clsx";
import React from "react";
import { useLearningPath } from "../../..";
export const LearningPathIcon = ({ className = "", imgClassName = "", }) => {
    const { baseUrl } = useLearningPath();
    return (React.createElement("div", { className: clsx("rounded-full shadow-card-rest dark:shadow-card-rest-dark w-docs_3 h-docs_3 bg-medusa-bg-base", "flex justify-center items-center flex-none", className) },
        React.createElement("img", { src: `${baseUrl}/images/learning-path-img.png`, className: clsx("rounded-full w-docs_2.5 h-docs_2.5", imgClassName) })));
};
