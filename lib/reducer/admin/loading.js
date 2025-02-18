"use strict";
exports.__esModule = true;
var fetchActions_1 = require("../../actions/fetchActions");
var authActions_1 = require("../../actions/authActions");
var loadingReducer = function (previousState, _a) {
    if (previousState === void 0) { previousState = 0; }
    var type = _a.type;
    switch (type) {
        case fetchActions_1.FETCH_START:
        case authActions_1.USER_LOGIN_LOADING:
            return previousState + 1;
        case fetchActions_1.FETCH_END:
        case fetchActions_1.FETCH_ERROR:
        case fetchActions_1.FETCH_CANCEL:
        case authActions_1.USER_LOGIN_SUCCESS:
        case authActions_1.USER_LOGIN_FAILURE:
            return Math.max(previousState - 1, 0);
        default:
            return previousState;
    }
};
exports["default"] = loadingReducer;
