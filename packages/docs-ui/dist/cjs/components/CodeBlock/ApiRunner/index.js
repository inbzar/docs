"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRunner = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const hooks_1 = require("../../../hooks");
const __1 = require("..");
const Card_1 = require("../../Card");
const __2 = require("../../..");
const ApiRunner = ({ apiMethod, apiUrl, pathData, bodyData, queryData, }) => {
    // assemble api testing options
    const [apiTestingOptions, setApiTestingOptions] = (0, react_2.useState)({
        method: apiMethod,
        url: apiUrl,
        pathData,
        bodyData,
        queryData,
    });
    const [isRunning, setIsRunning] = (0, react_2.useState)(false);
    const [ran, setRan] = (0, react_2.useState)(false);
    const hasData = (data) => data !== undefined && Object.keys(data).length > 0;
    // TODO change to be based on whether auth/data needed
    const manualTestTrigger = (0, react_2.useMemo)(() => hasData(apiTestingOptions.pathData) ||
        hasData(apiTestingOptions.queryData) ||
        hasData(apiTestingOptions.bodyData), [apiTestingOptions]);
    const [responseLogs, setResponseLogs] = (0, react_2.useState)([]);
    const pushMessage = (...message) => setResponseLogs((prev) => [...prev, ...message]);
    const { runRequest } = (0, hooks_1.useRequestRunner)({
        pushLog: pushMessage,
        onFinish: () => setIsRunning(false),
        replaceLog: (message) => setResponseLogs([message]),
    });
    (0, react_2.useEffect)(() => {
        if (!isRunning && !manualTestTrigger && !ran) {
            setIsRunning(true);
        }
    }, [apiTestingOptions, manualTestTrigger, isRunning, ran]);
    (0, react_2.useEffect)(() => {
        if (isRunning && !ran) {
            setRan(true);
            setResponseLogs(["Sending request..."]);
            runRequest(apiTestingOptions);
        }
    }, [isRunning, ran]);
    const getParamsElms = ({ data, title, nameInApiOptions, }) => (react_1.default.createElement("div", { className: "flex flex-col gap-docs_0.5" },
        react_1.default.createElement("span", { className: "text-compact-medium-plus text-medusa-fg-base" }, title),
        react_1.default.createElement("div", { className: "flex gap-docs_0.5" }, Object.keys(data).map((pathParam, index) => (react_1.default.createElement(__2.InputText, { name: pathParam, onChange: (e) => setApiTestingOptions((prev) => (Object.assign(Object.assign({}, prev), { [nameInApiOptions]: Object.assign(Object.assign({}, prev[nameInApiOptions]), { [pathParam]: e.target.value }) }))), key: index, placeholder: pathParam, value: typeof data[pathParam] === "string"
                ? data[pathParam]
                : typeof data[pathParam] === "number"
                    ? data[pathParam]
                    : `${data[pathParam]}` }))))));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        manualTestTrigger && (react_1.default.createElement(Card_1.Card, { className: "font-base mb-docs_1", contentClassName: "gap-docs_0.5" },
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
            react_1.default.createElement(__2.Button, { onClick: () => {
                    setIsRunning(true);
                    setRan(false);
                } }, "Send Request"))),
        (isRunning || ran) && (react_1.default.createElement(__1.CodeBlock, { source: responseLogs.join("\n"), lang: "json", title: "Testing Result", collapsed: true, blockStyle: "subtle", noReport: true }))));
};
exports.ApiRunner = ApiRunner;
