import { comgateClient } from "./client";

async function refund(transId: string, amount: string, curr: string) {
    try {
        const response = await comgateClient.refund({
            transId: transId,
            amount: amount,
            curr: "CZK"
        })
        console.log('Payment refund response:', response);
    } catch (error) {
        console.error('Error refund payment:', error);
    }
}

const transId = process.argv[2]
if (!transId) {
    console.error("Please provide a transaction ID.");
    process.exit(1);
}

const amount = process.argv[3]
if (!amount) {
    console.error("Please provide a amount.");
    process.exit(1);
}

const curr = process.argv[4]
if (!curr) {
    console.error("Please provide a curr.");
    process.exit(1);
}

refund(transId, amount, curr)
