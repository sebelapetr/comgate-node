// https://apidoc.comgate.cz/?lang=en#status

export type StatusRequest = {
    transId: string; // unique alphanumeric identifier (code) of the transaction (transactionId)
}

export type StatusResponse = {
    code: StatusResponseCode; // Method return code. In the case of code = 0, the following parameters are in the response
    message: string; // Detailed message or error description
    merchant: string; // e-shop identifier in the Comgate system
    test: string; // A value of ‘true’ means that the payment was created as a test, a value of ‘false’ means a production version.
    price: string; // price of the product in cents or pennies
    curr: string; // currency code according to ISO 4217
    label: string; // short product description (1-16 characters)
    refId: string; // payment references in the e-shop system
    payerId?: string; // payer identifier in the e-shop system
    method?: string; // payment method used, from the table of payment methods
    account?: string; // identifier of the e-shop bank account to which Comgate will transfer the money
    email: string; // payer’s contact e-mail
    name?: string; // product identifier - this item allows you to navigate to the payment statistics of the Comgate payment system
    transId: string; // unique alphanumeric transaction identifier (code) (transactionId)
    secret: string; // password for background communication
    status: StatusResponseStatus; // current transaction status
    payerName?: string; // transmission of the name of the account belonging to the payer
    payerAcc?: string; // transmission of the payer’s account number
    fee?: string; // if the e-shop has set up automatic deduction of the payment fee, the transaction fee will be calculated in this field, otherwise, the field will take the value ‘unknown’
    vs?: string; // variable payment symbol (may not always be available)
}

export type StatusResponseStatus =
    'PENDING' // the payment is created, the final result is not known
    | 'PAID' // payment was successfully paid
    | 'CANCELLED' // the payment was not completed correctly and is cancelled
    | 'AUTHORIZED' // the requested pre-authorization was successful

export type StatusResponseCode =
    "0" // OK
    | "1100" // unknown error
    | "1200" // database error
    | "1400" // wrong query
    | "1500" // unexpected error
;
