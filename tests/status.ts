import { comgateClient } from "./client";

async function status(transId: string) {
    try {
        const response = await comgateClient.status({
            transId: transId
        })
        console.log('Payment status response:', response);
    } catch (error) {
        console.error('Error status payment:', error);
    }
}

const transId = process.argv[2]
if (!transId) {
    console.error("Please provide a transaction ID.");
    process.exit(1);
}

status(transId)
