"use strict";
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
exports.__esModule = true;
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(message, status, body) {
        if (body === void 0) { body = null; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.status = status;
        _this.body = body;
        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, _this.constructor);
        }
        else {
            _this.stack = new Error(message).stack;
        }
        _this.stack = new Error().stack;
        return _this;
    }
    return HttpError;
}(Error));
exports["default"] = HttpError;
