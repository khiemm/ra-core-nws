"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var FormField_1 = __importDefault(require("./FormField"));
exports["default"] = (function (BaseComponent, fieldProps) {
    if (fieldProps === void 0) { fieldProps = {}; }
    var WithFormField = function (props) { return (react_1["default"].createElement(FormField_1["default"], __assign({ component: BaseComponent }, fieldProps, props))); };
    return WithFormField;
});
