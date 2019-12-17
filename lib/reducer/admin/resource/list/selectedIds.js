"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var listActions_1 = require("../../../../actions/listActions");
var dataFetchActions_1 = require("../../../../dataFetchActions");
var initialState = [];
var selectedIdsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === listActions_1.SET_LIST_SELECTED_IDS) {
        return action.payload;
    }
    if (action.type === listActions_1.TOGGLE_LIST_ITEM) {
        var index = previousState.indexOf(action.payload);
        if (index > -1) {
            return __spreadArrays(previousState.slice(0, index), previousState.slice(index + 1));
        }
        else {
            return __spreadArrays(previousState, [action.payload]);
        }
    }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === dataFetchActions_1.DELETE) {
            var index = previousState.indexOf(action.payload.id);
            if (index === -1) {
                return previousState;
            }
            return __spreadArrays(previousState.slice(0, index), previousState.slice(index + 1));
        }
        if (action.meta.fetch === dataFetchActions_1.DELETE_MANY) {
            return previousState.filter(function (id) { return !action.payload.ids.includes(id); });
        }
    }
    return action.meta && action.meta.unselectAll
        ? initialState
        : previousState;
};
exports["default"] = selectedIdsReducer;
