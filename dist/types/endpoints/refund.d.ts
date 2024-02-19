export type RefundRequest = {
    transId: string;
    amount: string;
    curr?: string;
    refId?: string;
};
export type RefundResponse = {
    code: RefundResponseCode;
    message: string;
};
export type RefundResponseCode = 0 | 1100 | 1200 | 1400 | 1401 | 1402 | 1500;
