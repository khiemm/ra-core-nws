"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var uniq_1 = __importDefault(require("lodash/uniq"));
var dataActions_1 = require("../../../../actions/dataActions");
var getFetchedAt_1 = __importDefault(require("../../../../util/getFetchedAt"));
var dataFetchActions_1 = require("../../../../dataFetchActions");
exports.addRecordIdsFactory = function (getFetchedAtCallback) { return function (newRecordIds, oldRecordIds) {
    if (newRecordIds === void 0) { newRecordIds = []; }
    var newFetchedAt = getFetchedAtCallback(newRecordIds, oldRecordIds.fetchedAt);
    var recordIds = uniq_1["default"](oldRecordIds.filter(function (id) { return !!newFetchedAt[id]; }).concat(newRecordIds));
    Object.defineProperty(recordIds, 'fetchedAt', {
        value: newFetchedAt
    }); // non enumerable by default
    return recordIds;
}; };
var addRecordIds = exports.addRecordIdsFactory(getFetchedAt_1["default"]);
var idsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = []; }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === dataFetchActions_1.DELETE) {
            var index = previousState
                .map(function (el) { return el === action.payload.id; }) // eslint-disable-line eqeqeq
                .indexOf(true);
            if (index === -1) {
                return previousState;
            }
            var newState = __spreadArrays(previousState.slice(0, index), previousState.slice(index + 1));
            Object.defineProperty(newState, 'fetchedAt', {
                value: previousState.fetchedAt
            });
            return newState;
        }
        if (action.meta.fetch === dataFetchActions_1.DELETE_MANY) {
            var newState = previousState.filter(function (el) { return !action.payload.ids.includes(el); });
            Object.defineProperty(newState, 'fetchedAt', {
                value: previousState.fetchedAt
            });
            return newState;
        }
    }
    switch (action.type) {
        case dataActions_1.CRUD_GET_LIST_SUCCESS:
            return addRecordIds(action.payload.data.map(function (_a) {
                var id = _a.id;
                return id;
            }), []);
        case dataActions_1.CRUD_GET_MANY_SUCCESS:
        case dataActions_1.CRUD_GET_MANY_REFERENCE_SUCCESS:
            return addRecordIds(action.payload.data
                .map(function (_a) {
                var id = _a.id;
                return id;
            })
                .filter(function (id) { return previousState.indexOf(id) !== -1; }), previousState);
        case dataActions_1.CRUD_GET_ONE_SUCCESS:
        case dataActions_1.CRUD_CREATE_SUCCESS:
        case dataActions_1.CRUD_UPDATE_SUCCESS:
            return addRecordIds([action.payload.data.id], previousState);
        default:
            return previousState;
    }
};
exports["default"] = idsReducer;
exports.getIds = function (state) { return state; };
