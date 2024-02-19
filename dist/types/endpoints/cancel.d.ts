export type CancelRequest = {
    transId: string;
};
export type CancelResponse = {
    code: CancelResponseCode;
    message: string;
};
export type CancelResponseCode = 0 | 1400;
