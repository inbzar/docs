"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlockLine = void 0;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const components_1 = require("../../../components");
const CodeBlockLine = ({ line, highlights = [], lineNumber, getLineProps, getTokenProps, showLineNumber, bgColorClassName, lineNumberColorClassName, }) => {
    const lineProps = getLineProps({ line, key: lineNumber });
    // collect highlighted tokens, if there are any
    const highlightedTokens = [];
    highlights.forEach((highlight) => {
        if (!highlight.text) {
            return;
        }
        let startIndex = undefined;
        let currentPositionInHighlightedText = 0;
        let endIndex = 0;
        const found = line.some((token, tokenIndex) => {
            var _a;
            if (token.empty || !token.content.length) {
                startIndex = undefined;
                currentPositionInHighlightedText = 0;
                return false;
            }
            const comparisonLength = Math.min(token.content.length, highlight.text.substring(currentPositionInHighlightedText).length);
            const nextPositionInHighlightedText = currentPositionInHighlightedText + comparisonLength;
            const canHighlight = !highlightedTokens.length ||
                !highlightedTokens.some((token) => tokenIndex >= token.start && tokenIndex <= token.end);
            if (token.content.substring(0, comparisonLength) ===
                ((_a = highlight.text) === null || _a === void 0 ? void 0 : _a.substring(currentPositionInHighlightedText, nextPositionInHighlightedText)) &&
                canHighlight) {
                if (startIndex === undefined) {
                    startIndex = tokenIndex;
                }
                currentPositionInHighlightedText = nextPositionInHighlightedText;
            }
            if (currentPositionInHighlightedText === highlight.text.length) {
                // matching text was found, break loop
                endIndex = tokenIndex;
                return true;
            }
        });
        if (found && startIndex !== undefined) {
            highlightedTokens.push({
                start: startIndex,
                end: endIndex,
                highlight,
            });
        }
    });
    // sort highlighted tokens by their start position
    highlightedTokens.sort((tokensA, tokensB) => {
        if (tokensA.start < tokensB.start) {
            return -1;
        }
        return tokensA.start > tokensB.start ? 1 : 0;
    });
    // if there are highlighted tokens, split tokens in the
    // line by segments of not highlighted and highlighted token
    // if there are no highlighted tokens, the line is used as-is.
    const transformedLine = highlightedTokens.length
        ? []
        : [
            {
                tokens: line,
                type: "default",
            },
        ];
    let lastIndex = 0;
    // go through highlighted tokens to add the segments before/after to the
    // transformedLines array
    highlightedTokens.forEach((highlightedTokensItem, index) => {
        if (lastIndex < highlightedTokensItem.start) {
            transformedLine.push({
                tokens: line.slice(lastIndex, highlightedTokensItem.start),
                type: "default",
            });
        }
        transformedLine.push({
            tokens: line.slice(highlightedTokensItem.start, highlightedTokensItem.end + 1),
            type: "highlighted",
            highlight: highlightedTokensItem.highlight,
        });
        lastIndex = highlightedTokensItem.end + 1;
        // if this is the last item in `highlightedTokens` and
        // its end index is less than the line's length, that means
        // there are tokens at the end of the line that aren't highlighted
        // and should be pushed as-is to the `transformedLines` array.
        if (index === highlightedTokens.length - 1 && lastIndex < line.length - 1) {
            transformedLine.push({
                tokens: line.slice(lastIndex),
                type: "default",
            });
        }
    });
    const getTokensElm = ({ tokens, isHighlighted, offset, }) => (react_1.default.createElement("span", { className: (0, clsx_1.default)(
        // TODO change code colors and class names based on figma colors
        isHighlighted && [
            "lg:py-px lg:px-[6px] lg:border-medusa-code-icon lg:rounded-docs_sm",
            "lg:bg-medusa-code-border lg:cursor-pointer",
        ]) }, tokens.map((token, key) => {
        const tokenKey = offset + key;
        const _a = getTokenProps({
            token,
            key: tokenKey,
        }), { className: tokenClassName } = _a, rest = __rest(_a, ["className"]);
        return (react_1.default.createElement("span", Object.assign({ key: tokenKey, className: (0, clsx_1.default)(tokenClassName) }, rest)));
    })));
    const isHighlightedLine = (0, react_1.useMemo)(() => highlights.length && !highlightedTokens.length, [highlights, highlightedTokens]);
    return (react_1.default.createElement("span", Object.assign({ key: lineNumber }, lineProps, { className: (0, clsx_1.default)("table-row", isHighlightedLine && "bg-medusa-code-bg-header", lineProps.className) }),
        showLineNumber && (react_1.default.createElement("span", { className: (0, clsx_1.default)("mr-docs_1 table-cell select-none", "sticky left-0 w-[1%] px-docs_1 text-right", bgColorClassName, lineNumberColorClassName) }, lineNumber + 1)),
        react_1.default.createElement("span", null, transformedLine.map(({ tokens, type, highlight }, index) => {
            var _a;
            const offset = index === 0 ? 0 : transformedLine[index - 1].tokens.length;
            const tooltipText = (highlight === null || highlight === void 0 ? void 0 : highlight.tooltipText) ||
                (isHighlightedLine
                    ? (_a = highlights.find((h) => h.tooltipText !== undefined)) === null || _a === void 0 ? void 0 : _a.tooltipText
                    : undefined);
            const isHighlighted = type === "highlighted";
            return (react_1.default.createElement(react_1.default.Fragment, { key: index },
                tooltipText && (react_1.default.createElement(components_1.Tooltip, { text: tooltipText, tooltipClassName: "font-base", render: ({ content }) => (react_1.default.createElement(components_1.MarkdownContent, { allowedElements: ["a", "strong", "code"], unwrapDisallowed: true }, content || "")) }, getTokensElm({ tokens, isHighlighted, offset }))),
                !tooltipText && getTokensElm({ tokens, isHighlighted, offset })));
        }))));
};
exports.CodeBlockLine = CodeBlockLine;
