import { comgateClient } from "./client";
import {
    MethodsCountry,
    MethodsCurr,
    MethodsLanguage,
    MethodsType
} from "../src/types/endpoints/methods";

async function methods(type: MethodsType, lang: MethodsLanguage, curr: MethodsCurr, country: MethodsCountry) {
    try {
        const response = await comgateClient.methods({
            type: type,
            lang: lang,
            curr: curr,
            country: country
        })
        console.log('Methods response:', response);
    } catch (error) {
        console.error('Error methods:', error);
    }
}


const type = process.argv[2] as MethodsType
if (!type) {
    console.error("Please provide a type.");
    process.exit(1);
}

const lang = process.argv[3] as MethodsLanguage
if (!lang) {
    console.error("Please provide a lang.");
    process.exit(1);
}

const curr = process.argv[4] as MethodsCurr
if (!curr) {
    console.error("Please provide a curr.");
    process.exit(1);
}
const country = process.argv[5] as MethodsCountry
if (!country) {
    console.error("Please provide a country.");
    process.exit(1);
}

methods(type, lang, curr, country);
