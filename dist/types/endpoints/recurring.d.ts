export type RecurringRequest = {
    country?: RecurringCountry;
    price: string;
    curr: string;
    label: string;
    refId: string;
    account?: string;
    email: string;
    name?: string;
    prepareOnly: boolean;
    initRecurringId: string;
};
export type RecurringCountry = 'ALL' | 'CZ' | 'SK' | 'PL';
export type RecurringResponse = {
    code: RecurringResponseCode;
    message: string;
    transId?: string;
};
export type RecurringResponseCode = 0 | 1100 | 1102 | 1103 | 1104 | 1200 | 1301 | 1303 | 1304 | 1305 | 1308 | 1309 | 1310 | 1311 | 1316 | 1317 | 1318 | 1319 | 1399 | 1400 | 1500;
