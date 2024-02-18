//https://apidoc.comgate.cz/?lang=en#create

export type CreateRequest = {
    country?: CreateCountry; // Country codes, defaults to 'CZ'.
    price: number; // Price for a product in cents or pennies. Must be in minimum of 1 CZK; 0,1 EUR; 1 PLN; 100 HUF; 1 USD; 1 GBP; 5 RON; 1 HRK; 0,5 NOK; 0,5 SEK. Maximum is not limited.
    curr: CreateCurr; // Currency code according to ISO 4217. Available currencies: CZK, EUR, PLN, HUF, USD, GBP, RON, HRK, NOK, SEK.
    label: string; // Short description of the product (1-16 characters) - this item enable to filter payments in the Client Portal.
    refId: string; // Parameter suitable for entering a variable symbol or order number on the Client’s side (it does not have to be unique, ie it is possible to create more payments with the same refId). In the Client Portal and daily csv. the parameter is marked as Client ID.
    method: string; // Selected payment methods: ALL, BANK_ALL-BANK_CZ_KB, CARD_ALL, APPLEPAY_REDIRECT, GOOGLEPAY_REDIRECT, BANK_CZ_FB+BANK_CZ_UC, …
    account?: string; // Identifier of the Client’s bank account to which Comgate will transfer money. If you do not fill in the parameter, the default Client account will be used. You can find a list of the Client’s accounts at https://portal.comgate.cz/.
    email: string; // Contact email on the Payer (for the purposes of a possible complaint)
    name?: string; // Product identifier - this item is located in the client’s daily csv under the name Product.
    lang?: CreateLanguage; // Language code (ISO 639-1) in which the Payer will be shown instructions for completing the payment, default allowed values (‘cs’, ‘sk’, ‘en’, ‘pl’, ‘fr’, ‘ro’, ‘de’ , ‘hu’, ‘si’, ‘hr’), if the parameter is missing, ‘cs’ will be used, in case of request for another language, contact platby-podpora@comgate.cz.
    prepareOnly: boolean; // In the case of creating payment in the background fill in ‘true’. When creating a payment by redirection, fill in either ‘false’ or do not use the parameter. You can find which payment method is setted up as allowed in the Client Portal in the Integration section - connection of e-shop.
    preauth?: boolean; // In the case of a request to pre-authorize credit card payments set to ‘true’. In the case of a normal payment, fill in ‘false’ or do not use the parameter. Only for card payments.
    initRecurring?: boolean; // Parameter for creating an initial transaction for recurring payments. Only for Clients who have the service enabled.
    verification?: boolean; // Verification payment parameter, in case of a request to create a verification payment (value ‘true’) it is not necessary to send the initRecurring parameter.
    applePayPayload?: string; // If you want to set up an Apple Pay payment and process it directly, you must fill in this parameter together with method=APPLEPAY_ESHOP.
    expirationTime?: string; // If you want to change the expiration date of an individual payment, you can do so by entering this parameter. The allowed value is between 30 minutes and 7 days. The default value is according to the settings in the Client Portal. The value is in the format: ^[1-9][0-9]*(m|h|d)$. For example,: 30m, 3h, 250m, 1d, 5d.
    dynamicExpiration?: boolean; // Enable or disable dynamic expiration. The default state is according to the settings in the Client Portal.
    url_paid?: string; // Custom settings for single payment. E.g.: ‘https://www.example.com/result.php?id=${id}&refId=${refId}’
    url_cancelled?: string; // Custom settings for single payment. E.g.: ‘https://www.example.com/result.php?id=${id}&refId=${refId}’
    url_pending?: string; // Custom settings for single payment. E.g.: ‘https://www.example.com/result.php?id=${id}&refId=${refId}’
}

export type CreateCountry =
    'ALL'
    | 'AT'
    | 'BE'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'EE'
    | 'EL'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'HR'
    | 'HU'
    | 'IE'
    | 'IT'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'MT'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'SL'
    | 'SK'
    | 'SV'
    | 'US'
;

export type CreateCurr =
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

export type CreateLanguage =
    'cs'
    | 'sk'
    | 'en'
    | 'pl'
    | 'fr'
    | 'ro'
    | 'de'
    | 'hu'
    | 'si'
    | 'hr'
    | 'no'
    | 'sv'
;

export type CreateResponse = {
    code: CreateResponseCode; // Method return code
    message: string; // Detailed message or error description
    transId?: string; // Unique alphanumeric identifier (code) of the transaction, which will be displayed to the Payer at various stages of payment.
    redirect?: string; // URL of the page where the Payer is to be redirected to make the payment.
}

export type CreateResponseCode =
    0 // OK
    | 1100 // unknown error
    | 1102 // specified language is not supported
    | 1103 // method incorrectly specified
    | 1104 // unable to load payment
    | 1107 // payment price not supported
    | 1200 // database error
    | 1301 // unknown e-shop
    | 1303 // missing link or language
    | 1304 // invalid category
    | 1305 // product description missing
;
