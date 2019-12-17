"use strict";
exports.__esModule = true;
exports["default"] = (function (condition, message) {
    if (condition && process.env.NODE_ENV !== 'production') {
        console.warn(message); // eslint-disable-line
    }
});
