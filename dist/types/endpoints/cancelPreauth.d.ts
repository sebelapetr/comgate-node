export type CancelPreAuthRequest = {
    transId: string;
};
export type CancelPreAuthResponse = {
    code: CancelPreAuthResponseCode;
    message: string;
};
export type CancelPreAuthResponseCode = 0 | 1100 | 1104 | 1200 | 1301 | 1303 | 1399 | 1400 | 1500;
