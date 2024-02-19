export type MethodsRequest = {
    type?: MethodsType;
    lang?: MethodsLanguage;
    curr?: MethodsCurr;
    country?: MethodsCountry;
};
export type MethodsType = 'xml' | 'json';
export type MethodsLanguage = 'cs' | 'en' | 'pl';
export type MethodsCurr = 'CZK' | 'EUR' | 'PLN' | 'HUF' | 'USD' | 'GBP' | 'RON' | 'HRK' | 'NOK' | 'SEK';
export type MethodsCountry = 'CZ' | 'SK';
export type MethodsSuccessResponse = {
    methods: MethodProps[];
};
export type MethodProps = {
    id?: string;
    name?: string;
    description?: string;
    logo?: string;
};
export type MethodsBadRequestResponse = {
    error: {
        code?: MethodsBadRequestResponseCode;
        message?: string;
        extraMessage?: string;
    };
};
export type MethodsBadRequestResponseCode = 0 | 1100 | 1200 | 1400 | 1500;
