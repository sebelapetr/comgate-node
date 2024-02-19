"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ComgateClient = /** @class */ (function () {
    function ComgateClient(_a) {
        var merchant = _a.merchant, secret = _a.secret, test = _a.test;
        this.apiBaseUrl = 'https://payments.comgate.cz/';
        this.apiVersion = '1.0';
        this.merchant = merchant;
        this.secret = secret;
        this.test = test;
        this.axiosInstance = axios_1.default.create({
            baseURL: this.apiBaseUrl + this.apiVersion,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }
    ComgateClient.prototype.callApi = function (request) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var options, res, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        options = {
                            method: request.method,
                            url: request.path,
                            params: request.query,
                            data: __assign({ secret: this.secret, merchant: this.merchant }, request.body),
                        };
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosInstance(options)];
                    case 2:
                        res = _d.sent();
                        return [2 /*return*/, res.data];
                    case 3:
                        error_1 = _d.sent();
                        if (axios_1.default.isAxiosError(error_1)) {
                            throw new Error("Error from Comgate API with status code ".concat((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.status, ": ").concat((_c = (_b = error_1.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message));
                        }
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // https://apidoc.comgate.cz/?lang=en#create
    ComgateClient.prototype.create = function (request) {
        return this.callApi({
            path: "/create",
            method: "POST",
            body: __assign({ test: this.test }, request),
        });
    };
    // https://apidoc.comgate.cz/?lang=en#cancel
    ComgateClient.prototype.cancel = function (request) {
        return this.callApi({
            path: "/cancel",
            method: "POST",
            body: request,
        });
    };
    // https://apidoc.comgate.cz/?lang=en#recurring
    ComgateClient.prototype.recurring = function (request) {
        return this.callApi({
            path: "/create",
            method: "POST",
            body: __assign({ test: this.test }, request),
        });
    };
    // https://apidoc.comgate.cz/?lang=en#refund
    ComgateClient.prototype.refund = function (request) {
        return this.callApi({
            path: "/refund",
            method: "POST",
            body: __assign({ test: this.test }, request),
        });
    };
    // https://apidoc.comgate.cz/?lang=en#capturepreauth
    ComgateClient.prototype.capturePreauth = function (request) {
        return this.callApi({
            path: "/capturePreauth",
            method: "POST",
            body: __assign({}, request),
        });
    };
    // https://apidoc.comgate.cz/?lang=en#cancelpreauth
    ComgateClient.prototype.cancelPreauth = function (request) {
        return this.callApi({
            path: "/cancelPreauth",
            method: "POST",
            body: __assign({}, request),
        });
    };
    // https://apidoc.comgate.cz/?lang=en#methods
    ComgateClient.prototype.methods = function (request) {
        return this.callApi({
            path: "/methods",
            method: "POST",
            body: __assign({}, request),
        });
    };
    // https://apidoc.comgate.cz/?lang=en#status
    ComgateClient.prototype.status = function (request) {
        return this.callApi({
            path: "/status",
            method: "POST",
            body: __assign({}, request),
        });
    };
    return ComgateClient;
}());
exports.default = ComgateClient;
//# sourceMappingURL=comgate-client.js.map