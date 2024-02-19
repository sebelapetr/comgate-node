"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponse = void 0;
var axios_1 = require("axios");
function parseResponse(url, data, status) {
    var response;
    if (url == '/methods') {
        if (status == axios_1.HttpStatusCode.Ok) {
            var methods = data.methods.map(function (method) { return ({
                id: method.id,
                name: method.name,
                description: method.description,
                logo: method.logo
            }); });
            return {
                methods: methods
            };
        }
        else if (status == axios_1.HttpStatusCode.BadRequest) {
            var error = data.error;
            if (error) {
                var errorResponse = { error: {} };
                var errorCode = error.code;
                var errorMessage = error.message;
                var extraMessage = error.extraMessage;
                if (errorCode) {
                    errorResponse.error.code = errorCode;
                }
                if (errorMessage) {
                    errorResponse.error.message = errorMessage;
                }
                if (extraMessage) {
                    errorResponse.error.extraMessage = extraMessage;
                }
                return errorResponse;
            }
            else {
                throw new Error("Error in parsing response from ".concat(url, ": object error is missing in response query."));
            }
        }
        else {
            throw new Error("Error in parsing response from ".concat(url, ": status code ").concat(status, " not allowed."));
        }
    }
    else {
        var params = new URLSearchParams(decodeURIComponent(data));
        var code = params.get("code");
        var message = params.get("message");
        var transId = params.get("transId");
        var redirect = params.get("redirect");
        if (!code) {
            throw new Error("Error in parsing response from ".concat(url, ": code is missing in response query."));
        }
        if (!message) {
            throw new Error("Error in parsing response from ".concat(url, ": message is missing in response query."));
        }
        switch (url) {
            case '/create':
                response = {
                    code: parseInt(code),
                    message: message,
                };
                if (transId) {
                    response.transId = transId;
                }
                if (redirect) {
                    response.redirect = redirect;
                }
                return response;
            case '/cancel':
                response = {
                    code: parseInt(code),
                    message: message,
                };
                return response;
            case '/recurring':
                response = {
                    code: parseInt(code),
                    message: message,
                };
                if (transId) {
                    response.transId = transId;
                }
                return response;
            case '/refund':
                response = {
                    code: parseInt(code),
                    message: message,
                };
                return response;
            case '/capturePreauth':
                response = {
                    code: parseInt(code),
                    message: message,
                };
                return response;
            case '/cancelPreauth':
                response = {
                    code: parseInt(code),
                    message: message,
                };
                return response;
            case '/status':
                var statusResponse_1 = {};
                params.forEach(function (value, key) {
                    statusResponse_1[key] = decodeURIComponent(value);
                });
                return statusResponse_1;
            default:
                throw new Error("Error in parsing response from ".concat(url, ": bad URL endpoint."));
        }
    }
}
exports.parseResponse = parseResponse;
//# sourceMappingURL=parse-response.js.map