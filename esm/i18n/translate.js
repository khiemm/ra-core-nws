var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Component } from 'react';
import { default as wrapDisplayName } from 'recompose/wrapDisplayName';
import { default as warning } from '../util/warning';
import { TranslationContext, } from './TranslationContext';
/**
 * Higher-Order Component for getting access to the `translate` function in props.
 *
 * Requires that the app is decorated by the <TranslationProvider> to inject
 * the translation dictionaries and function in the context.
 *
 * @example
 *     import React from 'react';
 *     import { translate } from 'react-admin';
 *
 *     const MyHelloButton = ({ translate }) => (
 *         <button>{translate('myroot.hello.world')}</button>
 *     );
 *
 *     export default translate(MyHelloButton);
 *
 * @param {*} BaseComponent The component to decorate
 */
var withTranslate = function (BaseComponent) {
    warning(typeof BaseComponent === 'string', "The translate function is a Higher Order Component, and should not be called directly with a translation key. Use the translate function passed as prop to your component props instead:\n\nconst MyHelloButton = ({ translate }) => (\n    <button>{translate('myroot.hello.world')}</button>\n);");
    var _a = (BaseComponent.defaultProps || {}), translateToDiscard = _a.translate, defaultProps = __rest(_a, ["translate"]);
    var TranslatedComponent = /** @class */ (function (_super) {
        __extends(TranslatedComponent, _super);
        function TranslatedComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TranslatedComponent.prototype.render = function () {
            var _this = this;
            return (React.createElement(TranslationContext.Consumer, null, function (_a) {
                var translate = _a.translate, locale = _a.locale;
                return (React.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, _this.props)));
            }));
        };
        TranslatedComponent.defaultProps = defaultProps;
        TranslatedComponent.displayName = wrapDisplayName(BaseComponent, 'translate');
        return TranslatedComponent;
    }(Component));
    return TranslatedComponent;
};
export default withTranslate;
