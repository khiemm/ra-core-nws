var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export var GET_LIST = 'GET_LIST';
export var GET_ONE = 'GET_ONE';
export var GET_MANY = 'GET_MANY';
export var GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
export var CREATE = 'CREATE';
export var UPDATE = 'UPDATE';
export var UPDATE_MANY = 'UPDATE_MANY';
export var DELETE = 'DELETE';
export var DELETE_MANY = 'DELETE_MANY';
export var fetchActionsWithRecordResponse = [GET_ONE, CREATE, UPDATE];
export var fetchActionsWithArrayOfIdentifiedRecordsResponse = [
    GET_LIST,
    GET_MANY,
    GET_MANY_REFERENCE,
];
export var fetchActionsWithArrayOfRecordsResponse = __spreadArrays(fetchActionsWithArrayOfIdentifiedRecordsResponse, [
    UPDATE_MANY,
    DELETE_MANY,
]);
export var fetchActionsWithTotalResponse = [GET_LIST, GET_MANY_REFERENCE];
