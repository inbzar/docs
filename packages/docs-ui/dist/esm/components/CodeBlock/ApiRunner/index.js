"use client";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import { useRequestRunner } from "../../../hooks";
import { CodeBlock } from "..";
import { Card } from "../../Card";
import { Button, InputText } from "../../..";
export const ApiRunner = ({ apiMethod, apiUrl, pathData, bodyData, queryData, }) => {
    // assemble api testing options
    const [apiTestingOptions, setApiTestingOptions] = useState({
        method: apiMethod,
        url: apiUrl,
        pathData,
        bodyData,
        queryData,
    });
    const [isRunning, setIsRunning] = useState(false);
    const [ran, setRan] = useState(false);
    const hasData = (data) => data !== undefined && Object.keys(data).length > 0;
    // TODO change to be based on whether auth/data needed
    const manualTestTrigger = useMemo(() => hasData(apiTestingOptions.pathData) ||
        hasData(apiTestingOptions.queryData) ||
        hasData(apiTestingOptions.bodyData), [apiTestingOptions]);
    const [responseLogs, setResponseLogs] = useState([]);
    const pushMessage = (...message) => setResponseLogs((prev) => [...prev, ...message]);
    const { runRequest } = useRequestRunner({
        pushLog: pushMessage,
        onFinish: () => setIsRunning(false),
        replaceLog: (message) => setResponseLogs([message]),
    });
    useEffect(() => {
        if (!isRunning && !manualTestTrigger && !ran) {
            setIsRunning(true);
        }
    }, [apiTestingOptions, manualTestTrigger, isRunning, ran]);
    useEffect(() => {
        if (isRunning && !ran) {
            setRan(true);
            setResponseLogs(["Sending request..."]);
            runRequest(apiTestingOptions);
        }
    }, [isRunning, ran]);
    const getParamsElms = ({ data, title, nameInApiOptions, }) => (React.createElement("div", { className: "flex flex-col gap-docs_0.5" },
        React.createElement("span", { className: "text-compact-medium-plus text-medusa-fg-base" }, title),
        React.createElement("div", { className: "flex gap-docs_0.5" }, Object.keys(data).map((pathParam, index) => (React.createElement(InputText, { name: pathParam, onChange: (e) => setApiTestingOptions((prev) => (Object.assign(Object.assign({}, prev), { [nameInApiOptions]: Object.assign(Object.assign({}, prev[nameInApiOptions]), { [pathParam]: e.target.value }) }))), key: index, placeholder: pathParam, value: typeof data[pathParam] === "string"
                ? data[pathParam]
                : typeof data[pathParam] === "number"
                    ? data[pathParam]
                    : `${data[pathParam]}` }))))));
    return (React.createElement(React.Fragment, null,
        manualTestTrigger && (React.createElement(Card, { className: "font-base mb-docs_1", contentClassName: "gap-docs_0.5" },
            apiTestingOptions.pathData &&
                getParamsElms({
                    data: apiTestingOptions.pathData,
                    title: "Path Parameters",
                    nameInApiOptions: "pathData",
                }),
            apiTestingOptions.bodyData &&
                getParamsElms({
                    data: apiTestingOptions.bodyData,
                    title: "Request Body Parameters",
                    nameInApiOptions: "bodyData",
                }),
            apiTestingOptions.queryData &&
                getParamsElms({
                    data: apiTestingOptions.queryData,
                    title: "Request Query Parameters",
                    nameInApiOptions: "queryData",
                }),
            React.createElement(Button, { onClick: () => {
                    setIsRunning(true);
                    setRan(false);
                } }, "Send Request"))),
        (isRunning || ran) && (React.createElement(CodeBlock, { source: responseLogs.join("\n"), lang: "json", title: "Testing Result", collapsed: true, blockStyle: "subtle", noReport: true }))));
};
