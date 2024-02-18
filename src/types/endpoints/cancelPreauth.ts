// https://apidoc.comgate.cz/?lang=en#cancelpreauth

export type CancelPreAuthRequest = {
    transId: string; // unique alphanumeric identifier (code) of the transaction (transactionId)
}

export type CancelPreAuthResponse = {
    code: CancelPreAuthResponseCode; // Method return code
    message: string; // Detailed message or error description
}

export type CancelPreAuthResponseCode =
    0 // OK
    | 1100 // unknown error
    | 1104 // unable to load payment
    | 1200 // database error
    | 1301 // unknown e-shop
    | 1303 // missing link or language
    | 1399 // unexpected result from database
    | 1400 // wrong query
    | 1500 // unexpected error
;

