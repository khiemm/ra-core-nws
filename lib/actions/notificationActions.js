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
exports.__esModule = true;
exports.SHOW_NOTIFICATION = 'RA/SHOW_NOTIFICATION';
/**
 * Shows a snackbar/toast notification on the screen
 *
 * @see {@link https://v1.material-ui.com/api/snackbar/|Material ui snackbar component}
 * @see {@link https://material.io/guidelines/components/snackbars-toasts.html|Material ui reference document on snackbar}
 */
exports.showNotification = function (
// A translatable label or text to display on notification
message, 
// The type of the notification
type, 
// Specify additional parameters of notification
notificationOptions) {
    if (type === void 0) { type = 'info'; }
    return ({
        type: exports.SHOW_NOTIFICATION,
        payload: __assign(__assign({}, notificationOptions), { type: type,
            message: message })
    });
};
exports.HIDE_NOTIFICATION = 'RA/HIDE_NOTIFICATION';
exports.hideNotification = function () { return ({
    type: exports.HIDE_NOTIFICATION
}); };
