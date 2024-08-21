import Provider from "./Provider";
import Razorpay from "razorpay";
import RazorpayOrder from "./types/RazorpayOrder";

export class RazorpayProvider implements Provider {
    private razorpay: Razorpay;
    private name: string = "razorpay";

    constructor(publicKey: string, privateKey: string) {
        this.razorpay = new Razorpay({
            key_id: publicKey,
            key_secret: privateKey
        });
    }

    async initializePayment(amount: number, currency: string, receiptId: string, notes?: string): Promise<RazorpayOrder> {
        const options = {
            amount,
            currency: currency.toUpperCase(),
            receipt: receiptId,
            notes: notes ? { notes } : undefined
        }

        try {
            const order = await this.razorpay.orders.create(options);
            return new RazorpayOrder(order.id);
        } catch (error: any) {
            console.log(error)
            throw new Error(`Razorpay order creation failed: ${error.message}`)
        }
    }

    capturePayment(): string {
        throw new Error("Method not implemented.");
    }

    public getName(): string {
        return this.name
    }
}