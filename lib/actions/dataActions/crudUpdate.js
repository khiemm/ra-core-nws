"use strict";
exports.__esModule = true;
var dataFetchActions_1 = require("../../dataFetchActions");
exports.crudUpdate = function (resource, id, data, previousData, basePath, redirectTo, refresh) {
    if (redirectTo === void 0) { redirectTo = 'show'; }
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_UPDATE,
        payload: { id: id, data: data, previousData: previousData },
        meta: {
            resource: resource,
            fetch: dataFetchActions_1.UPDATE,
            onSuccess: {
                notification: {
                    body: 'ra.notification.updated',
                    level: 'info',
                    messageArgs: {
                        smart_count: 1
                    }
                },
                refresh: refresh,
                redirectTo: redirectTo,
                basePath: basePath
            },
            onFailure: {
                notification: {
                    body: 'ra.notification.http_error',
                    level: 'warning'
                }
            }
        }
    });
};
exports.CRUD_UPDATE = 'RA/CRUD_UPDATE';
exports.CRUD_UPDATE_LOADING = 'RA/CRUD_UPDATE_LOADING';
exports.CRUD_UPDATE_FAILURE = 'RA/CRUD_UPDATE_FAILURE';
exports.CRUD_UPDATE_SUCCESS = 'RA/CRUD_UPDATE_SUCCESS';
