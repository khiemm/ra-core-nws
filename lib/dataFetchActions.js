"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.GET_LIST = 'GET_LIST';
exports.GET_ONE = 'GET_ONE';
exports.GET_MANY = 'GET_MANY';
exports.GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
exports.CREATE = 'CREATE';
exports.UPDATE = 'UPDATE';
exports.UPDATE_MANY = 'UPDATE_MANY';
exports.DELETE = 'DELETE';
exports.DELETE_MANY = 'DELETE_MANY';
exports.fetchActionsWithRecordResponse = [exports.GET_ONE, exports.CREATE, exports.UPDATE];
exports.fetchActionsWithArrayOfIdentifiedRecordsResponse = [
    exports.GET_LIST,
    exports.GET_MANY,
    exports.GET_MANY_REFERENCE,
];
exports.fetchActionsWithArrayOfRecordsResponse = __spreadArrays(exports.fetchActionsWithArrayOfIdentifiedRecordsResponse, [
    exports.UPDATE_MANY,
    exports.DELETE_MANY,
]);
exports.fetchActionsWithTotalResponse = [exports.GET_LIST, exports.GET_MANY_REFERENCE];
