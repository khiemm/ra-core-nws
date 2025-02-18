"use strict";
exports.__esModule = true;
exports.CHANGE_LOCALE = 'RA/CHANGE_LOCALE';
exports.changeLocale = function (locale) { return ({
    type: exports.CHANGE_LOCALE,
    payload: locale
}); };
exports.CHANGE_LOCALE_SUCCESS = 'RA/CHANGE_LOCALE_SUCCESS';
exports.changeLocaleSuccess = function (locale, messages) { return ({
    type: exports.CHANGE_LOCALE_SUCCESS,
    payload: {
        locale: locale,
        messages: messages
    }
}); };
exports.CHANGE_LOCALE_FAILURE = 'RA/CHANGE_LOCALE_FAILURE';
exports.changeLocaleFailure = function (locale, error) { return ({
    type: exports.CHANGE_LOCALE_FAILURE,
    error: error,
    payload: {
        locale: locale
    }
}); };
