export type CapturePreAuthRequest = {
    transId: string;
    amount?: string;
};
export type CapturePreAuthResponse = {
    code: CapturePreAuthResponseCode;
    message: string;
};
export type CapturePreAuthResponseCode = 0 | 1100 | 1104 | 1200 | 1301 | 1303 | 1399 | 1400 | 1500;
