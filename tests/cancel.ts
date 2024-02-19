import { comgateClient } from "./client";

async function cancel(transId: string) {
    try {
        const response = await comgateClient.cancel({
            transId: transId
        })
        console.log('Payment cancel response:', response);
    } catch (error) {
        console.error('Error cancel payment:', error);
    }
}


const transId = process.argv[2]
if (!transId) {
    console.error("Please provide a transId.");
    process.exit(1);
}

cancel(transId)
