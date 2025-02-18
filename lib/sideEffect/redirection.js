"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var effects_1 = require("redux-saga/effects");
var react_router_redux_1 = require("react-router-redux");
var redux_form_1 = require("redux-form");
var resolveRedirectTo_1 = __importDefault(require("../util/resolveRedirectTo"));
/**
 * Redirection Side Effects
 */
function handleRedirection(_a) {
    var _b;
    var payload = _a.payload, requestPayload = _a.requestPayload, _c = _a.meta, basePath = _c.basePath, redirectTo = _c.redirectTo;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!redirectTo) return [3 /*break*/, 2];
                return [4 /*yield*/, effects_1.put(react_router_redux_1.push(resolveRedirectTo_1["default"](redirectTo, basePath, payload
                        ? payload.id ||
                            (payload.data ? payload.data.id : null)
                        : requestPayload
                            ? requestPayload.id
                            : null, payload && payload.data
                        ? payload.data
                        : requestPayload && requestPayload.data
                            ? requestPayload.data
                            : null)))];
            case 1:
                _b = _d.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, effects_1.put(redux_form_1.reset('record-form'))];
            case 3:
                _b = _d.sent();
                _d.label = 4;
            case 4: return [2 /*return*/, _b]; // explicit no redirection, reset the form
        }
    });
}
exports.handleRedirection = handleRedirection;
function default_1() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(
                // @ts-ignore
                function (action) { return action.meta && typeof action.meta.redirectTo !== 'undefined'; }, handleRedirection)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports["default"] = default_1;
