import { comgateClient } from "./client";
import {
    CreateCountry,
    CreateCurr,
    CreateLanguage
} from "../src/types/endpoints/create";

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
            prepareOnly: prepareOnly,
            preauth: false,
            initRecurring: false,
            verification: false
        })
        console.log('Payment create response:', response);
    } catch (error) {
        console.error('Error create payment:', error);
    }
}

const country = process.argv[2] as CreateCountry
if (!country) {
    console.error("Please provide a country.");
    process.exit(1);
}

const price = Number(process.argv[3])
if (!price) {
    console.error("Please provide a price.");
    process.exit(1);
}

const curr = process.argv[4] as CreateCurr
if (!curr) {
    console.error("Please provide a curr.");
    process.exit(1);
}


const label = process.argv[5]
if (!label) {
    console.error("Please provide a label.");
    process.exit(1);
}


const refId = process.argv[6]
if (!refId) {
    console.error("Please provide a refId.");
    process.exit(1);
}


const method = process.argv[7]
if (!method) {
    console.error("Please provide a method.");
    process.exit(1);
}


const email = process.argv[8]
if (!email) {
    console.error("Please provide a email.");
    process.exit(1);
}


const lang = process.argv[9] as CreateLanguage
if (!lang) {
    console.error("Please provide a lang.");
    process.exit(1);
}

const prepareOnly = (process.argv[10] == "true")
if (!prepareOnly) {
    console.error("Please provide a prepareOnly.");
    process.exit(1);
}


create(country, price, curr, label, refId, method, email, lang, prepareOnly)
