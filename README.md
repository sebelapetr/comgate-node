# Comgate Payments API Node.js Library

Comgate Payments API Typescript SDK written in Typescript.


<a href="https://github.com/sebelapetr/comgate-node"><img src="https://badgen.net/github/license/sebelapetr/comgate-node"></a>

Implemented API Methods:
* create
* cancel
* recurring
* refund
* capturePreauth
* cancelPreauth
* methods
* status

## Documentation
See official [Comgate REST API Documentation](https://apidoc.comgate.cz/?lang=en#tag_api_title-tag_api_payment_methods).

<a href="https://apidoc.comgate.cz/?lang=en#tag_api_title-tag_api_payment_methods">https://apidoc.comgate.cz</a>

## Requirements
Node 18 or higher.

## Installation
Install the package with:

```sh
npm install comgate-node
# or
yarn add comgate-node
```

## Usage
### Setup client
```sh
import ComgateClient from "comgate-client"

const comgateClient = new ComgateClient({
    merchant: 12345,
    secret: "abcdefgh",
    test: true
})
```
### Examples
```sh
import {
    CreateCountry,
    CreateCurr,
    CreateLanguage
} from "comgate-node/types/endpoints/create";

async function create(
    country: CreateCountry, 
    price: number, 
    curr: CreateCurr, 
    label: string, 
    refId: string, 
    method: string,
    email: string, 
    lang: CreateLanguage, 
    prepareOnly: boolean
) {
    try {
        const response = await comgateClient.create({
            country: country,
            price: price,
            curr: curr,
            label: label,
            refId: refId,
            method: method,
            email: email,
            lang: lang,
            prepareOnly: prepareOnly
        })
        console.log('Payment create response:', response);
    } catch (error) {
        console.error('Error create payment:', error);
    }
}
```

More examples can be found in tests/ folder.

## Testing
Test files are located in tests/ folder.

### Examples:

#### Create payment:
```sh
ts-node tests/create.ts "CZ" 10000 "CZK" "Order from eshop" "1244" "ALL" "test@test.com" "cs" true
```

#### Cancel payment:
```sh
ts-node tests/cancel.ts "ABC-0123-1ABC"
```

#### Create recurring payment:
```sh
# test not implemented
```

#### Refund payment:
```sh
ts-node ts-node tests/refund.ts "ABC-0123-1ABC" "1000" "CZK"
```

#### Capture preauth:
```sh
# test not implemented
```

#### Cancel preauth:
```sh
# test not implemented
```

#### Get Methods:
```sh
ts-node tests/methods.ts "json" "cs" "CZK" "CZ"
```

#### Get Status:
```sh
ts-node tests/status.ts "ABC-0123-1ABC"
```

## Maintenance

<a href="https://github.com/sebelapetr">
    <img width="80" height="80" src="https://avatars.githubusercontent.com/sebelapetr">
</a>

If you find a bug, please submit the issue in [Github](https://github.com/sebelapetr/comgate-node/issues) directly.

