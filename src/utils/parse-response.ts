import {CreateResponse, CreateResponseCode} from "../types/endpoints/create";
import {CancelResponse, CancelResponseCode} from "../types/endpoints/cancel";
import {RecurringResponse, RecurringResponseCode} from "../types/endpoints/recurring";
import {RefundResponse, RefundResponseCode} from "../types/endpoints/refund";
import {CapturePreAuthResponse, CapturePreAuthResponseCode} from "../types/endpoints/capturePreauth";
import {CancelPreAuthResponse, CancelPreAuthResponseCode} from "../types/endpoints/cancelPreauth";
import {MethodProps, MethodsBadRequestResponse, MethodsSuccessResponse} from "../types/endpoints/methods";
import {StatusResponse} from "../types/endpoints/status";
import {HttpStatusCode} from "axios";

export type URLEnum =
    '/create'
    | '/cancel'
    | '/recurring'
    | '/refund'
    | '/capturePreauth'
    | '/cancelPreauth'
    | '/methods'
    | '/status'
;

export function parseResponse(url: URLEnum, data: any , status: HttpStatusCode):
        CreateResponse
        | CancelResponse
        | RecurringResponse
        | RefundResponse
        | CapturePreAuthResponse
        | CancelPreAuthResponse
        | MethodsSuccessResponse
        | MethodsBadRequestResponse
        | StatusResponse
{
    let response;

    if (url == '/methods') {
        if (status == HttpStatusCode.Ok) {
            const methods: MethodProps[] = data.methods.map((method: MethodProps) => ({
                id: method.id,
                name: method.name,
                description: method.description,
                logo: method.logo
            }));

            return {
                methods
            } as MethodsSuccessResponse;
        } else if (status == HttpStatusCode.BadRequest) {
            const error = data.error;
            if (error) {
                const errorResponse = { error: {} } as MethodsBadRequestResponse;
                const errorCode = error.code;
                const errorMessage = error.message;
                const extraMessage = error.extraMessage;
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
            }  else {
                throw new Error(`Error in parsing response from ${url}: object error is missing in response query.`)
            }
        } else {
            throw new Error(`Error in parsing response from ${url}: status code ${status} not allowed.`)
        }
    } else {
        const params = new URLSearchParams(decodeURIComponent(data));
        const code = params.get("code");
        const message = params.get("message")

        const transId = params.get("transId");
        const redirect = params.get("redirect");

        if (!code) {
            throw new Error(`Error in parsing response from ${url}: code is missing in response query.`)
        }
        if (!message) {
            throw new Error(`Error in parsing response from ${url}: message is missing in response query.`)
        }

        switch (url) {
            case '/create':
                response = {
                    code: parseInt(code) as CreateResponseCode,
                    message: message,
                } as CreateResponse
                if (transId) {
                    response.transId = transId;
                }
                if (redirect) {
                    response.redirect = redirect;
                }
                return response;
            case '/cancel':
                response = {
                    code: parseInt(code) as CancelResponseCode,
                    message: message,
                } as CancelResponse
                return response;
            case '/recurring':
                response = {
                    code: parseInt(code) as RecurringResponseCode,
                    message: message,
                } as RecurringResponse
                if (transId) {
                    response.transId = transId;
                }
                return response;
            case '/refund':
                response = {
                    code: parseInt(code) as RefundResponseCode,
                    message: message,
                } as RefundResponse
                return response;
            case '/capturePreauth':
                response = {
                    code: parseInt(code) as CapturePreAuthResponseCode,
                    message: message,
                } as CapturePreAuthResponse
                return response;
            case '/cancelPreauth':
                response = {
                    code: parseInt(code) as CancelPreAuthResponseCode,
                    message: message,
                } as CancelPreAuthResponse
                return response;
            case '/status':
                const statusResponse: any = {}
                params.forEach((value, key) => {
                    statusResponse[key] = decodeURIComponent(value);
                });
                return statusResponse as StatusResponse;
            default:
                throw new Error(`Error in parsing response from ${url}: bad URL endpoint.`)
        }
    }
}
