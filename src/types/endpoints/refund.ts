// https://apidoc.comgate.cz/?lang=en#refund

export type RefundRequest = {
    transId: string; // unique alphanumeric transaction identifier (code) (transactionId)
    amount: string; // refund amount - can be the full or partial amount of the transaction
    curr?: string; // refund currency, if not filled in, ‘CZK’ will be used
    refId?: string; // parameter suitable for entering the refund identification number on the customer’s side (it does not have to be unique, i.e. it is possible to create multiple refunds with the same refId); in the Client Portal under refund section and the daily csv for the refund, the parameter is marked as the Client ID. If this parameter is not attached to the refund, the original refId of the created payment will be displayed for the payment.
}

export type RefundResponse = {
    code: RefundResponseCode; // Method return code
    message: string; // Detailed message or error description
}

export type RefundResponseCode =
    0 // OK
    | 1100 // unknown error
    | 1200 // database error
    | 1400 // wrong query
    | 1401 // refunded payment is in CANCELLED status
    | 1402 // refund amount higher than allowed
    | 1500 // unexpected error
;
