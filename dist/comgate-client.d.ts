import { AxiosInstance } from "axios";
import { HttpMethod, ComgateClientProps } from "./types";
import { CreateRequest, CreateResponse } from "./types/endpoints/create";
import { CancelRequest, CancelResponse } from "./types/endpoints/cancel";
import { RecurringRequest, RecurringResponse } from "./types/endpoints/recurring";
import { RefundRequest, RefundResponse } from "./types/endpoints/refund";
import { CapturePreAuthRequest, CapturePreAuthResponse } from "./types/endpoints/capturePreauth";
import { CancelPreAuthRequest, CancelPreAuthResponse } from "./types/endpoints/cancelPreauth";
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
    private apiBaseUrl;
    private apiVersion;
    private readonly merchant;
    private readonly secret;
    private readonly test;
    protected readonly axiosInstance: AxiosInstance;
    constructor({ merchant, secret, test }: ComgateClientProps);
    protected callApi<T>(request: ApiRequest): Promise<T>;
    create(request: CreateRequest): Promise<CreateResponse>;
    cancel(request: CancelRequest): Promise<CancelResponse>;
    recurring(request: RecurringRequest): Promise<RecurringResponse>;
    refund(request: RefundRequest): Promise<RefundResponse>;
    capturePreauth(request: CapturePreAuthRequest): Promise<CapturePreAuthResponse>;
    cancelPreauth(request: CancelPreAuthRequest): Promise<CancelPreAuthResponse>;
    methods(request: MethodsRequest): Promise<MethodsSuccessResponse | MethodsBadRequestResponse>;
    status(request: StatusRequest): Promise<StatusResponse>;
}
export {};
