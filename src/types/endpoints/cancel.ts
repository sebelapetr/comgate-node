//https://apidoc.comgate.cz/?lang=en#cancel

export type CancelRequest = {
    transId: string // Unique alphanumeric identifier (code) of the transaction (transactionId)
}

export type CancelResponse = {
    code: CancelResponseCode; // Method return code
    message: string; // Detailed message or error description.
}

export type CancelResponseCode =
    0 // OK
    | 1400 // the payment cannot be changed to CANCELLED status (payment not found, payment is not in PENDING status, unauthorized access)
;

