import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import {
    HttpMethod,
    ComgateClientProps,
} from "./types";

import { CreateRequest, CreateResponse } from "./types/endpoints/create"
import { CancelRequest, CancelResponse } from "./types/endpoints/cancel"
import { RecurringRequest, RecurringResponse } from "./types/endpoints/recurring"
import { RefundRequest, RefundResponse } from "./types/endpoints/refund"
import { CapturePreAuthRequest, CapturePreAuthResponse } from "./types/endpoints/capturePreauth"
import { CancelPreAuthRequest, CancelPreAuthResponse } from "./types/endpoints/cancelPreauth"
import { MethodsBadRequestResponse, MethodsSuccessResponse, MethodsRequest } from "./types/endpoints/methods";
import { StatusRequest, StatusResponse } from "./types/endpoints/status";

interface ApiRequest {
    path: string;
    method: HttpMethod;
    headers?: Record<string, string>;
    body?: Record<string, unknown>;
    query?: Record<string, string>;
}

export default class ComgateClient {
    private apiBaseUrl = 'https://payments.comgate.cz/'
    private apiVersion = '1.0'
    private readonly merchant: number // E-shop identifier in the ComGate system.
    private readonly secret: string // Password for background communication.
    private readonly test: boolean // 'true' for test payment, 'false' for production. Defaults to 'false'.
    protected readonly axiosInstance: AxiosInstance;

    constructor({ merchant, secret, test }: ComgateClientProps) {
        this.merchant = merchant
        this.secret = secret
        this.test = test
        this.axiosInstance = axios.create({
            baseURL: this.apiBaseUrl + this.apiVersion,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }

    protected async callApi<T>(request: ApiRequest): Promise<T> {
        const options = {
            method: request.method,
            url: request.path,
            params: request.query,
            data: {
                secret: this.secret,
                merchant: this.merchant,
                ...request.body
            },
        } satisfies AxiosRequestConfig;

        try {
            const res = await this.axiosInstance(options);
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(
                    `Error from Comgate API with status code ${error.response?.status}: ${error.response?.data?.message}`,
                );
            }

            throw error;
        }
    }

    // https://apidoc.comgate.cz/?lang=en#create
    protected create(request: CreateRequest): Promise<CreateResponse> {
        return this.callApi<CreateResponse>
        ({
            path: "/create",
            method: "POST",
            body: {
                test: this.test,
                ...request
            },
        })
    }

    // https://apidoc.comgate.cz/?lang=en#cancel
    protected cancel(request: CancelRequest): Promise<CancelResponse> {
        return this.callApi<CancelResponse>
        ({
            path: "/cancel",
            method: "POST",
            body: request,
        })
    }

    // https://apidoc.comgate.cz/?lang=en#recurring
    protected recurring(request: RecurringRequest): Promise<RecurringResponse> {
        return this.callApi<RecurringResponse>
        ({
            path: "/create",
            method: "POST",
            body: {
                test: this.test,
                ...request
            },
        })
    }

    // https://apidoc.comgate.cz/?lang=en#refund
    protected refund(request: RefundRequest): Promise<RefundResponse> {
        return this.callApi<RefundResponse>
        ({
            path: "/refund",
            method: "POST",
            body: {
                test: this.test,
                ...request
            },
        })
    }

    // https://apidoc.comgate.cz/?lang=en#capturepreauth
    protected capturePreauth(request: CapturePreAuthRequest): Promise<CapturePreAuthResponse> {
        return this.callApi<CapturePreAuthResponse>
        ({
            path: "/capturePreauth",
            method: "POST",
            body: {
                ...request
            },
        })
    }

    // https://apidoc.comgate.cz/?lang=en#cancelpreauth
    protected cancelPreauth(request: CancelPreAuthRequest): Promise<CancelPreAuthResponse> {
        return this.callApi<CancelPreAuthResponse>
        ({
            path: "/cancelPreauth",
            method: "POST",
            body: {
                ...request
            },
        })
    }

    // https://apidoc.comgate.cz/?lang=en#methods
    protected methods(request: MethodsRequest): Promise<MethodsSuccessResponse | MethodsBadRequestResponse> {
        return this.callApi<MethodsSuccessResponse | MethodsBadRequestResponse>
        ({
            path: "/methods",
            method: "POST",
            body: {
                ...request
            },
        })
    }

    // https://apidoc.comgate.cz/?lang=en#status
    protected status(request: StatusRequest): Promise<StatusResponse> {
        return this.callApi<StatusResponse>
        ({
            path: "/status",
            method: "POST",
            body: {
                ...request
            },
        })
    }
}
