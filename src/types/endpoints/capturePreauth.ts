// https://apidoc.comgate.cz/?lang=en#capturepreauth

export type CapturePreAuthRequest = {
    transId: string; // unique alphanumeric identifier (code) of the transaction (transactionId)
    amount?: string; // the amount of pre-authorization to be debitd from the card - it can be in the full or partial amount of the transaction
}

export type CapturePreAuthResponse = {
    code: CapturePreAuthResponseCode; // Method return code
    message: string; // Detailed message or error description
}

export type CapturePreAuthResponseCode =
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

