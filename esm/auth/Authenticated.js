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
import { connect } from 'react-redux';
import { userCheck as userCheckAction } from '../actions/authActions';
/**
 * Restrict access to children to authenticated users
 *
 * Useful for Route components ; used internally by Resource.
 * Use it to decorate your custom page components to require
 * authentication.
 *
 * Pass the `location` from the `routeParams` as `location` prop.
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @example
 *     import { Authenticated } from 'react-admin';
 *
 *     const CustomRoutes = [
 *         <Route path="/foo" render={routeParams =>
 *             <Authenticated location={routeParams.location} authParams={{ foo: 'bar' }}>
 *                 <Foo />
 *             </Authenticated>
 *         } />
 *     ];
 *     const App = () => (
 *         <Admin customRoutes={customRoutes}>
 *             ...
 *         </Admin>
 *     );
 */
var Authenticated = /** @class */ (function (_super) {
    __extends(Authenticated, _super);
    function Authenticated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Authenticated.prototype.componentWillMount = function () {
        this.checkAuthentication(this.props);
    };
    Authenticated.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.location !== this.props.location) {
            this.checkAuthentication(nextProps);
        }
    };
    Authenticated.prototype.checkAuthentication = function (params) {
        var userCheck = params.userCheck, authParams = params.authParams, location = params.location;
        userCheck(authParams, location && location.pathname);
    };
    // render the child even though the AUTH_CHECK isn't finished (optimistic rendering)
    Authenticated.prototype.render = function () {
        var _a = this.props, children = _a.children, userCheck = _a.userCheck, authParams = _a.authParams, location = _a.location, rest = __rest(_a, ["children", "userCheck", "authParams", "location"]);
        return React.cloneElement(children, rest);
    };
    return Authenticated;
}(Component));
export { Authenticated };
export default connect(null, { userCheck: userCheckAction })(Authenticated);
