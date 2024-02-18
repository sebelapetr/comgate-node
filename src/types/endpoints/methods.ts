// https://apidoc.comgate.cz/?lang=en#methods

export type MethodsRequest = {
    type?: MethodsType; // Format of returned data (‘xml’ or ‘json’). If not filled in, ‘xml’ will be used.
    lang?: MethodsLanguage; // Select the language in which the method descriptions will be. Allowed values are ‘cs’, ‘en’, ‘pl’. If not filled in, ‘cs’ will be used.
    curr?: MethodsCurr; // Filling in the parameter to the values CZK or EUR will return methods that support the specified currency (CZK, EUR, PLN, HUF, USD, GBP, RON, NOK, SEK).
    country?: MethodsCountry; // Country code (‘CZ’, ‘SK’), the parameter is used to limit the selection of payment methods for the specified country.
}

export type MethodsType =
    'xml'
    | 'json'
;

export type MethodsLanguage =
    'cs'
    | 'en'
    | 'pl'
;

export type MethodsCurr =
    'CZK'
    | 'EUR'
    | 'PLN'
    | 'HUF'
    | 'USD'
    | 'GBP'
    | 'RON'
    | 'HRK'
    | 'NOK'
    | 'SEK'
;

export type MethodsCountry =
    'CZ'
    | 'SK'
;

export type MethodsSuccessResponse = {
    methods: MethodProps[] // Available methods
}

export type MethodProps = {
    id?: string; // available payment method
    name?: string; // name of the method in the selected language
    description?: string; // name of the method in the selected language
    logo?: string; // HTTP link to method logo
}

export type MethodsBadRequestResponse = {
    error: {
        code?: MethodsBadRequestResponseCode; // Method return code
        message?: string; // method return code and error description
        extraMessage?: string; // Detailed message or error description
    };
}

export type MethodsBadRequestResponseCode =
    0 // OK
    | 1100 // unknown error
    | 1200 // database error
    | 1400 // wrong query
    | 1500 // unexpected error
;

