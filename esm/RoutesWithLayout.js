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
import React, { Children, cloneElement, createElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import WithPermissions from './auth/WithPermissions';
var RoutesWithLayout = function (_a) {
    var catchAll = _a.catchAll, children = _a.children, customRoutes = _a.customRoutes, dashboard = _a.dashboard, title = _a.title;
    var childrenAsArray = React.Children.toArray(children);
    var firstChild = childrenAsArray.length > 0
        ? childrenAsArray[0]
        : null;
    return (React.createElement(Switch, null,
        customRoutes &&
            customRoutes.map(function (route, key) { return cloneElement(route, { key: key }); }),
        Children.map(children, function (child) { return (React.createElement(Route, { key: child.props.name, path: "/" + child.props.name, render: function (props) {
                return cloneElement(child, __assign({ 
                    // The context prop instruct the Resource component to
                    // render itself as a standard component
                    context: 'route' }, props));
            } })); }),
        dashboard ? (React.createElement(Route, { exact: true, path: "/", render: function (routeProps) { return (React.createElement(WithPermissions, __assign({ authParams: {
                    route: 'dashboard'
                } }, routeProps, { render: function (props) { return createElement(dashboard, props); } }))); } })) : firstChild ? (React.createElement(Route, { exact: true, path: "/", render: function () { return React.createElement(Redirect, { to: "/" + firstChild.props.name }); } })) : null,
        React.createElement(Route, { render: function () {
                return createElement(catchAll, {
                    title: title
                });
            } })));
};
export default RoutesWithLayout;
