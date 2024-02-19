// https://apidoc.comgate.cz/?lang=en#recurring

export type RecurringRequest = {
    country?: RecurringCountry; // Country codes, defaults to 'CZ'.
    price: string; // Price of the product in cents or pennies. Must be min. 10 CZK (incl.), Max. unlimited.
    curr: string; // Currency code according to ISO 4217, standard ‘CZK’.
    label: string; // Short product description (1-16 characters)
    refId: string; // Payment reference in the e-shop system (it does not have to be unique, i.e. it is possible to create multiple payments with the same refId).
    account?: string; // The identifier of the e-shop bank account to which Comgate will transfer the money. If you do not complete the parameter, the default e-shop account will be used. You can find a list of e-shop accounts at https://portal.comgate.cz/.
    email: string; // Payer’s contact e-mail (for the purposes of possible complaints)
    name?: string; // Product identifier - this item allows you to navigate to the payment statistics of the Comgate payment system.
    prepareOnly: boolean; // The parameter must be set to ‘true’. Recurring payments cannot be created by redirection.
    initRecurringId: string; // Comgate ID of the initial payment
}

export type RecurringCountry =
    'ALL'
    | 'CZ'
    | 'SK'
    | 'PL'
;

export type RecurringResponse = {
    code: RecurringResponseCode; // Method return code
    message: string; // Detailed message or error description
    transId?: string; // A unique alphanumeric transaction identifier (code) that will be displayed to the payer at various stages of payment
}

export type RecurringResponseCode =
    0 // OK
    | 1100 // unknown error
    | 1102 // specified language is not supported
    | 1103 // method incorrectly specified
    | 1104 // unable to load payment
    | 1200 // database error
    | 1301 // unknown e-shop
    | 1303 // missing link or language
    | 1304 // invalid category
    | 1305 // product description missing
    | 1308 // selected payment method is not allowed
    | 1309 // incorrect amount
    | 1310 // unknown currency
    | 1311 // invalid e-shop bank account identifier
    | 1316 // e-shop does not allow recurring payments
    | 1317 // invalid method - does not support recurring payments
    | 1318 // initial payment not found
    | 1319 // can not create a payment, problem with the bank
    | 1399 // unexpected result from database
    | 1400 // wrong query
    | 1500 // unexpected error
;
