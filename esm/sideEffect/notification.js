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
import { put, takeEvery } from 'redux-saga/effects';
import { showNotification, } from '../actions/notificationActions';
/**
 * Notification Side Effects
 */
function handleNotification(_a) {
    var body, level, _b, messageArgs;
    var error = _a.error, _c = _a.meta, notification = _c.notification, optimistic = _c.optimistic;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                body = notification.body, level = notification.level, _b = notification.messageArgs, messageArgs = _b === void 0 ? {} : _b;
                if (!error) return [3 /*break*/, 2];
                return [4 /*yield*/, put(showNotification(typeof error === 'string' ? error : error.message || body, level || 'warning', {
                        messageArgs: messageArgs,
                        undoable: false
                    }))];
            case 1: return [2 /*return*/, _d.sent()];
            case 2: return [4 /*yield*/, put(showNotification(body, level || 'info', {
                    messageArgs: messageArgs,
                    undoable: optimistic
                }))];
            case 3:
                _d.sent();
                return [2 /*return*/];
        }
    });
}
export default function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeEvery(
                // @ts-ignore
                function (action) { return action.meta && action.meta.notification; }, handleNotification)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
