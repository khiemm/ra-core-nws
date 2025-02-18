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
var checkMinimumRequiredProps = function (displayName, requiredProps) { return function (WrappedComponent) { return function (props) {
    var propNames = Object.keys(props);
    var missingProps = requiredProps.filter(function (prop) { return !propNames.includes(prop); });
    if (missingProps.length > 0) {
        throw new Error("<" + displayName + "> component is not properly configured, some essential props are missing.\nBe sure to pass the props from the parent. Example:\n\nconst My" + displayName + " = props => (\n    <" + displayName + " {...props}></" + displayName + ">\n);\n\nThe missing props are: " + missingProps.join(', '));
    }
    return react_1["default"].createElement(WrappedComponent, __assign({}, props));
}; }; };
exports["default"] = checkMinimumRequiredProps;
