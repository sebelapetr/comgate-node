export type StatusRequest = {
    transId: string;
};
export type StatusResponse = {
    code: StatusResponseCode;
    message: string;
    merchant: string;
    test: string;
    price: string;
    curr: string;
    label: string;
    refId: string;
    payerId?: string;
    method?: string;
    account?: string;
    email: string;
    name?: string;
    transId: string;
    secret: string;
    status: StatusResponseStatus;
    payerName?: string;
    payerAcc?: string;
    fee?: string;
    vs?: string;
};
export type StatusResponseStatus = 'PENDING' | 'PAID' | 'CANCELLED' | 'AUTHORIZED';
export type StatusResponseCode = 0 | 1100 | 1200 | 1400 | 1500;
