"use strict";
exports.__esModule = true;
exports["default"] = (function (csv, filename) {
    var fakeLink = document.createElement('a');
    fakeLink.style.display = 'none';
    document.body.appendChild(fakeLink);
    var blob = new Blob(["\ufeff", csv], { type: 'text/csv' });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // Manage IE11+ & Edge
        window.navigator.msSaveOrOpenBlob(blob, filename + ".csv");
    }
    else {
        fakeLink.setAttribute('href', URL.createObjectURL(blob));
        fakeLink.setAttribute('download', filename + ".csv");
        fakeLink.click();
    }
});
