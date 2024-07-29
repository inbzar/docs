"use strict";
"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLearningPath = exports.LearningPathProvider = void 0;
const hooks_1 = require("../../hooks");
const learning_paths_1 = require("../../utils/learning-paths");
const react_1 = __importStar(require("react"));
const docs_ui_1 = require("../../index.js");
const navigation_1 = require("next/navigation");
const LearningPathContext = (0, react_1.createContext)(null);
const LearningPathProvider = ({ children, baseUrl, }) => {
    const [path, setPath] = (0, react_1.useState)(null);
    const [currentStep, setCurrentStep] = (0, react_1.useState)(-1);
    const isBrowser = (0, hooks_1.useIsBrowser)();
    const pathname = (0, navigation_1.usePathname)();
    const router = (0, navigation_1.useRouter)();
    const { track } = (0, docs_ui_1.useAnalytics)();
    const startPath = (path) => {
        setPath(path);
        setCurrentStep(-1);
        if (isBrowser) {
            localStorage.setItem("learning-path", JSON.stringify({
                pathName: path.name,
                currentStep: -1,
            }));
        }
        track(`learning_path_${path.name}`, {
            url: pathname,
            state: `start`,
        });
    };
    (0, react_1.useEffect)(() => {
        if (path && currentStep === -1) {
            nextStep();
        }
    }, [path]);
    const endPath = () => {
        var _a, _b, _c;
        const didFinish = currentStep === ((path === null || path === void 0 ? void 0 : path.steps.length) || 0) - 1;
        const reachedIndex = currentStep === -1 ? 0 : currentStep;
        track(`learning_path_${path === null || path === void 0 ? void 0 : path.name}`, {
            url: pathname,
            state: !didFinish ? `closed` : `end`,
            reachedStep: ((_a = path === null || path === void 0 ? void 0 : path.steps[reachedIndex]) === null || _a === void 0 ? void 0 : _a.title) ||
                ((_b = path === null || path === void 0 ? void 0 : path.steps[reachedIndex]) === null || _b === void 0 ? void 0 : _b.description) ||
                ((_c = path === null || path === void 0 ? void 0 : path.steps[reachedIndex]) === null || _c === void 0 ? void 0 : _c.descriptionJSX) ||
                reachedIndex,
        });
        setPath(null);
        setCurrentStep(-1);
        if (isBrowser) {
            localStorage.removeItem("learning-path");
        }
    };
    const hasNextStep = () => currentStep !== ((path === null || path === void 0 ? void 0 : path.steps.length) || 0) - 1;
    const nextStep = () => {
        if (!path || !hasNextStep()) {
            return;
        }
        const nextStepIndex = currentStep + 1;
        setCurrentStep(nextStepIndex);
        const newPath = path.steps[nextStepIndex].path;
        if (isBrowser) {
            localStorage.setItem("learning-path", JSON.stringify({
                pathName: path.name,
                currentStep: nextStepIndex,
            }));
        }
        if (pathname !== newPath && newPath) {
            router.push(newPath);
        }
    };
    const hasPreviousStep = () => currentStep > 0;
    const previousStep = () => {
        if (!path || !hasPreviousStep()) {
            return;
        }
        const previousStepIndex = currentStep - 1;
        setCurrentStep(previousStepIndex);
        const newPath = path.steps[previousStepIndex].path;
        if (isBrowser) {
            localStorage.setItem("learning-path", JSON.stringify({
                pathName: path.name,
                currentStep: previousStepIndex,
            }));
        }
        if (pathname !== newPath && newPath) {
            router.push(newPath);
        }
    };
    const goToStep = (stepIndex) => {
        if (!path || stepIndex >= path.steps.length) {
            return;
        }
        setCurrentStep(stepIndex);
        const newPath = path.steps[stepIndex].path;
        if (isBrowser) {
            localStorage.setItem("learning-path", JSON.stringify({
                pathName: path.name,
                currentStep: stepIndex,
            }));
        }
        if (pathname !== newPath && newPath) {
            router.push(newPath);
        }
    };
    const isCurrentPath = () => {
        if (!path || currentStep === -1) {
            return false;
        }
        return pathname === path.steps[currentStep].path;
    };
    const goToCurrentPath = () => {
        if (!path || currentStep === -1 || !path.steps[currentStep].path) {
            return;
        }
        router.push(path.steps[currentStep].path);
    };
    const updatePath = (data) => {
        if (!path) {
            return;
        }
        setPath(Object.assign(Object.assign({}, path), data));
    };
    const initPath = () => {
        if (isBrowser) {
            // give query parameters higher precedence over local storage
            const queryPathName = new URLSearchParams(location.search).get("path");
            const queryPath = queryPathName
                ? (0, learning_paths_1.getLearningPath)(queryPathName)
                : undefined;
            if (queryPath) {
                startPath(queryPath);
            }
            else {
                const storedPath = localStorage.getItem("learning-path");
                if (storedPath) {
                    const storedPathParsed = JSON.parse(storedPath);
                    const currentPath = (0, learning_paths_1.getLearningPath)(storedPathParsed === null || storedPathParsed === void 0 ? void 0 : storedPathParsed.pathName);
                    if (currentPath) {
                        setPath(currentPath);
                        setCurrentStep((storedPathParsed === null || storedPathParsed === void 0 ? void 0 : storedPathParsed.currentStep) || 0);
                    }
                }
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (isBrowser && !path) {
            initPath();
        }
    }, [isBrowser]);
    return (react_1.default.createElement(LearningPathContext.Provider, { value: {
            path,
            setPath,
            currentStep,
            setCurrentStep,
            startPath,
            updatePath,
            endPath,
            nextStep,
            hasNextStep,
            previousStep,
            hasPreviousStep,
            goToStep,
            isCurrentPath,
            goToCurrentPath,
            baseUrl,
        } }, children));
};
exports.LearningPathProvider = LearningPathProvider;
const useLearningPath = () => {
    const context = (0, react_1.useContext)(LearningPathContext);
    if (!context) {
        throw new Error("useLearningPath must be used within a LearningPathProvider");
    }
    return context;
};
exports.useLearningPath = useLearningPath;
