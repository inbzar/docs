"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRequestRunner = void 0;
const useRequestRunner = ({ pushLog, onFinish, replaceLog, }) => {
    const runRequest = (apiRequestOptions) => {
        let requestUrl = apiRequestOptions.url;
        if (apiRequestOptions.pathData) {
            Object.entries(apiRequestOptions.pathData).forEach(([key, value]) => {
                if (typeof value === "string") {
                    requestUrl = requestUrl.replace(`{${key}}`, value);
                }
            });
        }
        // check if there are query params
        if (apiRequestOptions.queryData) {
            requestUrl += `?${new URLSearchParams(apiRequestOptions.queryData).toString()}`;
        }
        fetch(requestUrl, {
            method: apiRequestOptions.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: apiRequestOptions.bodyData
                ? JSON.stringify(apiRequestOptions.bodyData)
                : undefined,
        })
            .then((response) => __awaiter(void 0, void 0, void 0, function* () { return response.json(); }))
            .then((data) => {
            const stringifiedData = JSON.stringify(data, undefined, 2);
            replaceLog ? replaceLog(stringifiedData) : pushLog(stringifiedData);
        })
            .catch((error) => {
            pushLog(`An error ocurred: ${JSON.stringify(error, undefined, 2)}`, `\nThis could be a CORS error. You can resolve it by adding\nthe docs' URLto your CORS configurations:\n`, `STORE_CORS=http://localhost:8000,https://docs.medusajs.com`, `ADMIN_CORS=http://localhost:7001,https://docs.medusajs.com`);
        })
            .finally(() => onFinish(`Finished running request.`));
    };
    return {
        runRequest,
    };
};
exports.useRequestRunner = useRequestRunner;
