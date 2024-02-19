import ComgateClient from "../src/comgate-client"
import 'dotenv/config';

export const comgateClient = new ComgateClient({
    merchant: Number(process.env.MERCHANT),
    secret: process.env.SECRET as string,
    test: true
})
